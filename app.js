/* 純瀏覽器程式；計算核心亦供 Node 測試使用。 */
(() => {
  'use strict';
  const DATA = window.APP_DATA;
  const byId = Object.fromEntries(DATA.recipes.map(r => [r.id, r]));
  const setById = Object.fromEntries(DATA.sets.map(s => [s.id, s]));
  const roles = {main: '主菜', side: '配菜', starch: '主食', breakfast: '早餐'};
  const days = ['週一', '週二', '週三', '週四', '週五', '週六', '週日'];
  const overlap = (a, b) => a.start < b.end && b.start < a.end;

  // 提前步驟之前的工作也是必要前置，保留原順序，不改寫來源資料。
  function preparationSteps(recipe) {
    const last = recipe.steps.reduce((index, step, i) => step.advance === true ? i : index, -1);
    return recipe.steps.map((step, stepIndex) => ({...step, stepIndex, advance: stepIndex <= last}));
  }
  function schedule(recipes) {
    if (!recipes.length) throw new Error('請先選一道主菜。');
    if (new Set(recipes.map(r => r.id)).size !== recipes.length) throw new Error('食譜不可重複。');
    const advance = recipes.flatMap(recipe => preparationSteps(recipe).filter(s => s.advance)
      .map(step => ({...step, recipeId: recipe.id, recipeName: recipe.name})));
    const jobs = recipes.map(recipe => ({recipe: {...recipe, steps: preparationSteps(recipe).filter(s => !s.advance)}, next: 0, ready: 0}));
    const reservations = new Map();
    const rows = [];
    let clock = 0;
    function block(job) {
      const steps = job.recipe.steps;
      const first = steps[job.next];
      let end = job.next + 1;
      // 同鍋連續步驟整段保留，連步驟之間的等待也不讓別道菜插隊。
      if (first.device) while (end < steps.length && steps[end].device === first.device) end++;
      let length = 0;
      const needs = [];
      for (let i = job.next; i < end; i++) {
        const step = steps[i];
        if (!Number.isFinite(step.min) || step.min <= 0 || (step.device && !DATA.devices.includes(step.device))) throw new Error('步驟時間或設備不合法。');
        if (step.attended) needs.push({resource: '人手', offset: length, duration: step.min});
        length += step.min;
      }
      if (first.device) needs.push({resource: first.device, offset: 0, duration: length});
      return {end, length, needs};
    }
    function earliest(start, needs) {
      // 未來的人手時段也先保留，以保證鍋內連續步驟無縫接續。
      while (true) {
        let moved = start;
        for (const need of needs) {
          const slot = {start: start + need.offset, end: start + need.offset + need.duration};
          for (const used of reservations.get(need.resource) || []) {
            if (overlap(slot, used)) moved = Math.max(moved, used.end - need.offset);
          }
        }
        if (moved === start) return start;
        start = moved;
      }
    }
    while (jobs.some(j => j.next < j.recipe.steps.length)) {
      const candidates = [];
      for (const job of jobs) {
        if (job.next === job.recipe.steps.length) continue;
        const run = block(job);
        let release = Math.max(clock, job.ready);
        // 長時間主食先完成；主菜最後一段可稍晚開煮／收尾。
        if (job.recipe.role === 'main' && run.end === job.recipe.steps.length) {
          const longOthers = jobs.filter(j => j !== job && j.recipe.role !== 'main' && j.recipe.steps.some(s => !s.attended && s.min >= 30));
          if (longOthers.some(j => j.next < j.recipe.steps.length)) continue;
          release = Math.max(release, ...longOthers.map(j => j.ready - run.length));
        }
        const start = earliest(release, run.needs);
        const remaining = job.recipe.steps.slice(job.next).reduce((sum, s) => sum + s.min, 0);
        candidates.push({job, run, start, remaining});
      }
      if (!candidates.length) throw new Error('排程無法繼續，請調整選菜。');
      candidates.sort((a, b) => a.start - b.start || b.remaining - a.remaining || a.job.recipe.id.localeCompare(b.job.recipe.id));
      const {job, run, start} = candidates[0];
      clock = start;
      for (const need of run.needs) {
        if (!reservations.has(need.resource)) reservations.set(need.resource, []);
        reservations.get(need.resource).push({start: start + need.offset, end: start + need.offset + need.duration});
      }
      let time = start;
      for (let i = job.next; i < run.end; i++) {
        const step = job.recipe.steps[i];
        rows.push({...step, recipeId: job.recipe.id, recipeName: job.recipe.name, stepIndex: step.stepIndex, start: time, end: time + step.min});
        time += step.min;
      }
      job.next = run.end;
      job.ready = time;
    }
    const cookingEnd = Math.max(...jobs.map(j => j.ready));
    rows.push({recipeId: null, recipeName: '四盒一起裝', stepIndex: 0, text: '分裝 4 盒：我晚餐、媽媽晚餐、我便當、媽媽便當。', min: 10, device: null, attended: true, start: cookingEnd, end: cookingEnd + 10});
    rows.sort((a, b) => a.start - b.start || a.end - b.end);
    return {rows, advance, cookingEnd, total: cookingEnd + 10};
  }

  function ingredientsFor(recipes) {
    const totals = {};
    for (const recipe of recipes) for (const i of recipe.ingredients) totals[i.food] = (totals[i.food] || 0) + i.g;
    return totals;
  }
  function coverage(recipes, fridge) {
    const needed = Object.entries(ingredientsFor(recipes)).filter(([id]) => !DATA.foods[id].pantry);
    const missing = [];
    let covered = 0;
    for (const [id, grams] of needed) {
      const stock = fridge[id];
      const available = stock?.has ? (stock.grams === '' || stock.grams == null ? grams : Number(stock.grams)) : 0;
      covered += Math.min(1, Math.max(0, available) / grams);
      if (available < grams) missing.push({id, grams: grams - available});
    }
    return {ratio: needed.length ? covered / needed.length : 1, missing};
  }
  function breakfastBatches(value) {
    return Number.isInteger(value) ? Math.max(0, Math.min(3, value)) : 0;
  }
  function shopping(week, fridge, breakfast = {}) {
    const totals = ingredientsFor(week.filter(d => d.enabled && setById[d.set]).flatMap(d => setById[d.set].recipes.map(id => byId[id])));
    for (const recipe of DATA.recipes.filter(r => r.role === 'breakfast')) {
      const batches = breakfastBatches(breakfast[recipe.id]);
      if (batches) for (const i of recipe.ingredients) totals[i.food] = (totals[i.food] || 0) + i.g * batches;
    }
    return Object.entries(totals).map(([id, required]) => {
      const food = DATA.foods[id], stock = fridge[id];
      const unknown = !food.pantry && !!stock?.has && (stock.grams === '' || stock.grams == null);
      const available = !food.pantry && stock?.has && !unknown ? Math.max(0, Number(stock.grams) || 0) : 0;
      return {id, required, grams: Math.max(0, required - available), unknown, pantry: !!food.pantry};
    });
  }
  function autoWeek(week) {
    let previous = null;
    const counts = {};
    return week.map(day => {
      if (!day.enabled) return {...day};
      const mainOf = s => byId[s.recipes.find(id => byId[id].role === 'main')];
      const eligible = DATA.sets.filter(s => {
        const main = mainOf(s);
        return !previous || (main.id !== previous.id && !main.proteins.some(p => previous.proteins.includes(p)));
      });
      const candidates = eligible.length ? eligible : DATA.sets;
      const chosen = [...candidates].sort((a, b) => (counts[a.id] || 0) - (counts[b.id] || 0) || a.id.localeCompare(b.id))[0];
      counts[chosen.id] = (counts[chosen.id] || 0) + 1;
      previous = mainOf(chosen);
      return {...day, set: chosen.id};
    });
  }
  function shares(me, mom) { return [me, mom, me, mom].map(n => n / (2 * (me + mom))); }
  function nutrition(recipes, fraction) {
    return Object.fromEntries(Object.keys(DATA.nutrients).map(key => {
      const values = recipes.map(r => r.nutrition.total[key]).filter(v => v !== null);
      return [key, {value: values.length ? values.reduce((a, b) => a + b, 0) * fraction : null,
        missing: [...new Set(recipes.flatMap(r => r.nutrition.missing[key]))]}];
    }));
  }
  window.MealPrep = {preparationSteps, schedule, ingredientsFor, coverage, shopping, autoWeek, shares, nutrition};
  if (typeof document === 'undefined') return;

  const $ = selector => document.querySelector(selector);
  const content = $('#content');
  let toastTimer;
  function notify(message) {
    const node = $('#notice');
    node.textContent = message; node.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { node.hidden = true; }, 6500);
  }
  const defaults = () => ({favorites: [], notes: {}, fridge: {}, bought: {}, ratios: {me: 1, mom: 1}, start: '18:00',
    selected: [...DATA.sets[0].recipes], breakfast: {}, week: days.map((_, i) => ({enabled: i < 3, set: DATA.sets[i].id}))});
  function readState() {
    const base = defaults();
    try {
      const raw = JSON.parse(localStorage.getItem('mealprep:v1') || 'null');
      if (!raw || typeof raw !== 'object') return base;
      for (const r of DATA.recipes.filter(r => r.role === 'breakfast')) base.breakfast[r.id] = breakfastBatches(raw.breakfast?.[r.id]);
      base.favorites = Array.isArray(raw.favorites) ? raw.favorites.filter(id => byId[id]) : [];
      for (const r of DATA.recipes) if (typeof raw.notes?.[r.id] === 'string') base.notes[r.id] = raw.notes[r.id];
      for (const id of Object.keys(DATA.foods)) {
        const f = raw.fridge?.[id];
        if (f && typeof f.has === 'boolean') base.fridge[id] = {has: f.has, grams: f.grams === '' || f.grams == null ? '' : Number.isFinite(Number(f.grams)) && Number(f.grams) >= 0 ? Number(f.grams) : ''};
        if (raw.bought?.[id] === true) base.bought[id] = true;
      }
      for (const who of ['me', 'mom']) if (Number.isFinite(raw.ratios?.[who])) base.ratios[who] = Math.max(0.6, Math.min(1.4, raw.ratios[who]));
      if (/^([01]\d|2[0-3]):[0-5]\d$/.test(raw.start)) base.start = raw.start;
      if (Array.isArray(raw.selected) && validSelection(raw.selected)) base.selected = raw.selected;
      if (Array.isArray(raw.week) && raw.week.length === 7) base.week = raw.week.map((d, i) => ({enabled: !!d?.enabled, set: setById[d?.set] ? d.set : base.week[i].set}));
      return base;
    } catch (_) { notify('無法讀取儲存資料，仍可正常使用；這次變更可能無法保留。'); return base; }
  }
  function validSelection(ids) {
    if (new Set(ids).size !== ids.length || ids.some(id => !byId[id] || byId[id].role === 'breakfast')) return false;
    const count = role => ids.filter(id => byId[id].role === role).length;
    return count('main') === 1 && count('side') <= 2 && count('starch') <= 1;
  }
  let state = readState();
  function save() {
    try { localStorage.setItem('mealprep:v1', JSON.stringify(state)); }
    catch (_) { notify('瀏覽器無法儲存資料（可能是隱私模式或空間不足）。目前仍可操作，關閉後可能不會保留。'); }
  }
  // 所有文字都用 textContent；筆記、搜尋和食材數量不作 HTML 解讀。
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text != null) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function append(parent, ...nodes) { nodes.filter(Boolean).forEach(n => parent.append(n)); return parent; }
  function button(text, action, className = 'button') {
    const node = el('button', text, className); node.type = 'button'; node.addEventListener('click', action); return node;
  }
  function label(text, input) { return append(el('label', null, 'field'), el('span', text), input); }
  function select(options, value, action) {
    const node = el('select');
    for (const [id, name] of options) { const option = el('option', name); option.value = id; node.append(option); }
    node.value = value; if (action) node.addEventListener('change', () => action(node.value)); return node;
  }
  function checkbox(text, checked, action) {
    const input = el('input'); input.type = 'checkbox'; input.checked = checked;
    input.addEventListener('change', () => action(input.checked));
    return append(el('label', null, 'check'), input, el('span', text));
  }
  function heading(kicker, title, description) {
    append(content, append(el('div', null, 'page-heading'), el('p', kicker, 'eyebrow'), el('h1', title), el('p', description, 'muted')));
  }
  function panel(title, className = '') { const node = el('section', null, `panel ${className}`); if (title) node.append(el('h2', title)); return node; }
  function list(items, parent, className = '') { const ul = el('ul', null, className); items.filter(Boolean).forEach(t => ul.append(el('li', t))); parent.append(ul); }
  const fmt = (number, digits = 1) => (Math.round((number + Number.EPSILON * Math.max(1, Math.abs(number))) * 10 ** digits) / 10 ** digits).toLocaleString('zh-TW', {maximumFractionDigits: digits});
  const selectedRecipes = () => state.selected.map(id => byId[id]);
  function portionText(recipe, multiplier = 1) {
    const p = recipe.portion;
    if (p.value === null) return '掌拳換算待補';
    if (recipe.role === 'breakfast') return `${fmt(p.value * multiplier)} 罐`;
    const value = Math.round(p.value * multiplier * 2) / 2;
    return value === 0 && p.value * multiplier > 0 ? `少於 0.5 ${p.unit}` : `約 ${fmt(value)} ${p.unit}`;
  }
  function nutritionNode(recipes, fraction) {
    const wrapper = el('div', null, 'nutrition');
    for (const [key, result] of Object.entries(nutrition(recipes, fraction))) {
      const [name, unit] = DATA.nutrients[key];
      const item = el('div', null, 'nutrient');
      append(item, el('span', name), el('strong', result.value === null ? '資料缺值' : `${fmt(result.value, 0)} ${unit}`));
      if (result.missing.length) append(item, el('small', '部分缺值', 'missing'));
      if (result.missing.length) item.title = `缺值食材：${result.missing.map(id => DATA.foods[id].name).join('、')}；數字僅計已知部分`;
      wrapper.append(item);
    }
    return wrapper;
  }
  function safetyNode(recipes) {
    const node = panel('便當保存與安全');
    for (const r of recipes) append(node, el('h3', r.name), el('p', `${r.storage.bento ? '適合便當' : '不建議當便當'} · 冷藏最多 ${r.storage.fridgeDays} 天。${r.storage.note || ''}`), el('p', `復熱：${r.storage.reheat}`), r.safety ? el('p', r.safety, 'muted') : null);
    list(DATA.rules.safety, node);
    return node;
  }
  let activePhotoURLs = new Set();
  let renderEpoch = 0;
  let dbPromise;
  function photoDB() {
    if (!dbPromise) dbPromise = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('不支援照片儲存')); return; }
      const request = indexedDB.open('mealprep-photos-v1', 1);
      request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains('photos')) request.result.createObjectStore('photos'); };
      request.onsuccess = () => { const db = request.result; db.onversionchange = () => db.close(); resolve(db); };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error('照片資料庫被其他分頁占用'));
    }).catch(error => { dbPromise = null; throw error; });
    return dbPromise;
  }
  async function photoStore(id, file) {
    const db = await photoDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('photos', file ? 'readwrite' : 'readonly');
      const request = file ? tx.objectStore('photos').put(file, id) : tx.objectStore('photos').get(id);
      let result;
      request.onsuccess = () => { result = request.result; };
      tx.oncomplete = () => resolve(result);
      tx.onerror = tx.onabort = () => reject(tx.error || new Error('照片儲存失敗'));
    });
  }
  function photo(recipe, large = false) {
    const epoch = renderEpoch;
    const figure = el('figure', null, `recipe-photo ${recipe.role}${large ? ' large' : ''}`);
    const fallback = append(el('div', null, 'photo-placeholder'), el('span', roles[recipe.role], 'photo-role'), el('strong', recipe.name), el('small', '照片待補'));
    if (recipe.imageNote && !large) fallback.append(el('small', recipe.imageNote));
    const img = el('img'); img.alt = recipe.name; img.decoding = 'async'; img.hidden = true;
    const caption = el('figcaption', recipe.imageNote || '尚無成品照，可上傳自己的照片。');
    function show(src, own = false) {
      img.onload = () => { img.hidden = false; fallback.hidden = true; };
      img.onerror = () => { img.hidden = true; fallback.hidden = false; caption.textContent = '照片無法顯示，可重新上傳。'; };
      img.src = src;
      if (own) caption.textContent = '我做的成品照 · 僅儲存在此瀏覽器';
    }
    if (recipe.image) show(recipe.image);
    append(figure, fallback, img, large ? caption : null);
    photoStore(recipe.id).then(blob => {
      if (blob && epoch === renderEpoch && figure.isConnected) { const url = URL.createObjectURL(blob); activePhotoURLs.add(url); show(url, true); }
    }).catch(() => { if (large && epoch === renderEpoch) notify('目前無法讀取個人成品照，仍可瀏覽食譜。'); });
    return figure;
  }

  function tonight() {
    heading('每天的一頓，好好照顧自己', '今晚，煮點什麼？', '一次準備四盒，今晚和明天的午餐一起顧好。');
    const layout = el('div', null, 'tonight-layout');
    const picker = panel('01 選好今晚的菜');
    const matched = DATA.sets.find(s => s.recipes.length === state.selected.length && s.recipes.every(id => state.selected.includes(id)));
    const presets = select([['', '自己組合'], ...DATA.sets.map(s => [s.id, s.name])], matched?.id || '', id => {
      if (id) { state.selected = [...setById[id].recipes]; save(); tonightRefresh(); }
    });
    picker.append(label('懶得想？選一個套餐', presets));
    const main = selectedRecipes().find(r => r.role === 'main');
    picker.append(label('主菜 · 選 1 道', select(DATA.recipes.filter(r => r.role === 'main').map(r => [r.id, r.name]), main.id, id => {
      state.selected = state.selected.filter(k => byId[k].role !== 'main' && (!byId[id].hasStarch || byId[k].role !== 'starch') && (!byId[id].hasVeg || byId[k].role !== 'side'));
      state.selected.unshift(id); save(); tonightRefresh();
    })));
    const sides = el('fieldset'); sides.append(el('legend', '配菜 · 最多 2 道'));
    for (const r of DATA.recipes.filter(r => r.role === 'side')) sides.append(checkbox(r.name, state.selected.includes(r.id), checked => {
      if (checked && selectedRecipes().filter(x => x.role === 'side').length === 2) { notify('配菜最多選 2 道。'); tonightRefresh(); return; }
      state.selected = checked ? [...state.selected, r.id] : state.selected.filter(id => id !== r.id); save(); tonightRefresh();
    }));
    picker.append(sides);
    picker.append(label('主食 · 可不選', select([['', '這餐不加主食'], ...DATA.recipes.filter(r => r.role === 'starch').map(r => [r.id, r.name])], selectedRecipes().find(r => r.role === 'starch')?.id || '', id => {
      state.selected = state.selected.filter(k => byId[k].role !== 'starch'); if (id) state.selected.push(id); save(); tonightRefresh();
    })));
    if (main.hasStarch) picker.append(el('p', '這道主菜已含澱粉，預設不再加主食。', 'hint'));
    if (main.hasVeg) picker.append(el('p', '這道主菜已含大量蔬菜，預設不再加配菜；仍可自行勾選。', 'hint'));
    const time = el('input'); time.type = 'time'; time.value = state.start;
    time.addEventListener('change', () => { if (time.value) { state.start = time.value; save(); $('#schedule-output').replaceChildren(); } else time.value = state.start; });
    append(picker, label('幾點開始煮？', time), button('排時間表 →', () => {
      const output = $('#schedule-output'); output.replaceChildren();
      try { output.append(scheduleNode(schedule(selectedRecipes()))); output.scrollIntoView({behavior: 'smooth', block: 'start'}); }
      catch (error) { notify(error.message); }
    }, 'button primary wide'));
    const preview = panel('今晚的四盒', 'meal-preview');
    preview.append(photo(main, true));
    selectedRecipes().forEach(r => { const link = el('a', r.name, 'dish-link'); link.href = `#recipe/${r.id}`; preview.append(link); });
    append(preview, el('h3', '每盒營養估算 · 平均分配'), nutritionNode(selectedRecipes(), 0.25), el('p', '四份總量固定，可在下方調整我與媽媽的比例。', 'muted'));
    append(layout, picker, preview); content.append(layout);
    const scheduleOutput = el('div'); scheduleOutput.id = 'schedule-output'; content.append(scheduleOutput);
    content.append(boxesNode(), safetyNode(selectedRecipes()));
  }
  function tonightRefresh() { render(); }
  function timeAt(minutes) {
    const [h, m] = state.start.split(':').map(Number); const total = h * 60 + m + minutes;
    return `${total >= 1440 ? `翌${Math.floor(total / 1440) > 1 ? Math.floor(total / 1440) : ''}日 ` : ''}${String(Math.floor(total / 60) % 24).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }
  function scheduleNode(result) {
    const node = panel('02 照著時間，一步一步煮');
    append(node, el('p', `${timeAt(result.total)} 全部完成 · 約 ${result.total} 分鐘`, 'completion'), el('p', '含最後分裝 10 分鐘。時間為估算；分批、額外泡米及途中翻面可能需要加時。⏳ 步驟仍請依文字查看與翻動。', 'hint'));
    if (result.advance.length) {
      const prep = el('section', null, 'advance-preparation');
      append(prep, el('h3', '提前準備'), el('p', '以下工作請在開始煮晚餐前完成，不計入今晚分鐘數。依各道菜的原順序操作；冷藏設備請依步驟文字準備。', 'muted'));
      const items = el('ol', null, 'recipe-steps');
      for (const step of result.advance) {
        items.append(append(el('li'), el('h4', `${step.recipeName} · 步驟 ${step.stepIndex + 1}`), badges(step), el('p', step.text)));
      }
      prep.append(items); node.append(prep);
    }
    const timeline = el('ol', null, 'timeline');
    for (const row of result.rows) {
      const item = el('li', null, row.attended ? 'attended' : 'unattended');
      append(item, el('strong', `${timeAt(row.start)}～${timeAt(row.end)}`, 'time'), el('h3', row.recipeName));
      append(item, badges(row), el('p', row.text)); timeline.append(item);
    }
    node.append(timeline); return node;
  }
  function badges(step) {
    const node = el('div', null, 'badges');
    if (step.advance) node.append(el('span', '提前做', 'badge doneness'));
    [step.device || (step.attended ? '料理台' : '等待'), step.heat, `${step.min} 分鐘`, step.attended ? '🧑‍🍳 要動手' : '⏳ 可以放著'].filter(Boolean).forEach(t => node.append(el('span', t, 'badge')));
    if (step.check) node.append(el('span', `熟度：${step.check}`, 'badge doneness'));
    return node;
  }
  function boxesNode() {
    const node = panel('03 四盒怎麼分');
    node.append(el('p', '兩人的倍數會換算成比例，四盒合計始終是整鍋的 100%。同一人的晚餐與便當等量。', 'muted'));
    const controls = el('div', null, 'two-col');
    const boxes = el('div', null, 'box-grid');
    for (const [who, name] of [['me', '我'], ['mom', '媽媽']]) {
      const input = el('input'); input.type = 'range'; input.min = '0.6'; input.max = '1.4'; input.step = '0.1'; input.value = state.ratios[who];
      const output = el('output', `${name}：${fmt(state.ratios[who])} 倍`);
      input.setAttribute('aria-label', `${name}的份量倍數`);
      input.addEventListener('input', () => { state.ratios[who] = Number(input.value); output.textContent = `${name}：${fmt(state.ratios[who])} 倍`; save(); drawBoxes(); });
      controls.append(append(el('label', null, 'ratio-control'), output, input));
    }
    function drawBoxes() {
      boxes.replaceChildren();
      shares(state.ratios.me, state.ratios.mom).forEach((fraction, i) => {
        const box = el('article', null, 'portion-box');
        append(box, el('p', ['今晚', '今晚', '明天', '明天'][i], 'eyebrow'), el('h3', ['我晚餐', '媽媽晚餐', '我便當', '媽媽便當'][i]));
        for (const r of selectedRecipes()) append(box, el('p', `${r.name}：這道菜的 ${fmt(fraction * 100, 0)}% · 生料約 ${fmt(r.rawGrams * fraction, 0)} g · ${portionText(r, fraction * 4)}`));
        append(box, el('h4', '每盒營養估算'), nutritionNode(selectedRecipes(), fraction));
        boxes.append(box);
      });
    }
    drawBoxes(); append(node, controls, boxes, el('p', '生重為食材與調味料合計，不含步驟另加的水；不是煮熟後的重量。掌拳僅計各菜的主要食物類別。', 'hint'));
    return node;
  }

  let filters = {search: '', role: '', device: '', favorites: false};
  function recipesPage() {
    heading('把喜歡的味道，留下來', '我的食譜本', `${DATA.recipes.length} 道食譜，都已換算成四份；早餐每批 4 罐。`);
    const controls = panel(null, 'filters');
    const search = el('input'); search.type = 'search'; search.placeholder = '搜尋菜名、食材'; search.value = filters.search;
    const cards = el('div', null, 'recipe-grid');
    const count = el('p', null, 'muted'); count.setAttribute('aria-live', 'polite');
    search.addEventListener('input', () => { filters.search = search.value; draw(); });
    append(controls, label('找一道菜', search), label('菜的種類', select([['', '全部種類'], ...Object.entries(roles)], filters.role, value => { filters.role = value; draw(); })), label('用什麼設備', select([['', '全部設備'], ...DATA.devices.map(d => [d, d])], filters.device, value => { filters.device = value; draw(); })), checkbox('只看收藏', filters.favorites, value => { filters.favorites = value; draw(); }));
    function draw() {
      cards.replaceChildren();
      const found = DATA.recipes.filter(r => (!filters.role || r.role === filters.role) && (!filters.device || r.steps.some(s => s.device === filters.device)) && (!filters.favorites || state.favorites.includes(r.id)) && `${r.name} ${r.ingredients.map(i => DATA.foods[i.food].name).join(' ')}`.includes(filters.search.trim()));
      count.textContent = `找到 ${found.length} 道菜`;
      for (const r of found) {
        const card = el('article', null, 'recipe-card');
        const link = el('a'); link.href = `#recipe/${r.id}`;
        append(link, photo(r), append(el('div', null, 'card-body'), el('p', `${roles[r.role]} · ${r.cuisine}`, 'eyebrow'), el('h2', r.name), el('p', `${[...new Set(r.steps.map(s => s.device).filter(Boolean))].join('、')} · ${portionText(r)}`, 'muted')));
        append(card, link, favoriteButton(r)); cards.append(card);
      }
      if (!found.length) cards.append(el('p', '找不到符合的菜，試試其他關鍵字或取消篩選。', 'empty'));
    }
    append(content, controls, count, cards); draw();
  }
  function favoriteButton(recipe) {
    const node = button('', () => {
      state.favorites = state.favorites.includes(recipe.id) ? state.favorites.filter(id => id !== recipe.id) : [...state.favorites, recipe.id];
      save(); update();
      if (filters.favorites && location.hash === '#recipes') render();
    }, 'button favorite');
    function update() { const on = state.favorites.includes(recipe.id); node.textContent = on ? '♥ 已收藏' : '♡ 收藏'; node.setAttribute('aria-pressed', String(on)); node.setAttribute('aria-label', `${recipe.name}：${on ? '取消收藏' : '收藏'}`); }
    update(); return node;
  }
  function recipePage(id) {
    const r = byId[id];
    if (!r) { heading('食譜', '找不到這道菜', '請從食譜列表重新選擇。'); return; }
    const back = el('a', '← 回食譜列表', 'back-link'); back.href = '#recipes'; content.append(back);
    heading(`${roles[r.role]} · ${r.cuisine}`, r.name, `一次四份 · 每份${portionText(r)}`);
    const hero = el('div', null, 'detail-hero');
    const information = panel('這道菜的小故事');
    if (r.source.type === 'HowToCook') {
      const source = el('a', '改編自 HowToCook（Unlicense）'); source.href = 'https://github.com/Anduin2017/HowToCook/blob/master/' + r.source.path.split('/').map(encodeURIComponent).join('/'); source.target = '_blank'; source.rel = 'noopener noreferrer'; information.append(source);
    } else if (r.source.type === 'Keelan') {
      const source = el('a', '改編自 Keelan（@kn.way___）Instagram');
      if (/^https?:\/\//i.test(r.source.url || '')) source.href = r.source.url;
      source.target = '_blank'; source.rel = 'noopener noreferrer'; information.append(source);
    } else information.append(el('p', `來源：${r.source.type}${r.source.title ? ` · ${r.source.title}` : ''}`));
    append(information, el('p', `改了什麼：${r.source.changes || '原創四份家常食譜。'}`), favoriteButton(r));
    const upload = el('input'); upload.type = 'file'; upload.accept = 'image/jpeg,image/png,image/webp,image/gif';
    upload.addEventListener('change', async () => {
      const file = upload.files?.[0]; if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type) || file.size > 12 * 1024 * 1024) { notify('請選擇 12 MB 以下的 JPG、PNG、WebP 或 GIF 照片。'); upload.value = ''; return; }
      upload.disabled = true;
      try {
        const testURL = URL.createObjectURL(file);
        try { await new Promise((resolve, reject) => { const image = new Image(); image.onload = resolve; image.onerror = reject; image.src = testURL; }); }
        finally { URL.revokeObjectURL(testURL); }
        await photoStore(r.id, file); notify('成品照已儲存在這個瀏覽器。');
        if (location.hash === `#recipe/${r.id}`) render();
      } catch (_) { notify('照片無法儲存，可能是格式、儲存空間或瀏覽器限制。食譜仍可正常使用。'); }
      finally { upload.disabled = false; }
    });
    append(information, label('上傳我做的成品照', upload), el('p', '照片留在這個瀏覽器，不會上傳到網路。', 'muted'));
    append(hero, photo(r, true), information); content.append(hero);
    const ingredients = panel('四份食材 · 生重、可食部分');
    const table = el('table'); const thead = el('thead'); const head = el('tr');
    ['食材', '克數', '份量與前處理'].forEach(t => { const th = el('th', t); th.scope = 'col'; head.append(th); }); thead.append(head); table.append(thead);
    const tbody = el('tbody');
    for (const i of r.ingredients) {
      const food = DATA.foods[i.food], tr = el('tr'), name = el('td', food.name);
      if (food.note) name.append(el('small', `估算／代替數值：${food.note}`, 'food-note'));
      append(tr, name, el('td', `${i.g} g`), el('td', [i.measure, i.prep].filter(Boolean).join('；') || '—')); tbody.append(tr);
    }
    table.append(tbody); ingredients.append(table); content.append(ingredients);
    const steps = panel('跟著做，一步一步來'); const ol = el('ol', null, 'recipe-steps');
    preparationSteps(r).forEach((s, index) => { const li = el('li'); append(li, el('h3', `步驟 ${index + 1}`), badges(s), el('p', s.text)); ol.append(li); });
    append(steps, ol, el('p', '「提前做」含提前步驟所需的前置備料；步驟依資料順序執行；「趁醃／泡時」的文字不會讓同一道菜的步驟重疊。分批與額外泡米時間請另預留。', 'hint')); content.append(steps);
    const nutrients = panel('每份營養估算 · 整道菜的 1/4');
    append(nutrients, nutritionNode([r], 0.25), el('p', `${portionText(r)}。${r.portion.basis}。`, 'muted'), el('p', '「部分缺值」的數字只加總已知資料，不能視為完整攝取量；全部缺測顯示「資料缺值」。', 'hint'));
    const missingDetails = el('details'); missingDetails.append(el('summary', '查看缺值食材與估算來源'));
    for (const [key, ids] of Object.entries(r.nutrition.missing)) if (ids.length) missingDetails.append(el('p', `${DATA.nutrients[key][0]}缺值：${ids.map(id => DATA.foods[id].name).join('、')}`));
    for (const i of r.ingredients) {
      const food = DATA.foods[i.food];
      missingDetails.append(el('p', `${food.name} → ${food.sourceName}${food.tfda ? `（${food.tfda}）` : '（估算）'}${food.note ? `；${food.note}` : ''}`));
    }
    nutrients.append(missingDetails); content.append(nutrients, safetyNode([r]));
    const notes = panel('我的料理筆記');
    const textarea = el('textarea'); textarea.rows = 4; textarea.value = state.notes[r.id] || ''; textarea.placeholder = '下次想少一點鹽？記在這裡。';
    const saved = el('p', state.notes[r.id] || '還沒有筆記。', 'saved-note');
    textarea.addEventListener('input', () => { state.notes[r.id] = textarea.value; saved.textContent = textarea.value || '還沒有筆記。'; save(); });
    append(notes, label('筆記（自動儲存）', textarea), el('h3', '已記下'), saved); content.append(notes);
  }

  function fridgePage() {
    heading('先看看家裡有什麼', '冰箱裡，找靈感', '勾選食材，有秤重就填克數。沒填克數，配對先視為有這項食材，採買時再提醒確認。');
    const layout = el('div', null, 'fridge-layout'); const inventory = panel('家裡的食材'); const results = el('div');
    const groups = new Map();
    for (const [id, f] of Object.entries(DATA.foods)) {
      if (f.pantry) continue;
      if (!groups.has(f.shop)) groups.set(f.shop, []); groups.get(f.shop).push([id, f]);
    }
    for (const [shop, foods] of groups) {
      inventory.append(el('h3', shop));
      for (const [id, food] of foods) {
        const stock = state.fridge[id] || {has: false, grams: ''};
        const row = el('div', null, 'inventory-row');
        const amount = el('input'); amount.type = 'number'; amount.min = '0'; amount.step = 'any'; amount.inputMode = 'decimal'; amount.placeholder = '未秤重'; amount.value = stock.grams; amount.disabled = !stock.has; amount.setAttribute('aria-label', `${food.name}現有克數`);
        const checked = checkbox(food.name, stock.has, has => {
          const value = amount.value;
          const grams = value !== '' && Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : '';
          state.fridge[id] = {has, grams}; amount.value = grams; amount.setCustomValidity(''); amount.disabled = !has;
          state.bought = {}; save(); draw();
        });
        amount.addEventListener('input', () => {
          if (amount.value !== '' && (!Number.isFinite(Number(amount.value)) || Number(amount.value) < 0)) { amount.setCustomValidity('請填零以上的克數'); amount.reportValidity(); return; }
          amount.setCustomValidity(''); state.fridge[id] = {has: true, grams: amount.value === '' ? '' : Number(amount.value)}; state.bought = {}; save(); draw();
        });
        append(row, checked, append(el('div', null, 'grams-input'), amount, el('span', 'g'))); inventory.append(row);
      }
    }
    function draw() {
      results.replaceChildren();
      for (const type of ['sets', 'recipes']) {
        const section = panel(type === 'sets' ? '最接近的套餐' : '可以做的單道菜');
        const matches = DATA[type].map(item => ({item, ...coverage(type === 'sets' ? item.recipes.map(id => byId[id]) : [item], state.fridge)})).sort((a, b) => b.ratio - a.ratio || a.missing.length - b.missing.length);
        for (const match of matches) {
          const row = el('article', null, 'match-row');
          append(row, el('h3', match.item.name), el('strong', `食材覆蓋 ${Math.round(match.ratio * 100)}%`, 'coverage'), el('p', match.missing.length ? `還缺：${match.missing.map(m => `${DATA.foods[m.id].name} ${fmt(m.grams, 0)} g`).join('、')}` : '食材已備齊；未秤重的項目請再確認份量。', 'muted'));
          if (type === 'sets') row.append(button('今晚就煮這套', () => { state.selected = [...match.item.recipes]; save(); location.hash = '#tonight'; }, 'button secondary'));
          else { const link = el('a', '看食譜 →'); link.href = `#recipe/${match.item.id}`; row.append(link); }
          section.append(row);
        }
        results.append(section);
      }
    }
    append(layout, inventory, results); content.append(layout); draw();
  }
  function weekPage() {
    heading('少想一點，每天吃好一點', '這週的餐桌', '選幾晚在家煮，採買份量自動加總；每晚都是四份。');
    const node = panel('哪幾晚要煮？');
    node.append(button('自動排一週 ↻', () => { state.week = autoWeek(state.week); state.bought = {}; save(); render(); }, 'button primary'));
    node.append(el('p', '自動排會避開相鄰料理晚上的同一道主菜，也避開相同蛋白質（含混合肉類）。', 'muted'));
    const shoppingNode = panel('採買清單');
    state.week.forEach((day, index) => {
      const row = el('div', null, 'week-row');
      const menu = select(DATA.sets.map(s => [s.id, s.name]), day.set, value => { day.set = value; state.bought = {}; save(); drawShopping(); }); menu.disabled = !day.enabled; menu.setAttribute('aria-label', `${days[index]}套餐`);
      append(row, checkbox(days[index], day.enabled, enabled => { day.enabled = enabled; menu.disabled = !enabled; state.bought = {}; save(); drawShopping(); }), menu); node.append(row);
    });
    const breakfast = panel('本週早餐備餐');
    breakfast.append(el('p', '每種早餐可選 0–3 批，每批 4 罐；0 批表示不做。食材會加進下方採買清單。', 'muted'));
    breakfast.append(el('p', '請依食譜冷藏期限分次製作；隔夜燕麥需提前冷藏 8–12 小時，3 天內吃完。', 'hint'));
    for (const recipe of DATA.recipes.filter(r => r.role === 'breakfast')) {
      const input = select([0, 1, 2, 3].map(n => [String(n), `${n} 批 · ${n * 4} 罐`]), String(state.breakfast[recipe.id] || 0), value => {
        state.breakfast[recipe.id] = breakfastBatches(Number(value)); state.bought = {}; save(); drawShopping();
      });
      input.setAttribute('aria-label', `${recipe.name}批次`);
      const link = el('a', '看食譜 →'); link.href = `#recipe/${recipe.id}`;
      append(breakfast, label(recipe.name, input), link);
    }
    function drawShopping() {
      shoppingNode.replaceChildren(el('h2', '採買清單'));
      const items = shopping(state.week, state.fridge, state.breakfast);
      if (!items.length) { shoppingNode.append(el('p', '先勾選料理晚上或設定早餐批次，就會出現採買清單。', 'empty')); return; }
      const groups = new Map();
      for (const item of items) {
        const food = DATA.foods[item.id], shop = item.pantry ? '確認家裡還有' : food.shop;
        if (!groups.has(shop)) groups.set(shop, []); groups.get(shop).push(item);
      }
      for (const [shop, rows] of [...groups].sort((a, b) => Number(a[0] === '確認家裡還有') - Number(b[0] === '確認家裡還有'))) {
        shoppingNode.append(el('h3', shop));
        for (const item of rows) {
          const food = DATA.foods[item.id];
          let amount = item.unknown ? `家裡有，請確認是否夠 ${fmt(item.required, 0)} g` : item.grams === 0 ? `冰箱足夠（本週需 ${fmt(item.required, 0)} g）` : `${fmt(item.grams, 0)} g`;
          if (food.unit && item.grams > 0 && !item.unknown) amount += ` · 約 ${fmt(item.grams / food.unitG)} ${food.unit}`;
          if (item.pantry) amount = `本週約需 ${fmt(item.required, 0)} g，確認家裡還有`;
          const check = checkbox(`${food.name}：${amount}`, !!state.bought[item.id], checked => { state.bought[item.id] = checked; save(); check.classList.toggle('bought', checked); });
          check.classList.add('shopping-item'); check.classList.toggle('bought', !!state.bought[item.id]); shoppingNode.append(check);
        }
      }
      shoppingNode.append(el('p', '已扣除冰箱填寫的現有克數一次；食材是可食部分生重，實際購買請考慮去皮、去骨耗損。更改菜單或庫存時會重設已買標記。', 'hint'));
    }
    append(content, node, breakfast, shoppingNode); drawShopping();
  }
  function aboutPage() {
    heading('安心下廚，從知道開始', '關於這份備餐指南', '用簡單的份量，建立自己的吃飯節奏。');
    const portion = panel('掌與拳，是方便的估法');
    list(Object.entries(DATA.rules.palmFist).filter(([key]) => !key.startsWith('_')).map(([, text]) => text), portion);
    append(portion, el('p', '計算採中間值：生蛋白質 135 g／掌，熟蔬菜 90 g／拳（生重除以 1.3），熟飯 140 g／拳，地瓜 150 g／拳。顯示四捨五入至半掌／半拳。'), el('p', '主菜只計豆魚蛋肉、配菜只計蔬菜，不能取代整餐的營養評估。', 'muted'));
    const safety = panel('煮熟、快冷藏、熱透再吃'); list(DATA.rules.safety, safety);
    const source = panel('資料從哪裡來');
    list(['食藥署食品營養成分資料庫：每 100 g 營養值，搭配食材生重加總。', 'HowToCook：社群食譜與照片，採 Unlicense；各食譜附原始來源與改編說明。', 'Keelan（Instagram，@kn.way___）：只參考食材與做法，未轉載照片影片；各食譜附原始連結與改編說明。', '其他食譜來自舊版減脂廚房及原創。'], source);
    const link = el('a', 'HowToCook 原始專案'); link.href = 'https://github.com/Anduin2017/HowToCook'; link.target = '_blank'; link.rel = 'noopener noreferrer'; source.append(link);
    const estimates = panel('營養是估算，不是精密測量');
    list(['不同品牌、食材部位、加熱失水與剩餘醬汁，都會影響實際營養。', '資料庫沒測的營養素會標「部分缺值」。顯示值僅為已知部分合計；不將缺值當成 0。', '鹽的鈉與米酒熱量採理論值；青蔥以日本甜蔥資料代替。', '時間表依資料步驟順序與 attended 欄位排程；部分不用顧的步驟包含前處理、裝鍋或途中翻面，實際仍需短暫照看。', '分兩批烹調、糙米額外泡 1 小時等條件未含在既定分鐘數，請預留時間。'], estimates);
    const privacy = panel('資料只存在這支手機的瀏覽器');
    privacy.append(el('p', '收藏、筆記、冰箱、菜單與比例存在 localStorage；成品照存在 IndexedDB。不傳送到伺服器，也不會跨手機或瀏覽器同步。清除瀏覽器資料會一起清除紀錄。隱私模式、直接開檔或儲存空間限制可能無法保留資料，網站會提示；仍可使用其他功能。'));
    append(content, portion, safety, source, estimates, privacy);
  }
  function render() {
    renderEpoch++;
    activePhotoURLs.forEach(url => URL.revokeObjectURL(url)); activePhotoURLs = new Set();
    content.replaceChildren();
    const route = location.hash.slice(1) || 'tonight';
    const active = route.startsWith('recipe/') ? 'recipes' : route;
    document.querySelectorAll('.bottom-nav a').forEach(a => { const current = a.hash === `#${active}`; a.classList.toggle('active', current); if (current) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (route.startsWith('recipe/')) recipePage(route.slice(7));
    else ({tonight, recipes: recipesPage, fridge: fridgePage, week: weekPage, about: aboutPage}[route] || tonight)();
    document.title = `${content.querySelector('h1')?.textContent || '四盒備餐'}｜好好吃飯`;
  }
  window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); content.focus({preventScroll: true}); });
  render();
})();
