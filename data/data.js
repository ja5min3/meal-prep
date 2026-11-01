window.APP_DATA = {
  "_說明": "每道菜的克數都是『一次煮四份』的總量（生重、可食部分）。steps 依序執行；device 為 null 表示只用到人手（砧板、碗）；attended=false 表示可以放著不用顧。check 是新手判斷熟度的方法。",
  "recipes": [
    {
      "id": "black-pepper-beef",
      "name": "黑胡椒牛柳",
      "role": "main",
      "cuisine": "中式家常",
      "image": "img/black-pepper-beef.jpg",
      "imageNote": "HowToCook 社群照片（原版做法，份量與本食譜不同）",
      "source": {
        "type": "HowToCook",
        "title": "黑椒牛柳",
        "path": "dishes/meat_dish/黑椒牛柳/黑椒牛柳.md",
        "changes": "改用瘦的牛後腿肉、油從每份 10 ml 降到約 5 g、加入四份分兩批下鍋的做法"
      },
      "ingredients": [
        {
          "food": "beef_round",
          "g": 560,
          "prep": "逆紋切條：寬 1 公分、厚 0.5 公分"
        },
        {
          "food": "onion",
          "g": 200,
          "prep": "切粗絲"
        },
        {
          "food": "bellpepper",
          "g": 200,
          "prep": "去籽切條"
        },
        {
          "food": "soy",
          "g": 20,
          "measure": "1 大匙多一點"
        },
        {
          "food": "ricewine",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "starch",
          "g": 12,
          "measure": "1 大匙半"
        },
        {
          "food": "bpepper",
          "g": 4,
          "measure": "2 茶匙（分兩次用）"
        },
        {
          "food": "oil",
          "g": 20,
          "measure": "約 1 大匙半（分次用）"
        },
        {
          "food": "salt",
          "g": 2,
          "measure": "1/3 茶匙"
        }
      ],
      "steps": [
        {
          "text": "牛肉切條。『逆紋』＝刀子跟肉上的紋路垂直切，咬起來才不會一絲一絲很韌。半冷凍時最好切。",
          "min": 10,
          "device": null,
          "attended": true
        },
        {
          "text": "切洋蔥絲、甜椒條。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "牛肉放碗裡，加醬油、米酒、一半黑胡椒、玉米粉、30 g 水抓勻，再拌 1 茶匙油（鎖住水分）。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "放著醃 12 分鐘。",
          "min": 12,
          "device": null,
          "attended": false
        },
        {
          "text": "鑄鐵鍋開中火空燒 3 分鐘預熱。滴一滴水會立刻滾成小珠亂跳就是夠熱了。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": false
        },
        {
          "text": "加 1 茶匙半的油，放『一半』牛肉攤平，30 秒不要動，再翻炒 1 分半到表面都沒有紅色，盛起。第二批照做。四份一次下鍋會出水，變成煮肉、又硬又灰。",
          "min": 5,
          "device": "鑄鐵鍋",
          "heat": "中大火",
          "attended": true,
          "check": "表面全部變褐色、沒有紅色血水"
        },
        {
          "text": "不用洗鍋，倒入剩下的油，下洋蔥和甜椒炒 2 分鐘，洋蔥邊緣變透明。",
          "min": 2,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        },
        {
          "text": "牛肉倒回鍋，加鹽和剩下的黑胡椒，大火拌炒 30 秒就關火。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "大火",
          "attended": true,
          "check": "剪開最厚的一條，中間沒有紅色"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘，盒蓋留一條縫",
        "note": "牛肉復熱會稍微變硬，便當份可以多留一點醬汁"
      },
      "safety": "牛肉切薄條，熟透到中間不紅即可（中心溫度 71°C 以上最安心）。",
      "nutrition": {
        "total": {
          "kcal": 1089.46,
          "pro": 114.3,
          "fat": 45.775999999999996,
          "carb": 70.164,
          "fib": 6.924,
          "sat": 14.636,
          "chol": 330.4,
          "na": 2118.5600000000004,
          "sugar": 11.0
        },
        "serving": {
          "kcal": 272.365,
          "pro": 28.575,
          "fat": 11.443999999999999,
          "carb": 17.541,
          "fib": 1.731,
          "sat": 3.659,
          "chol": 82.6,
          "na": 529.6400000000001,
          "sugar": 2.75
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "beef_round",
            "soy",
            "oil"
          ],
          "sat": [
            "bellpepper",
            "soy"
          ],
          "chol": [
            "onion",
            "bellpepper",
            "soy",
            "starch",
            "bpepper",
            "oil"
          ],
          "na": [],
          "sugar": [
            "bellpepper",
            "soy",
            "bpepper",
            "oil"
          ]
        }
      },
      "rawGrams": 1033,
      "portion": {
        "value": 1.037037037037037,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "牛肉"
      ]
    },
    {
      "id": "mapo-tofu",
      "name": "少油麻婆豆腐",
      "role": "main",
      "cuisine": "川味",
      "image": "img/mapo-tofu.jpg",
      "imageNote": "HowToCook 社群照片（原版用鹹鴨蛋與嫩豆腐）",
      "source": {
        "type": "HowToCook",
        "title": "麻婆豆腐",
        "path": "dishes/meat_dish/麻婆豆腐/麻婆豆腐.md",
        "changes": "拿掉鹹鴨蛋（膽固醇高）改用辣豆瓣醬；五花肉改瘦絞肉；嫩豆腐改板豆腐（蛋白質較多、便當不易碎）"
      },
      "ingredients": [
        {
          "food": "tofu",
          "g": 800,
          "prep": "2 盒，切 2 公分方塊",
          "measure": "約 2 盒"
        },
        {
          "food": "pork_lean_mince",
          "g": 240,
          "prep": "請肉攤用後腿瘦肉現絞"
        },
        {
          "food": "doubanjiang",
          "g": 30,
          "measure": "2 大匙"
        },
        {
          "food": "soy",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "garlic",
          "g": 15,
          "prep": "切末",
          "measure": "3 瓣"
        },
        {
          "food": "ginger",
          "g": 10,
          "prep": "切末"
        },
        {
          "food": "scallion",
          "g": 30,
          "prep": "切蔥花",
          "measure": "2 根"
        },
        {
          "food": "starch",
          "g": 8,
          "measure": "1 大匙，加 30 g 水調勻"
        },
        {
          "food": "oil",
          "g": 10,
          "measure": "2 茶匙"
        }
      ],
      "steps": [
        {
          "text": "豆腐切塊，蒜、薑切末，蔥切蔥花。玉米粉加 30 g 冷水攪勻備用。",
          "min": 10,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中火預熱 3 分鐘。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": false
        },
        {
          "text": "加油，下絞肉用鍋鏟壓散，炒 3 分鐘到完全變白。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true,
          "check": "絞肉沒有任何粉紅色"
        },
        {
          "text": "轉小火，加蒜、薑、辣豆瓣醬炒 30 秒。豆瓣醬很容易焦，火一定要小。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "小火",
          "attended": true
        },
        {
          "text": "加 250 g 水和醬油煮滾，輕輕放入豆腐。用鍋鏟『背面』推，不要翻炒，豆腐才不會碎。中小火煮 6 分鐘。",
          "min": 7,
          "device": "鑄鐵鍋",
          "heat": "中小火",
          "attended": true
        },
        {
          "text": "玉米粉水再攪一下，分兩次沿鍋邊倒入，邊倒邊輕推，約 30 秒醬汁變濃稠就關火，撒蔥花。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true,
          "check": "醬汁冒大泡、變濃稠"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分半，中途拌一下",
        "note": ""
      },
      "safety": "絞肉要炒到完全沒有粉紅色（絞肉中心 71°C）。",
      "nutrition": {
        "total": {
          "kcal": 1217.7900000000002,
          "pro": 131.289,
          "fat": 63.262,
          "carb": 35.839,
          "fib": 15.956000000000003,
          "sat": 12.037999999999998,
          "chol": 136.8,
          "na": 2221.3699999999994,
          "sugar": 1.32
        },
        "serving": {
          "kcal": 304.44750000000005,
          "pro": 32.82225,
          "fat": 15.8155,
          "carb": 8.95975,
          "fib": 3.9890000000000008,
          "sat": 3.0094999999999996,
          "chol": 34.2,
          "na": 555.3424999999999,
          "sugar": 0.33
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "pork_lean_mince",
            "soy",
            "oil"
          ],
          "sat": [
            "soy",
            "ginger",
            "scallion"
          ],
          "chol": [
            "doubanjiang",
            "soy",
            "garlic",
            "ginger",
            "scallion",
            "starch",
            "oil"
          ],
          "na": [],
          "sugar": [
            "doubanjiang",
            "soy",
            "ginger",
            "oil"
          ]
        }
      },
      "rawGrams": 1158,
      "portion": {
        "value": 1.9259259259259258,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "豆腐",
        "豬肉"
      ]
    },
    {
      "id": "ginger-pork",
      "name": "薑燒豬里肌",
      "role": "main",
      "cuisine": "日式",
      "image": null,
      "source": {
        "type": "舊版減脂廚房",
        "title": "薑燒豬里肌（r9）",
        "changes": "改成四份、補上分批煎與熟度判斷"
      },
      "ingredients": [
        {
          "food": "pork_tenderloin",
          "g": 560,
          "prep": "切 0.7 公分薄片，用刀背輕拍"
        },
        {
          "food": "onion",
          "g": 150,
          "prep": "切絲"
        },
        {
          "food": "ginger",
          "g": 20,
          "prep": "磨成泥"
        },
        {
          "food": "soy",
          "g": 30,
          "measure": "2 大匙"
        },
        {
          "food": "mirin",
          "g": 30,
          "measure": "2 大匙"
        },
        {
          "food": "ricewine",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "starch",
          "g": 6,
          "measure": "2 茶匙"
        },
        {
          "food": "oil",
          "g": 10,
          "measure": "2 茶匙（分兩批）"
        }
      ],
      "steps": [
        {
          "text": "里肌切片拍鬆，拌上玉米粉。醬油、味醂、米酒、薑泥調成醬汁。洋蔥切絲。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中火預熱 3 分鐘。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": false
        },
        {
          "text": "加 1 茶匙油，鋪『一半』肉片，每面煎 1 分半到金黃，盛起。第二批照做。",
          "min": 6,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true,
          "check": "切開最厚的一片，中心不是粉紅色"
        },
        {
          "text": "下洋蔥炒 2 分鐘到變軟。",
          "min": 2,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        },
        {
          "text": "肉片倒回鍋，倒入醬汁，中火翻炒 1 分鐘，醬汁變少、肉片發亮就關火。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘",
        "note": "小里肌很瘦，煎過頭會柴，熟了就起鍋"
      },
      "safety": "豬肉片中心 63°C 以上、不見粉紅即熟。",
      "nutrition": {
        "total": {
          "kcal": 1060.58,
          "pro": 122.168,
          "fat": 40.614,
          "carb": 41.268,
          "fib": 2.392,
          "sat": 13.446000000000002,
          "chol": 380.8,
          "na": 1795.54,
          "sugar": 23.4
        },
        "serving": {
          "kcal": 265.145,
          "pro": 30.542,
          "fat": 10.1535,
          "carb": 10.317,
          "fib": 0.598,
          "sat": 3.3615000000000004,
          "chol": 95.2,
          "na": 448.885,
          "sugar": 5.85
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "pork_tenderloin",
            "soy",
            "oil"
          ],
          "sat": [
            "ginger",
            "soy"
          ],
          "chol": [
            "onion",
            "ginger",
            "soy",
            "mirin",
            "starch",
            "oil"
          ],
          "na": [],
          "sugar": [
            "ginger",
            "soy",
            "oil"
          ]
        }
      },
      "rawGrams": 821,
      "portion": {
        "value": 1.037037037037037,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "豬肉"
      ]
    },
    {
      "id": "tomato-beef",
      "name": "番茄馬鈴薯燉牛肉",
      "role": "main",
      "cuisine": "中式家常",
      "image": "img/tomato-beef.jpg",
      "imageNote": "HowToCook 社群照片（原版用壓力鍋）",
      "source": {
        "type": "HowToCook",
        "title": "西红柿土豆炖牛肉",
        "path": "dishes/meat_dish/西红柿土豆炖牛肉/西红柿土豆炖牛肉.md",
        "changes": "壓力鍋改成電鍋；牛腩改牛腱（較瘦）；油與糖減少"
      },
      "ingredients": [
        {
          "food": "beef_shank",
          "g": 600,
          "prep": "切 4 公分大塊"
        },
        {
          "food": "tomato",
          "g": 450,
          "prep": "切塊",
          "measure": "3 顆"
        },
        {
          "food": "potato",
          "g": 400,
          "prep": "去皮切 4 公分塊",
          "measure": "2 顆"
        },
        {
          "food": "onion",
          "g": 200,
          "prep": "切塊",
          "measure": "1 顆"
        },
        {
          "food": "carrot",
          "g": 150,
          "prep": "切滾刀塊",
          "measure": "1 根"
        },
        {
          "food": "ginger",
          "g": 10,
          "prep": "切片"
        },
        {
          "food": "soy",
          "g": 30,
          "measure": "2 大匙"
        },
        {
          "food": "sugar",
          "g": 5,
          "measure": "1 茶匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "oil",
          "g": 8,
          "measure": "2 茶匙"
        }
      ],
      "steps": [
        {
          "text": "牛腱切 4 公分大塊。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "泡冷水 20 分鐘去血水（中途換一次水）。",
          "min": 20,
          "device": null,
          "attended": false
        },
        {
          "text": "切番茄、洋蔥、紅蘿蔔、薑片；馬鈴薯削皮切塊後泡水防變黑。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中火加油，洋蔥炒 3 分鐘到軟，再下番茄炒 4 分鐘到出汁變糊。",
          "min": 7,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        },
        {
          "text": "電鍋內鍋放牛肉、炒好的番茄洋蔥、紅蘿蔔、薑片、醬油、糖，加 400 g 水。外鍋 2 杯水（量米杯），蓋上按下。內鍋不要超過八分滿。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "等開關跳起。",
          "min": 42,
          "device": "電鍋",
          "attended": false
        },
        {
          "text": "加入馬鈴薯和鹽拌一下，外鍋再加 1 杯半水按下。",
          "min": 2,
          "device": "電鍋",
          "attended": true
        },
        {
          "text": "等開關跳起後再燜 15 分鐘。",
          "min": 48,
          "device": "電鍋",
          "attended": false,
          "check": "筷子能輕鬆插穿牛肉和馬鈴薯"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 4,
        "reheat": "微波 600W 約 3 分鐘，中途拌一下",
        "note": "隔天更入味，最適合當便當"
      },
      "safety": "燉到牛肉軟爛即遠超過安全溫度。",
      "hasStarch": true,
      "nutrition": {
        "total": {
          "kcal": 1431.89,
          "pro": 137.89,
          "fat": 44.721999999999994,
          "carb": 121.03500000000001,
          "fib": 15.39,
          "sat": 16.576,
          "chol": 456.0,
          "na": 3275.01,
          "sugar": 25.395
        },
        "serving": {
          "kcal": 357.9725,
          "pro": 34.4725,
          "fat": 11.180499999999999,
          "carb": 30.258750000000003,
          "fib": 3.8475,
          "sat": 4.144,
          "chol": 114.0,
          "na": 818.7525,
          "sugar": 6.34875
        },
        "missing": {
          "kcal": [],
          "pro": [
            "sugar"
          ],
          "fat": [
            "soy",
            "sugar"
          ],
          "carb": [],
          "fib": [
            "beef_shank",
            "soy",
            "sugar",
            "oil"
          ],
          "sat": [
            "tomato",
            "ginger",
            "soy",
            "sugar"
          ],
          "chol": [
            "tomato",
            "onion",
            "carrot",
            "ginger",
            "soy",
            "sugar",
            "oil"
          ],
          "na": [],
          "sugar": [
            "beef_shank",
            "tomato",
            "ginger",
            "soy",
            "oil"
          ]
        }
      },
      "rawGrams": 1856,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "牛肉"
      ]
    },
    {
      "id": "steamed-chicken",
      "name": "電鍋蔥薑蒸雞腿",
      "role": "main",
      "cuisine": "中式家常",
      "image": null,
      "source": {
        "type": "舊版減脂廚房",
        "title": "電鍋蔥薑蒸雞（r4）",
        "changes": "改用去皮雞腿排、改成四份、補熟度判斷"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪，厚處劃兩刀"
        },
        {
          "food": "ginger",
          "g": 20,
          "prep": "切絲"
        },
        {
          "food": "scallion",
          "g": 40,
          "prep": "切段，留一點切蔥花",
          "measure": "3 根"
        },
        {
          "food": "ricewine",
          "g": 20,
          "measure": "1 大匙多"
        },
        {
          "food": "soy",
          "g": 20,
          "measure": "1 大匙多"
        },
        {
          "food": "salt",
          "g": 2,
          "measure": "1/3 茶匙"
        },
        {
          "food": "wpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "sesame_oil",
          "g": 4,
          "measure": "1 茶匙"
        }
      ],
      "steps": [
        {
          "text": "雞腿修掉黃色脂肪，厚的地方劃兩刀讓厚度平均。加米酒、醬油、鹽、白胡椒抓勻。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "放著醃 15 分鐘。",
          "min": 15,
          "device": null,
          "attended": false
        },
        {
          "text": "雞腿平鋪在盤子上（不要疊），鋪上薑絲和蔥段，放進電鍋，外鍋倒 1 杯半水、按下開關。",
          "min": 2,
          "device": null,
          "attended": true
        },
        {
          "text": "等開關跳起後再燜 5 分鐘。",
          "min": 28,
          "device": "電鍋",
          "attended": false,
          "check": "筷子戳最厚處，流出的汁是透明的、不是粉紅色"
        },
        {
          "text": "切塊，淋上盤底湯汁和麻油，撒蔥花。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘，連湯汁一起裝比較不乾",
        "note": ""
      },
      "safety": "雞肉中心要到 74°C；可以用 Ninja 的溫度探針插最厚處確認。",
      "nutrition": {
        "total": {
          "kcal": 1083.1200000000001,
          "pro": 120.80100000000002,
          "fat": 57.499,
          "carb": 7.736,
          "fib": 1.6230000000000002,
          "sat": 15.062000000000001,
          "chol": 696.0,
          "na": 2197.3999999999996,
          "sugar": 1.24
        },
        "serving": {
          "kcal": 270.78000000000003,
          "pro": 30.200250000000004,
          "fat": 14.37475,
          "carb": 1.934,
          "fib": 0.40575000000000006,
          "sat": 3.7655000000000003,
          "chol": 174.0,
          "na": 549.3499999999999,
          "sugar": 0.31
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "soy",
            "sesame_oil"
          ],
          "sat": [
            "ginger",
            "scallion",
            "soy"
          ],
          "chol": [
            "ginger",
            "scallion",
            "soy",
            "wpepper",
            "sesame_oil"
          ],
          "na": [
            "sesame_oil"
          ],
          "sugar": [
            "ginger",
            "soy",
            "wpepper",
            "sesame_oil"
          ]
        }
      },
      "rawGrams": 707,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "airfry-chicken",
      "name": "氣炸香草雞腿排",
      "role": "main",
      "cuisine": "西式",
      "image": null,
      "source": {
        "type": "舊版減脂廚房",
        "title": "氣炸香草雞腿排（r6）",
        "changes": "改成四份、改用 Ninja 溫度探針判斷熟度"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "garlic",
          "g": 10,
          "prep": "切末",
          "measure": "2 瓣"
        },
        {
          "food": "salt",
          "g": 4,
          "measure": "2/3 茶匙"
        },
        {
          "food": "bpepper",
          "g": 2,
          "measure": "1 茶匙"
        },
        {
          "food": "parsley",
          "g": 2,
          "measure": "1 大匙"
        },
        {
          "food": "lemon",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "olive_oil",
          "g": 8,
          "measure": "2 茶匙"
        }
      ],
      "steps": [
        {
          "text": "雞腿用廚房紙擦乾，抹上蒜末、鹽、黑胡椒、香草、檸檬汁和橄欖油。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "放著醃 15 分鐘。",
          "min": 15,
          "device": null,
          "attended": false
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "heat": "氣炸 200°C",
          "attended": false
        },
        {
          "text": "雞腿原本有皮那面朝上平放，不要重疊；放不下就分兩批。氣炸 7 分鐘。",
          "min": 7,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "打開翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 5 分鐘。",
          "min": 5,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處到 74°C；沒有探針就切開看，中間沒有粉紅、汁是透明的"
        },
        {
          "text": "取出靜置 3 分鐘再切，肉汁才不會流光。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘；想要表面脆，可用 Ninja 180°C 回烤 3 分鐘",
        "note": ""
      },
      "safety": "雞肉中心 74°C。分兩批時，兩批都要確認。",
      "nutrition": {
        "total": {
          "kcal": 1088.52,
          "pro": 120.265,
          "fat": 61.764,
          "carb": 5.998,
          "fib": 1.4000000000000001,
          "sat": 15.851,
          "chol": 696.0,
          "na": 1981.2500000000002,
          "sugar": 0.484
        },
        "serving": {
          "kcal": 272.13,
          "pro": 30.06625,
          "fat": 15.441,
          "carb": 1.4995,
          "fib": 0.35000000000000003,
          "sat": 3.96275,
          "chol": 174.0,
          "na": 495.31250000000006,
          "sugar": 0.121
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "garlic",
            "bpepper",
            "parsley",
            "lemon"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "bpepper",
            "olive_oil"
          ]
        }
      },
      "rawGrams": 641,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "airfry-tilapia",
      "name": "氣炸檸檬鯛魚",
      "role": "main",
      "cuisine": "西式",
      "image": null,
      "source": {
        "type": "舊版減脂廚房",
        "title": "檸檬香煎魚片（r20）",
        "changes": "改用 Ninja 氣炸，不必顧鍋、也空出鑄鐵鍋"
      },
      "ingredients": [
        {
          "food": "tilapia",
          "g": 600,
          "prep": "冷藏室退冰一晚，擦乾"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "wpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "ricewine",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "garlic",
          "g": 8,
          "prep": "切末",
          "measure": "2 瓣"
        },
        {
          "food": "olive_oil",
          "g": 6,
          "measure": "1 茶匙半"
        },
        {
          "food": "lemon",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "parsley",
          "g": 1,
          "measure": "少許"
        }
      ],
      "steps": [
        {
          "text": "魚片用廚房紙擦乾，抹鹽、白胡椒、米酒、蒜末。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "放著醃 10 分鐘。",
          "min": 10,
          "device": null,
          "attended": false
        },
        {
          "text": "Ninja 選『氣炸』190°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "heat": "氣炸 190°C",
          "attended": false
        },
        {
          "text": "籃子鋪烘焙紙，魚片平放、表面刷一層橄欖油，氣炸 10 分鐘，不用翻面。",
          "min": 10,
          "device": "Ninja",
          "heat": "氣炸 190°C",
          "attended": false,
          "check": "最厚處用叉子一撥就能分成一片片、整塊白色不透明"
        },
        {
          "text": "淋檸檬汁、撒香草。",
          "min": 1,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分半，加 1 大匙水再蓋蓋，魚才不會乾",
        "note": "魚片薄，探針不準，用叉子判斷"
      },
      "safety": "魚肉中心 63°C、完全不透明即熟。",
      "nutrition": {
        "total": {
          "kcal": 743.27,
          "pro": 110.09200000000001,
          "fat": 27.761999999999997,
          "carb": 19.427,
          "fib": 0.879,
          "sat": 7.025999999999999,
          "chol": 228.0,
          "na": 1456.95,
          "sugar": 0.362
        },
        "serving": {
          "kcal": 185.8175,
          "pro": 27.523000000000003,
          "fat": 6.940499999999999,
          "carb": 4.85675,
          "fib": 0.21975,
          "sat": 1.7564999999999997,
          "chol": 57.0,
          "na": 364.2375,
          "sugar": 0.0905
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "tilapia",
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "wpepper",
            "garlic",
            "lemon",
            "parsley"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "tilapia",
            "wpepper",
            "olive_oil"
          ]
        }
      },
      "rawGrams": 644,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "魚肉"
      ]
    },
    {
      "id": "steamed-seabass",
      "name": "清蒸鱸魚片",
      "role": "main",
      "cuisine": "粵式",
      "image": "img/seabass.jpg",
      "imageNote": "HowToCook 社群照片（原版是整條魚）",
      "source": {
        "type": "HowToCook",
        "title": "清蒸鲈鱼",
        "path": "dishes/aquatic/清蒸鲈鱼/清蒸鲈鱼.md",
        "changes": "整條魚改成市場常見的金目鱸魚片（不用處理魚、便當好分）；改用電鍋；最後的熱油改成少量麻油"
      },
      "ingredients": [
        {
          "food": "seabass",
          "g": 600,
          "prep": "2 大片，每片切成 2 塊"
        },
        {
          "food": "ginger",
          "g": 20,
          "prep": "切絲"
        },
        {
          "food": "scallion",
          "g": 40,
          "prep": "一半切段、一半切細絲",
          "measure": "3 根"
        },
        {
          "food": "ricewine",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "salt",
          "g": 2,
          "measure": "1/3 茶匙"
        },
        {
          "food": "soy",
          "g": 20,
          "measure": "1 大匙多"
        },
        {
          "food": "sesame_oil",
          "g": 4,
          "measure": "1 茶匙"
        }
      ],
      "steps": [
        {
          "text": "魚片擦乾，抹鹽和米酒放 10 分鐘。盤底先鋪蔥段，魚放上面（不貼盤底，蒸出來不腥），再鋪薑絲。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "放進電鍋，外鍋 1 杯水，跳起後燜 3 分鐘。",
          "min": 22,
          "device": "電鍋",
          "attended": false,
          "check": "筷子插入最厚處能輕鬆分開，整塊不透明"
        },
        {
          "text": "倒掉盤底的腥水，淋醬油和麻油，鋪蔥絲。",
          "min": 2,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分半，加 1 大匙水再蓋蓋",
        "note": "魚隔天會有一點魚味，介意的話便當份改帶肉類"
      },
      "safety": "魚肉中心 63°C、完全不透明即熟。",
      "nutrition": {
        "total": {
          "kcal": 672.74,
          "pro": 125.56400000000001,
          "fat": 11.288,
          "carb": 7.547999999999999,
          "fib": 1.36,
          "sat": 2.46,
          "chol": 348.0,
          "na": 2076.2,
          "sugar": 1.24
        },
        "serving": {
          "kcal": 168.185,
          "pro": 31.391000000000002,
          "fat": 2.822,
          "carb": 1.8869999999999998,
          "fib": 0.34,
          "sat": 0.615,
          "chol": 87.0,
          "na": 519.05,
          "sugar": 0.31
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "seabass",
            "soy",
            "sesame_oil"
          ],
          "sat": [
            "ginger",
            "scallion",
            "soy"
          ],
          "chol": [
            "ginger",
            "scallion",
            "soy",
            "sesame_oil"
          ],
          "na": [
            "sesame_oil"
          ],
          "sugar": [
            "seabass",
            "ginger",
            "soy",
            "sesame_oil"
          ]
        }
      },
      "rawGrams": 701,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "魚肉"
      ]
    },
    {
      "id": "cabbage",
      "name": "手撕高麗菜",
      "role": "side",
      "cuisine": "湘味",
      "image": "img/cabbage.jpg",
      "imageNote": "HowToCook 社群照片（原版加了五花肉）",
      "source": {
        "type": "HowToCook",
        "title": "手撕包菜",
        "path": "dishes/vegetable_dish/手撕包菜/手撕包菜.md",
        "changes": "拿掉五花肉、油從 60 ml 降到 12 g、拿掉雞精"
      },
      "ingredients": [
        {
          "food": "cabbage",
          "g": 700,
          "prep": "撕成手掌大小，洗淨後一定要瀝乾",
          "measure": "約 1 顆去芯"
        },
        {
          "food": "garlic",
          "g": 15,
          "prep": "拍碎",
          "measure": "3 瓣"
        },
        {
          "food": "chili",
          "g": 10,
          "prep": "切斜片"
        },
        {
          "food": "oil",
          "g": 12,
          "measure": "1 大匙"
        },
        {
          "food": "soy",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "vinegar",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        }
      ],
      "steps": [
        {
          "text": "高麗菜撕片，洗淨後用蔬菜脫水器甩乾或廚房紙吸乾。水多會油爆、也會炒成水煮菜。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中大火預熱 3 分鐘。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中大火",
          "attended": false
        },
        {
          "text": "加油，蒜和辣椒爆香 20 秒，先下一半高麗菜炒 1 分鐘，縮小後再下另一半。",
          "min": 2,
          "device": "鑄鐵鍋",
          "heat": "中大火",
          "attended": true
        },
        {
          "text": "繼續炒 3～4 分鐘，加鹽，醬油和烏醋沿著鍋邊淋下（會更香），拌 20 秒關火。",
          "min": 4,
          "device": "鑄鐵鍋",
          "heat": "大火",
          "attended": true,
          "check": "葉子變軟、梗還有一點脆"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分半",
        "note": "隔天會出水變軟：便當份先撈起、瀝掉湯汁再裝"
      },
      "safety": "",
      "nutrition": {
        "total": {
          "kcal": 293.40999999999997,
          "pro": 11.875,
          "fat": 13.488000000000001,
          "carb": 41.53,
          "fib": 10.42,
          "sat": 1.224,
          "chol": 0.0,
          "na": 1915.04,
          "sugar": 0.45999999999999996
        },
        "serving": {
          "kcal": 73.35249999999999,
          "pro": 2.96875,
          "fat": 3.3720000000000003,
          "carb": 10.3825,
          "fib": 2.605,
          "sat": 0.306,
          "chol": 0.0,
          "na": 478.76,
          "sugar": 0.11499999999999999
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "oil",
            "soy"
          ],
          "sat": [
            "cabbage",
            "soy",
            "vinegar"
          ],
          "chol": [
            "cabbage",
            "garlic",
            "chili",
            "oil",
            "soy",
            "vinegar"
          ],
          "na": [],
          "sugar": [
            "cabbage",
            "oil",
            "soy",
            "vinegar"
          ]
        }
      },
      "rawGrams": 760,
      "portion": {
        "value": 1.549145299145299,
        "unit": "拳",
        "basis": "蔬菜生重 ÷ 1.3 推估熟重；每拳約 90 g"
      },
      "proteins": []
    },
    {
      "id": "zucchini-egg",
      "name": "櫛瓜番茄炒蛋",
      "role": "side",
      "cuisine": "中式家常",
      "image": "img/zucchini-egg.jpg",
      "imageNote": "HowToCook 社群照片",
      "source": {
        "type": "HowToCook",
        "title": "西葫芦炒鸡蛋",
        "path": "dishes/vegetable_dish/西葫芦炒鸡蛋/西葫芦炒鸡蛋.md",
        "changes": "改成四份；為了膽固醇只用 3 顆蛋；強調蛋要炒到全熟"
      },
      "ingredients": [
        {
          "food": "zucchini",
          "g": 600,
          "prep": "切半月形片，厚 0.7 公分",
          "measure": "2 條"
        },
        {
          "food": "tomato",
          "g": 300,
          "prep": "切小塊",
          "measure": "2 顆"
        },
        {
          "food": "egg",
          "g": 165,
          "prep": "打散",
          "measure": "3 顆"
        },
        {
          "food": "scallion",
          "g": 15,
          "prep": "切蔥花",
          "measure": "1 根"
        },
        {
          "food": "oil",
          "g": 12,
          "measure": "1 大匙（分兩次）"
        },
        {
          "food": "salt",
          "g": 4,
          "measure": "2/3 茶匙（分兩次）"
        }
      ],
      "steps": [
        {
          "text": "櫛瓜切片、番茄切塊，蛋打散加一小撮鹽。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中火預熱 3 分鐘。",
          "min": 3,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": false
        },
        {
          "text": "加 1 茶匙油，倒入蛋液，30 秒後開始推動，炒到完全凝固，盛起。",
          "min": 2,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true,
          "check": "看不到任何濕亮、會流動的蛋液"
        },
        {
          "text": "加剩下的油，番茄炒 2 分鐘到出汁變軟，再下櫛瓜和剩下的鹽炒勻。有鍋蓋就蓋上轉中小火 3～4 分鐘；沒有鍋蓋就繼續翻炒 5 分鐘。",
          "min": 6,
          "device": "鑄鐵鍋",
          "heat": "中小火",
          "attended": true,
          "check": "筷子能輕鬆插穿櫛瓜"
        },
        {
          "text": "蛋倒回去拌 15 秒，撒蔥花關火。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分半",
        "note": "會出一點水，便當份先瀝掉湯汁"
      },
      "safety": "蛋一定要炒到全熟。番茄的酸會讓鑄鐵鍋的油膜變薄，炒完盡快盛出、別把番茄菜放在鑄鐵鍋裡過夜。",
      "nutrition": {
        "total": {
          "kcal": 459.51,
          "pro": 37.335,
          "fat": 27.183,
          "carb": 27.285,
          "fib": 8.205,
          "sat": 6.444,
          "chol": 663.3,
          "na": 1791.24,
          "sugar": 0.63
        },
        "serving": {
          "kcal": 114.8775,
          "pro": 9.33375,
          "fat": 6.79575,
          "carb": 6.82125,
          "fib": 2.05125,
          "sat": 1.611,
          "chol": 165.825,
          "na": 447.81,
          "sugar": 0.1575
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "oil"
          ],
          "sat": [
            "zucchini",
            "tomato",
            "scallion"
          ],
          "chol": [
            "zucchini",
            "tomato",
            "scallion",
            "oil"
          ],
          "na": [],
          "sugar": [
            "zucchini",
            "tomato",
            "oil"
          ]
        }
      },
      "rawGrams": 1096,
      "portion": {
        "value": 1.955128205128205,
        "unit": "拳",
        "basis": "蔬菜生重 ÷ 1.3 推估熟重；每拳約 90 g"
      },
      "proteins": [
        "蛋"
      ]
    },
    {
      "id": "wintermelon",
      "name": "紅燒冬瓜",
      "role": "side",
      "cuisine": "中式家常",
      "image": "img/wintermelon.jpg",
      "imageNote": "HowToCook 社群照片",
      "source": {
        "type": "HowToCook",
        "title": "红烧冬瓜",
        "path": "dishes/vegetable_dish/红烧冬瓜/红烧冬瓜.md",
        "changes": "油從 50 ml 降到 8 g，改用『先煎再燜』"
      },
      "ingredients": [
        {
          "food": "wintermelon",
          "g": 800,
          "prep": "去皮去籽，切 2.5 公分塊"
        },
        {
          "food": "ginger",
          "g": 10,
          "prep": "切末"
        },
        {
          "food": "scallion",
          "g": 20,
          "prep": "切蔥花"
        },
        {
          "food": "soy",
          "g": 20,
          "measure": "1 大匙多"
        },
        {
          "food": "oyster",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "sugar",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "oil",
          "g": 8,
          "measure": "2 茶匙"
        }
      ],
      "steps": [
        {
          "text": "冬瓜去皮、去籽、切塊，薑切末。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "鑄鐵鍋中火加油，冬瓜平鋪煎 3 分鐘，翻一次讓兩面微黃。",
          "min": 4,
          "device": "鑄鐵鍋",
          "heat": "中火",
          "attended": true
        },
        {
          "text": "加薑末、醬油、蠔油、糖和 150 g 水，中小火燜煮 10 分鐘（中間翻一次）。",
          "min": 10,
          "device": "鑄鐵鍋",
          "heat": "中小火",
          "attended": false,
          "check": "冬瓜變半透明，筷子插得過"
        },
        {
          "text": "大火收汁 1 分鐘，撒蔥花。",
          "min": 1,
          "device": "鑄鐵鍋",
          "heat": "大火",
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 1 分半",
        "note": ""
      },
      "safety": "",
      "nutrition": {
        "total": {
          "kcal": 275.34999999999997,
          "pro": 5.610000000000001,
          "fat": 8.052000000000001,
          "carb": 51.956999999999994,
          "fib": 10.290000000000001,
          "sat": 0.7759999999999999,
          "chol": 0.0,
          "na": 1585.69,
          "sugar": 15.616999999999999
        },
        "serving": {
          "kcal": 68.83749999999999,
          "pro": 1.4025000000000003,
          "fat": 2.0130000000000003,
          "carb": 12.989249999999998,
          "fib": 2.5725000000000002,
          "sat": 0.19399999999999998,
          "chol": 0.0,
          "na": 396.4225,
          "sugar": 3.9042499999999998
        },
        "missing": {
          "kcal": [],
          "pro": [
            "sugar"
          ],
          "fat": [
            "soy",
            "sugar"
          ],
          "carb": [],
          "fib": [
            "soy",
            "sugar",
            "oil"
          ],
          "sat": [
            "ginger",
            "scallion",
            "soy",
            "oyster",
            "sugar"
          ],
          "chol": [
            "ginger",
            "scallion",
            "soy",
            "sugar",
            "oil"
          ],
          "na": [],
          "sugar": [
            "ginger",
            "soy",
            "oyster",
            "oil"
          ]
        }
      },
      "rawGrams": 871,
      "portion": {
        "value": 1.7735042735042734,
        "unit": "拳",
        "basis": "蔬菜生重 ÷ 1.3 推估熟重；每拳約 90 g"
      },
      "proteins": []
    },
    {
      "id": "roast-eggplant",
      "name": "蒜香烤茄子",
      "role": "side",
      "cuisine": "燒烤風",
      "image": "img/eggplant.jpg",
      "imageNote": "HowToCook 社群照片",
      "source": {
        "type": "HowToCook",
        "title": "烤茄子",
        "path": "dishes/vegetable_dish/烤茄子/烤茄子.md",
        "changes": "依原作者的改進建議先剖半；油從 20–30 ml 降到 10 g；改用小烤箱"
      },
      "ingredients": [
        {
          "food": "eggplant",
          "g": 450,
          "prep": "對半剖開，切面劃格子（不要劃破皮）",
          "measure": "3 條"
        },
        {
          "food": "garlic",
          "g": 15,
          "prep": "切末",
          "measure": "3 瓣"
        },
        {
          "food": "soy",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "chili",
          "g": 10,
          "prep": "切碎"
        },
        {
          "food": "salt",
          "g": 1,
          "measure": "一小撮"
        },
        {
          "food": "olive_oil",
          "g": 10,
          "measure": "2 茶匙（用刷的）"
        }
      ],
      "steps": [
        {
          "text": "茄子剖半劃格子，切面刷薄薄一層油。蒜末、醬油、辣椒、鹽拌成醬。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "小烤箱預熱 5 分鐘，茄子切面朝上烤 15 分鐘。",
          "min": 20,
          "device": "小烤箱",
          "heat": "最高溫（約 200°C）",
          "attended": false
        },
        {
          "text": "抹上蒜末醬，再烤 5～7 分鐘。",
          "min": 7,
          "device": "小烤箱",
          "heat": "最高溫（約 200°C）",
          "attended": false,
          "check": "筷子一壓就軟爛，蒜末微微金黃"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分鐘",
        "note": "放不下 6 個半條就分兩批"
      },
      "safety": "蒜末一起烤熟，不是生蒜。",
      "nutrition": {
        "total": {
          "kcal": 212.65,
          "pro": 7.815,
          "fat": 11.0,
          "carb": 30.945,
          "fib": 13.47,
          "sat": 2.1399999999999997,
          "chol": 0.0,
          "na": 1153.55,
          "sugar": 10.81
        },
        "serving": {
          "kcal": 53.1625,
          "pro": 1.95375,
          "fat": 2.75,
          "carb": 7.73625,
          "fib": 3.3675,
          "sat": 0.5349999999999999,
          "chol": 0.0,
          "na": 288.3875,
          "sugar": 2.7025
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "soy",
            "olive_oil"
          ],
          "sat": [
            "soy"
          ],
          "chol": [
            "eggplant",
            "garlic",
            "soy",
            "chili"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "soy",
            "olive_oil"
          ]
        }
      },
      "rawGrams": 501,
      "portion": {
        "value": 1.014957264957265,
        "unit": "拳",
        "basis": "蔬菜生重 ÷ 1.3 推估熟重；每拳約 90 g"
      },
      "proteins": []
    },
    {
      "id": "broccoli",
      "name": "微波蒜香青花菜",
      "role": "side",
      "cuisine": "家常",
      "image": null,
      "source": {
        "type": "原創",
        "title": "",
        "changes": "用微波爐做，完全不佔爐火"
      },
      "ingredients": [
        {
          "food": "broccoli",
          "g": 450,
          "prep": "切小朵，粗梗削皮切片",
          "measure": "約 2 顆"
        },
        {
          "food": "garlic",
          "g": 10,
          "prep": "切末",
          "measure": "2 瓣"
        },
        {
          "food": "salt",
          "g": 2,
          "measure": "1/3 茶匙"
        },
        {
          "food": "sesame_oil",
          "g": 4,
          "measure": "1 茶匙"
        }
      ],
      "steps": [
        {
          "text": "青花菜切小朵，泡水 5 分鐘再沖洗（花球裡容易藏小蟲和沙）。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "放進微波保鮮盒，加蒜末和 30 g 水，盒蓋留縫，600W 微波 4 分鐘，中途翻一次。盒子小就分兩批。",
          "min": 5,
          "device": "微波爐",
          "attended": false,
          "check": "叉子能刺穿梗，顏色還是翠綠"
        },
        {
          "text": "倒掉多的水，拌鹽和麻油。",
          "min": 1,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 1 分鐘",
        "note": "很適合便當，不太出水"
      },
      "safety": "蒜末一起微波熟。",
      "nutrition": {
        "total": {
          "kcal": 195.24,
          "pro": 15.974,
          "fat": 5.808,
          "carb": 31.898,
          "fib": 13.02,
          "sat": 1.58,
          "chol": 0.0,
          "na": 844.9,
          "sugar": 8.2
        },
        "serving": {
          "kcal": 48.81,
          "pro": 3.9935,
          "fat": 1.452,
          "carb": 7.9745,
          "fib": 3.255,
          "sat": 0.395,
          "chol": 0.0,
          "na": 211.225,
          "sugar": 2.05
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "sesame_oil"
          ],
          "sat": [],
          "chol": [
            "garlic",
            "sesame_oil"
          ],
          "na": [
            "sesame_oil"
          ],
          "sugar": [
            "sesame_oil"
          ]
        }
      },
      "rawGrams": 466,
      "portion": {
        "value": 0.9829059829059829,
        "unit": "拳",
        "basis": "蔬菜生重 ÷ 1.3 推估熟重；每拳約 90 g"
      },
      "proteins": []
    },
    {
      "id": "brown-rice",
      "name": "電子鍋糙米飯",
      "role": "starch",
      "cuisine": "主食",
      "image": null,
      "source": {
        "type": "原創",
        "title": "",
        "changes": ""
      },
      "ingredients": [
        {
          "food": "brown_rice",
          "g": 240,
          "measure": "1 杯半（電子鍋附的量米杯）"
        }
      ],
      "steps": [
        {
          "text": "糙米洗 2 次，水量照電子鍋內鍋的『糙米』刻度。沒有糙米模式就先泡 1 小時。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "按『糙米』模式。煮好後翻鬆。",
          "min": 70,
          "device": "電子鍋",
          "attended": false,
          "check": "米粒裂開、咬起來不硬芯"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "灑一點水，微波 600W 約 1 分半",
        "note": "煮好約 560 g 熟飯，每份約 140 g（一個拳頭）。吃不習慣可以糙米白米各半。 想縮短晚上的時間：早上出門前用電子鍋『預約』功能，回家就有飯。沒有糙米模式要先泡 1 小時（時間表沒算進去）。"
      },
      "safety": "煮好的飯不要在室溫放超過 2 小時，要盡快分裝冷藏。",
      "nutrition": {
        "total": {
          "kcal": 852.0,
          "pro": 17.76,
          "fat": 5.52,
          "carb": 183.84,
          "fib": 10.8,
          "sat": 1.44,
          "chol": null,
          "na": 7.2,
          "sugar": 1.2
        },
        "serving": {
          "kcal": 213.0,
          "pro": 4.44,
          "fat": 1.38,
          "carb": 45.96,
          "fib": 2.7,
          "sat": 0.36,
          "chol": null,
          "na": 1.8,
          "sugar": 0.3
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [],
          "sat": [],
          "chol": [
            "brown_rice"
          ],
          "na": [],
          "sugar": []
        }
      },
      "rawGrams": 240,
      "portion": {
        "value": 1.0,
        "unit": "拳",
        "basis": "依食譜 240 g 生米約煮成 560 g 熟飯；每拳約 140 g"
      },
      "proteins": []
    },
    {
      "id": "sweet-potato",
      "name": "電鍋蒸地瓜",
      "role": "starch",
      "cuisine": "主食",
      "image": null,
      "source": {
        "type": "原創",
        "title": "",
        "changes": ""
      },
      "ingredients": [
        {
          "food": "sweetpotato",
          "g": 600,
          "prep": "洗淨帶皮，太大條切半",
          "measure": "約 4 條中型"
        }
      ],
      "steps": [
        {
          "text": "地瓜刷洗乾淨。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "放進電鍋，外鍋 2 杯水，跳起後燜 10 分鐘。",
          "min": 50,
          "device": "電鍋",
          "attended": false,
          "check": "筷子能輕鬆插到中心"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 1 分鐘",
        "note": ""
      },
      "safety": "",
      "nutrition": {
        "total": {
          "kcal": 690.0,
          "pro": 7.8,
          "fat": 1.2,
          "carb": 166.8,
          "fib": 15.0,
          "sat": 0.6,
          "chol": null,
          "na": 306.0,
          "sugar": 28.8
        },
        "serving": {
          "kcal": 172.5,
          "pro": 1.95,
          "fat": 0.3,
          "carb": 41.7,
          "fib": 3.75,
          "sat": 0.15,
          "chol": null,
          "na": 76.5,
          "sugar": 7.2
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [],
          "sat": [],
          "chol": [
            "sweetpotato"
          ],
          "na": [],
          "sugar": []
        }
      },
      "rawGrams": 600,
      "portion": {
        "value": 1.0,
        "unit": "拳",
        "basis": "依掌拳規則：地瓜每拳約 150 g"
      },
      "proteins": []
    },
    {
      "id": "sriracha-chicken",
      "name": "是拉差檸檬雞腿",
      "role": "main",
      "cuisine": "美式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "好市多雞腿三種醃料：是拉差檸檬",
        "url": "https://www.instagram.com/kn.way___/reel/DbQZw72vRDa/",
        "changes": "橄欖油從 2 大匙減到 2 茶匙、蜂蜜減半；改成四份；溫度降到 190°C 避免蜂蜜燒焦"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "olive_oil",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "sriracha",
          "g": 30,
          "measure": "2 大匙"
        },
        {
          "food": "garlic_powder",
          "g": 3,
          "measure": "1 茶匙"
        },
        {
          "food": "onion_powder",
          "g": 1.5,
          "measure": "半茶匙"
        },
        {
          "food": "honey",
          "g": 10,
          "measure": "半大匙"
        },
        {
          "food": "lemon",
          "g": 30,
          "prep": "1 顆檸檬或萊姆擠汁，皮刨一點屑",
          "measure": "約 2 大匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        }
      ],
      "steps": [
        {
          "text": "所有醃料在碗裡拌勻，放入雞腿抓勻，裝夾鏈袋。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "冷藏醃至少 30 分鐘，前一晚醃好最入味。整袋冷凍可放 1 個月，前一晚移到冷藏退冰。",
          "min": 30,
          "device": null,
          "attended": false,
          "advance": true
        },
        {
          "text": "Ninja 選『氣炸』190°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C"
        },
        {
          "text": "雞腿平放不重疊（放不下就分兩批），氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C"
        },
        {
          "text": "打開翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 190°C"
        },
        {
          "text": "再氣炸 6 分鐘。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C",
          "check": "探針插最厚處到 74°C；沒有探針就切開看，中間沒有粉紅、汁是透明的"
        },
        {
          "text": "取出靜置 3 分鐘再切。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘；想要表面脆，可用 Ninja 180°C 回烤 3 分鐘"
      },
      "safety": "雞肉中心 74°C。有蜂蜜容易焦，表面太黑就蓋一張烘焙紙。",
      "nutrition": {
        "total": {
          "kcal": 1158.3750000000002,
          "pro": 120.52050000000001,
          "fat": 64.506,
          "carb": 17.7655,
          "fib": 2.361,
          "sat": 16.266000000000002,
          "chol": 696.0,
          "na": 3074.5000000000005,
          "sugar": 0.408
        },
        "serving": {
          "kcal": 289.59375000000006,
          "pro": 30.130125000000003,
          "fat": 16.1265,
          "carb": 4.441375,
          "fib": 0.59025,
          "sat": 4.0665000000000004,
          "chol": 174.0,
          "na": 768.6250000000001,
          "sugar": 0.102
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil",
            "honey"
          ],
          "sat": [
            "honey"
          ],
          "chol": [
            "sriracha",
            "garlic_powder",
            "onion_powder",
            "lemon",
            "bpepper"
          ],
          "na": [
            "olive_oil",
            "honey"
          ],
          "sugar": [
            "olive_oil",
            "sriracha",
            "garlic_powder",
            "honey",
            "bpepper"
          ]
        }
      },
      "rawGrams": 688.5,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "garlic-yogurt-chicken",
      "name": "香辣蒜香優格雞腿",
      "role": "main",
      "cuisine": "中東風",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "好市多雞腿三種醃料：香辣蒜香",
        "url": "https://www.instagram.com/kn.way___/reel/DbQZw72vRDa/",
        "changes": "橄欖油減到 2 茶匙、優格改無脂希臘優格；卡宴辣椒粉可減量"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "greek_yogurt",
          "g": 120,
          "measure": "半杯"
        },
        {
          "food": "olive_oil",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "garlic",
          "g": 25,
          "prep": "切末",
          "measure": "5 瓣"
        },
        {
          "food": "paprika",
          "g": 3,
          "measure": "1 茶匙"
        },
        {
          "food": "cayenne",
          "g": 2,
          "measure": "1 茶匙（怕辣用半茶匙）"
        },
        {
          "food": "lemon",
          "g": 15,
          "measure": "半顆擠汁"
        },
        {
          "food": "salt",
          "g": 4,
          "measure": "2/3 茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        }
      ],
      "steps": [
        {
          "text": "所有醃料拌勻，放入雞腿抓勻，裝夾鏈袋。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "冷藏醃至少 1 小時，前一晚醃好最嫩（優格會讓肉變軟）。",
          "min": 60,
          "device": null,
          "attended": false,
          "advance": true
        },
        {
          "text": "把雞腿表面多餘的優格刮掉一點（太厚會烤不焦）。",
          "min": 1,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "雞腿平放不重疊（放不下就分兩批），氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "打開翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 6 分鐘。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處到 74°C；沒有探針就切開看，中間沒有粉紅、汁是透明的"
        },
        {
          "text": "取出靜置 3 分鐘再切。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘；想要表面脆，可用 Ninja 180°C 回烤 3 分鐘"
      },
      "safety": "雞肉中心 74°C；蒜末跟著雞肉烤熟。",
      "nutrition": {
        "total": {
          "kcal": 1195.0500000000002,
          "pro": 133.76100000000002,
          "fat": 64.52199999999999,
          "carb": 15.602,
          "fib": 3.43,
          "sat": 16.401,
          "chol": 702.0,
          "na": 2025.02,
          "sugar": 4.27
        },
        "serving": {
          "kcal": 298.76250000000005,
          "pro": 33.440250000000006,
          "fat": 16.130499999999998,
          "carb": 3.9005,
          "fib": 0.8575,
          "sat": 4.10025,
          "chol": 175.5,
          "na": 506.255,
          "sugar": 1.0675
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "garlic",
            "paprika",
            "cayenne",
            "lemon",
            "bpepper"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "olive_oil",
            "paprika",
            "cayenne",
            "bpepper"
          ]
        }
      },
      "rawGrams": 780,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "greek-lemon-chicken",
      "name": "希臘檸檬優格雞腿",
      "role": "main",
      "cuisine": "希臘風",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "好市多雞腿三種醃料：希臘檸檬雞",
        "url": "https://www.instagram.com/kn.way___/reel/DbQZw72vRDa/",
        "changes": "橄欖油減半；改成四份"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "greek_yogurt",
          "g": 45,
          "measure": "3 大匙"
        },
        {
          "food": "olive_oil",
          "g": 6,
          "measure": "1 茶匙多"
        },
        {
          "food": "lemon",
          "g": 30,
          "prep": "1 顆擠汁，皮刨一點屑"
        },
        {
          "food": "italian_herb",
          "g": 3,
          "measure": "1 茶匙半"
        },
        {
          "food": "salt",
          "g": 4,
          "measure": "2/3 茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "chili",
          "g": 5,
          "prep": "切碎，可省略"
        }
      ],
      "steps": [
        {
          "text": "所有醃料拌勻，放入雞腿抓勻，裝夾鏈袋。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "冷藏醃至少 30 分鐘，前一晚醃好最入味。",
          "min": 30,
          "device": null,
          "attended": false,
          "advance": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "雞腿平放不重疊（放不下就分兩批），氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "打開翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 6 分鐘。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處到 74°C；沒有探針就切開看，中間沒有粉紅、汁是透明的"
        },
        {
          "text": "取出靜置 3 分鐘再切。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘；想要表面脆，可用 Ninja 180°C 回烤 3 分鐘"
      },
      "safety": "雞肉中心 74°C。",
      "nutrition": {
        "total": {
          "kcal": 1089.29,
          "pro": 124.55300000000001,
          "fat": 59.937,
          "carb": 6.293000000000001,
          "fib": 1.3800000000000001,
          "sat": 15.554,
          "chol": 698.25,
          "na": 1998.11,
          "sugar": 2.2609999999999997
        },
        "serving": {
          "kcal": 272.3225,
          "pro": 31.138250000000003,
          "fat": 14.98425,
          "carb": 1.5732500000000003,
          "fib": 0.34500000000000003,
          "sat": 3.8885,
          "chol": 174.5625,
          "na": 499.5275,
          "sugar": 0.5652499999999999
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "lemon",
            "italian_herb",
            "bpepper",
            "chili"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "olive_oil",
            "bpepper"
          ]
        }
      },
      "rawGrams": 694,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "airfry-popcorn-chicken",
      "name": "氣炸鹽酥雞",
      "role": "main",
      "cuisine": "台式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "氣炸鹽酥雞",
        "url": "https://www.instagram.com/kn.way___/reel/DZkLKQjvgZB/",
        "changes": "改成四份；油從 2 大匙減到 2 茶匙（用刷的）；椒鹽改成鹽＋白胡椒自己配"
      },
      "ingredients": [
        {
          "food": "chicken_breast",
          "g": 560,
          "prep": "切 2.5 公分塊"
        },
        {
          "food": "egg_white",
          "g": 66,
          "measure": "2 顆蛋的蛋白"
        },
        {
          "food": "garlic",
          "g": 15,
          "prep": "切末",
          "measure": "3 瓣"
        },
        {
          "food": "wpepper",
          "g": 2,
          "measure": "1 茶匙（醃＋撒各半）"
        },
        {
          "food": "five_spice",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "soy",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "sp_starch",
          "g": 25,
          "measure": "約 3 大匙"
        },
        {
          "food": "salt",
          "g": 2,
          "measure": "1/3 茶匙（起鍋撒）"
        },
        {
          "food": "basil",
          "g": 20,
          "prep": "摘葉子、洗淨擦乾",
          "measure": "1 大把"
        },
        {
          "food": "oil",
          "g": 10,
          "measure": "2 茶匙（刷在表面）"
        }
      ],
      "steps": [
        {
          "text": "雞胸切塊，加蛋白、蒜末、一半白胡椒、五香粉、醬油抓勻。",
          "min": 6,
          "device": null,
          "attended": true
        },
        {
          "text": "醃 10 分鐘（蛋白讓肉不柴）。",
          "min": 10,
          "device": null,
          "attended": false
        },
        {
          "text": "每塊薄薄沾一層地瓜粉，靜置 3 分鐘讓粉反潮（比較不會掉粉）。",
          "min": 6,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "雞塊平鋪、表面刷油，氣炸 6 分鐘。四份放不下就分兩批。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 6 分鐘。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "切開最大塊，中間全白、沒有粉紅"
        },
        {
          "text": "撒鹽和剩下的白胡椒，放入九層塔再氣炸 30 秒。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "Ninja 180°C 回烤 3 分鐘最脆；微波會變軟",
        "note": "九層塔隔天會變黑，便當份可以不放"
      },
      "safety": "雞肉中心 74°C；生蛋白跟著雞肉一起烤熟。",
      "nutrition": {
        "total": {
          "kcal": 844.11,
          "pro": 143.15200000000002,
          "fat": 13.733,
          "carb": 30.733999999999998,
          "fib": 2.4570000000000003,
          "sat": 2.159,
          "chol": 313.6,
          "na": 1682.0100000000002,
          "sugar": 0.16999999999999998
        },
        "serving": {
          "kcal": 211.0275,
          "pro": 35.788000000000004,
          "fat": 3.43325,
          "carb": 7.6834999999999996,
          "fib": 0.6142500000000001,
          "sat": 0.53975,
          "chol": 78.4,
          "na": 420.50250000000005,
          "sugar": 0.042499999999999996
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "chicken_breast",
            "egg_white",
            "soy",
            "oil"
          ],
          "sat": [
            "egg_white",
            "soy",
            "sp_starch"
          ],
          "chol": [
            "garlic",
            "wpepper",
            "five_spice",
            "soy",
            "sp_starch",
            "basil",
            "oil"
          ],
          "na": [],
          "sugar": [
            "chicken_breast",
            "egg_white",
            "wpepper",
            "five_spice",
            "soy",
            "oil"
          ]
        }
      },
      "rawGrams": 711,
      "portion": {
        "value": 1.1592592592592592,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "蛋",
        "雞肉"
      ]
    },
    {
      "id": "miso-yogurt-chicken",
      "name": "雞腿彩蔬佐味噌辣優格醬",
      "role": "main",
      "cuisine": "日韓混搭",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "雞腿蔬菜＋味噌是拉差優格醬",
        "url": "https://www.instagram.com/kn.way___/reel/DeEr9HDP-J9/",
        "changes": "改成四份；醬裡的生蒜泥改成蒜粉（不吃生的）；橄欖油減量"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "切一口大小"
        },
        {
          "food": "zucchini",
          "g": 500,
          "prep": "切塊"
        },
        {
          "food": "bellpepper",
          "g": 300,
          "prep": "切塊"
        },
        {
          "food": "onion",
          "g": 300,
          "prep": "切塊"
        },
        {
          "food": "olive_oil",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "garlic_powder",
          "g": 5,
          "measure": "1 茶匙半（醬裡用一點）"
        },
        {
          "food": "bpepper",
          "g": 2,
          "measure": "1 茶匙"
        },
        {
          "food": "soy",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "greek_yogurt",
          "g": 120,
          "prep": "做醬"
        },
        {
          "food": "miso",
          "g": 14,
          "prep": "做醬",
          "measure": "1 大匙"
        },
        {
          "food": "honey",
          "g": 7,
          "prep": "做醬",
          "measure": "1 茶匙"
        },
        {
          "food": "sriracha",
          "g": 10,
          "prep": "做醬",
          "measure": "2 茶匙"
        },
        {
          "food": "scallion",
          "g": 15,
          "prep": "切蔥花",
          "measure": "1 根"
        }
      ],
      "steps": [
        {
          "text": "雞腿和蔬菜切成一口大小，加橄欖油、蒜粉、黑胡椒、醬油拌勻。",
          "min": 15,
          "device": null,
          "attended": true
        },
        {
          "text": "做醬：優格、味噌、蜂蜜、一小撮蒜粉、1–2 茶匙水、是拉差、蔥花拌勻，冷藏備用。",
          "min": 4,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』190°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C"
        },
        {
          "text": "分兩批放入（份量多，一次放會變成蒸的）。第一批氣炸 10 分鐘。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C"
        },
        {
          "text": "翻拌一次。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 190°C"
        },
        {
          "text": "再氣炸 10 分鐘，取出。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C",
          "check": "雞肉中心 74°C、蔬菜邊緣微焦"
        },
        {
          "text": "第二批氣炸 10 分鐘。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C"
        },
        {
          "text": "翻拌一次。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 190°C"
        },
        {
          "text": "再氣炸 10 分鐘。吃之前淋醬。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 190°C",
          "check": "雞肉中心 74°C"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分半",
        "note": "醬另外用小盒裝，吃前再淋（醬不要微波）"
      },
      "safety": "雞肉中心 74°C；醬是冷的，但裡面沒有生肉生蛋。",
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1498.09,
          "pro": 151.37800000000004,
          "fat": 66.836,
          "carb": 82.16799999999999,
          "fib": 16.285,
          "sat": 16.727000000000004,
          "chol": 702.0,
          "na": 2040.11,
          "sugar": 23.325
        },
        "serving": {
          "kcal": 374.5225,
          "pro": 37.84450000000001,
          "fat": 16.709,
          "carb": 20.541999999999998,
          "fib": 4.07125,
          "sat": 4.181750000000001,
          "chol": 175.5,
          "na": 510.0275,
          "sugar": 5.83125
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "olive_oil",
            "soy",
            "honey"
          ],
          "sat": [
            "zucchini",
            "bellpepper",
            "soy",
            "honey",
            "scallion"
          ],
          "chol": [
            "zucchini",
            "bellpepper",
            "onion",
            "garlic_powder",
            "bpepper",
            "soy",
            "miso",
            "sriracha",
            "scallion"
          ],
          "na": [
            "olive_oil",
            "honey"
          ],
          "sugar": [
            "zucchini",
            "bellpepper",
            "olive_oil",
            "garlic_powder",
            "bpepper",
            "soy",
            "honey",
            "sriracha"
          ]
        }
      },
      "rawGrams": 1893,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "peri-peri-chicken",
      "name": "南非 Peri-Peri 烤雞",
      "role": "main",
      "cuisine": "南非",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "南非 Peri-Peri 烤雞",
        "url": "https://www.instagram.com/kn.way___/reel/Ddv_YRUPuiF/",
        "changes": "雞腿 800 g 改成 600 g 四份、醬料等比例調整；橄欖油減量；烤肉架改 Ninja；甜椒用鑄鐵鍋乾烤"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "bellpepper",
          "g": 150,
          "prep": "整顆或大塊",
          "measure": "約 3/4 顆"
        },
        {
          "food": "chili",
          "g": 30,
          "prep": "去蒂（怕辣就去籽或減半）",
          "measure": "3 根"
        },
        {
          "food": "garlic",
          "g": 20,
          "measure": "4 瓣"
        },
        {
          "food": "red_onion",
          "g": 40,
          "measure": "約 1/5 顆"
        },
        {
          "food": "paprika",
          "g": 3,
          "measure": "1 茶匙"
        },
        {
          "food": "italian_herb",
          "g": 2,
          "measure": "1 茶匙半"
        },
        {
          "food": "lemon",
          "g": 20,
          "measure": "半顆擠汁"
        },
        {
          "food": "white_vinegar",
          "g": 22,
          "measure": "1 大匙半"
        },
        {
          "food": "olive_oil",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "honey",
          "g": 5,
          "measure": "少於 1 茶匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        }
      ],
      "steps": [
        {
          "text": "鑄鐵鍋不放油，中大火把甜椒乾烤到表皮有焦斑，約 8 分鐘，中途翻面。",
          "min": 8,
          "device": "鑄鐵鍋",
          "attended": true,
          "heat": "中大火",
          "advance": true
        },
        {
          "text": "烤好的甜椒和其他醬料全部放進果汁機打成醬。",
          "min": 3,
          "device": "果汁機",
          "attended": true,
          "advance": true
        },
        {
          "text": "醬倒在雞腿上抓勻，裝夾鏈袋冷藏醃至少 3 小時，前一晚最好。",
          "min": 180,
          "device": null,
          "attended": false,
          "advance": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "雞腿平放不重疊（放不下就分兩批），氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "打開翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 7 分鐘。",
          "min": 7,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處到 74°C；沒有探針就切開看，中間沒有粉紅、汁是透明的"
        },
        {
          "text": "取出靜置 3 分鐘再切。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘；想要表面脆，可用 Ninja 180°C 回烤 3 分鐘"
      },
      "safety": "雞肉中心 74°C。醬裡的蒜和洋蔥是生打的，但會跟雞肉一起烤熟；剩下的醬汁要丟掉，不要直接吃（碰過生肉）。",
      "nutrition": {
        "total": {
          "kcal": 1210.87,
          "pro": 123.57,
          "fat": 65.16499999999998,
          "carb": 31.244999999999997,
          "fib": 7.949999999999998,
          "sat": 16.337999999999997,
          "chol": 696.0,
          "na": 1636.55,
          "sugar": 3.2940000000000005
        },
        "serving": {
          "kcal": 302.7175,
          "pro": 30.8925,
          "fat": 16.291249999999994,
          "carb": 7.811249999999999,
          "fib": 1.9874999999999996,
          "sat": 4.084499999999999,
          "chol": 174.0,
          "na": 409.1375,
          "sugar": 0.8235000000000001
        },
        "missing": {
          "kcal": [],
          "pro": [
            "white_vinegar"
          ],
          "fat": [
            "white_vinegar"
          ],
          "carb": [],
          "fib": [
            "white_vinegar",
            "olive_oil",
            "honey"
          ],
          "sat": [
            "bellpepper",
            "white_vinegar",
            "honey"
          ],
          "chol": [
            "bellpepper",
            "chili",
            "garlic",
            "red_onion",
            "paprika",
            "italian_herb",
            "lemon",
            "white_vinegar",
            "bpepper"
          ],
          "na": [
            "olive_oil",
            "honey"
          ],
          "sugar": [
            "bellpepper",
            "paprika",
            "white_vinegar",
            "olive_oil",
            "honey",
            "bpepper"
          ]
        }
      },
      "rawGrams": 906,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "airfry-potato",
      "name": "氣炸香草馬鈴薯",
      "role": "starch",
      "cuisine": "西式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "氣炸香草馬鈴薯",
        "url": "https://www.instagram.com/kn.way___/reel/DfCYZmvPrmm/",
        "changes": "改成四份主食；油從每 300 g 1 大匙減到全部 1 大匙"
      },
      "ingredients": [
        {
          "food": "potato",
          "g": 800,
          "prep": "黃皮或紅皮，連皮切 2 公分塊，擦乾",
          "measure": "約 4 顆"
        },
        {
          "food": "olive_oil",
          "g": 12,
          "measure": "1 大匙"
        },
        {
          "food": "rosemary",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "italian_herb",
          "g": 2,
          "measure": "1 茶匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        }
      ],
      "steps": [
        {
          "text": "馬鈴薯刷洗乾淨，連皮切 2 公分塊，用廚房紙擦乾。和油、香料、鹽、黑胡椒拌勻。",
          "min": 10,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』200°C，不用預熱，馬鈴薯攤平放入，氣炸 7 分鐘。",
          "min": 7,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "搖一搖、翻一下。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 6 分鐘。",
          "min": 6,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再搖一次。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 5 分鐘。",
          "min": 5,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "叉子一戳就穿、表面金黃"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "Ninja 180°C 回烤 4 分鐘最好；微波也可以但會變軟",
        "note": "每份約 200 g，飽足感比白飯高。不要用美國褐皮馬鈴薯，烤起來乾。"
      },
      "safety": "馬鈴薯發芽或變綠的部分要整塊挖掉。",
      "nutrition": {
        "total": {
          "kcal": 662.05,
          "pro": 19.063,
          "fat": 12.436,
          "carb": 121.429,
          "fib": 10.799,
          "sat": 2.15,
          "chol": 0.0,
          "na": 1195.6799999999998,
          "sugar": 3.4370000000000003
        },
        "serving": {
          "kcal": 165.5125,
          "pro": 4.76575,
          "fat": 3.109,
          "carb": 30.35725,
          "fib": 2.69975,
          "sat": 0.5375,
          "chol": 0.0,
          "na": 298.91999999999996,
          "sugar": 0.8592500000000001
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "rosemary",
            "italian_herb",
            "bpepper"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "olive_oil",
            "bpepper"
          ]
        }
      },
      "rawGrams": 819,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "拳",
        "basis": "依掌拳規則：馬鈴薯塊每拳約 180 g"
      },
      "proteins": []
    },
    {
      "id": "lemon-chicken-potato-tray",
      "name": "希臘檸檬雞腿馬鈴薯烤盤",
      "role": "main",
      "cuisine": "希臘風",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "希臘檸檬雞腿馬鈴薯烤盤",
        "url": "https://www.instagram.com/kn.way___/reel/DcgKiKZPwqO/",
        "changes": "拿掉蘑菇；橄欖油從 1/4 杯減到 1 大匙；馬鈴薯 1 kg 減到 600 g；雞腿和馬鈴薯用 Ninja、花椰菜番茄改用小烤箱同時烤"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "4 片，修掉黃色脂肪"
        },
        {
          "food": "potato",
          "g": 600,
          "prep": "連皮切 3 公分塊",
          "measure": "3 顆"
        },
        {
          "food": "olive_oil",
          "g": 15,
          "measure": "1 大匙"
        },
        {
          "food": "lemon",
          "g": 60,
          "measure": "1/4 杯（約 2 顆）"
        },
        {
          "food": "garlic",
          "g": 25,
          "prep": "切末",
          "measure": "5 瓣"
        },
        {
          "food": "italian_herb",
          "g": 4,
          "measure": "2 茶匙"
        },
        {
          "food": "salt",
          "g": 6,
          "measure": "1 茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "cherry_tomato",
          "g": 150
        },
        {
          "food": "broccoli",
          "g": 400,
          "prep": "切小朵"
        }
      ],
      "steps": [
        {
          "text": "檸檬汁、60 g 水、油、蒜末、香料、鹽、黑胡椒調成醬汁。雞腿和馬鈴薯放大碗，倒入 2/3 醬汁拌勻。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『烘烤』200°C，雞腿和馬鈴薯攤平放入，烤 15 分鐘。",
          "min": 15,
          "device": "Ninja",
          "attended": false,
          "heat": "烘烤 200°C"
        },
        {
          "text": "翻拌一次，把盤底的汁淋回雞腿。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "烘烤 200°C"
        },
        {
          "text": "再烤 15 分鐘。",
          "min": 15,
          "device": "Ninja",
          "attended": false,
          "heat": "烘烤 200°C",
          "check": "雞肉中心 74°C、馬鈴薯一戳就穿"
        },
        {
          "text": "花椰菜和小番茄拌剩下的醬汁，放小烤箱烤 12 分鐘。",
          "min": 12,
          "device": "小烤箱",
          "attended": false,
          "heat": "最高溫（約 200°C）",
          "check": "花椰菜邊緣微焦、梗叉得過"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分半",
        "note": ""
      },
      "safety": "雞肉中心 74°C。",
      "hasStarch": true,
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1769.6999999999998,
          "pro": 150.91700000000003,
          "fat": 71.40699999999998,
          "carb": 139.135,
          "fib": 23.045,
          "sat": 18.305999999999997,
          "chol": 696.0,
          "na": 2847.7900000000004,
          "sugar": 18.628
        },
        "serving": {
          "kcal": 442.42499999999995,
          "pro": 37.72925000000001,
          "fat": 17.851749999999996,
          "carb": 34.78375,
          "fib": 5.76125,
          "sat": 4.576499999999999,
          "chol": 174.0,
          "na": 711.9475000000001,
          "sugar": 4.657
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "olive_oil"
          ],
          "sat": [],
          "chol": [
            "lemon",
            "garlic",
            "italian_herb",
            "bpepper",
            "cherry_tomato"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "olive_oil",
            "bpepper"
          ]
        }
      },
      "rawGrams": 1861,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "salmon-tray",
      "name": "氣炸鮭魚蔬菜盤",
      "role": "main",
      "cuisine": "地中海風",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "10 分鐘氣炸鮭魚蔬菜（女生版）",
        "url": "https://www.instagram.com/kn.way___/reel/De4FOUJPLob/",
        "changes": "用女生版份量×4；拿掉蘑菇改櫛瓜；橄欖油減半"
      },
      "ingredients": [
        {
          "food": "salmon",
          "g": 520,
          "prep": "切 2.5 公分丁，擦乾"
        },
        {
          "food": "broccoli",
          "g": 200,
          "prep": "切小朵"
        },
        {
          "food": "zucchini",
          "g": 280,
          "prep": "切塊"
        },
        {
          "food": "cherry_tomato",
          "g": 320
        },
        {
          "food": "olive_oil",
          "g": 8,
          "measure": "2 茶匙"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "italian_herb",
          "g": 2,
          "measure": "1 茶匙"
        },
        {
          "food": "lemon",
          "g": 20,
          "measure": "半顆擠汁"
        }
      ],
      "steps": [
        {
          "text": "鮭魚切丁擦乾；蔬菜切好。全部和油、鹽、黑胡椒、香料拌勻。",
          "min": 10,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "分兩批平鋪一層，每批氣炸 10 分鐘，中途不要搖（鮭魚會碎）。",
          "min": 20,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "鮭魚整塊變不透明、一撥就散"
        },
        {
          "text": "擠檸檬汁。",
          "min": 1,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "微波 600W 約 1 分半，加 1 大匙水蓋蓋",
        "note": "鮭魚油脂比白肉魚多，一週吃 1–2 次就好"
      },
      "safety": "魚肉中心 63°C、完全不透明。",
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1186.07,
          "pro": 124.82399999999998,
          "fat": 60.096999999999994,
          "carb": 43.150999999999996,
          "fib": 13.684999999999997,
          "sat": 16.275,
          "chol": 312.0,
          "na": 1440.6299999999999,
          "sugar": 20.364
        },
        "serving": {
          "kcal": 296.5175,
          "pro": 31.205999999999996,
          "fat": 15.024249999999999,
          "carb": 10.787749999999999,
          "fib": 3.4212499999999992,
          "sat": 4.06875,
          "chol": 78.0,
          "na": 360.15749999999997,
          "sugar": 5.091
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "salmon",
            "olive_oil"
          ],
          "sat": [
            "zucchini"
          ],
          "chol": [
            "zucchini",
            "cherry_tomato",
            "bpepper",
            "italian_herb",
            "lemon"
          ],
          "na": [
            "olive_oil"
          ],
          "sugar": [
            "zucchini",
            "olive_oil",
            "bpepper"
          ]
        }
      },
      "rawGrams": 1354,
      "portion": {
        "value": 0.9629629629629629,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "魚肉"
      ]
    },
    {
      "id": "sweet-potato-egg-bake",
      "name": "高蛋白地瓜烘蛋",
      "role": "main",
      "cuisine": "美式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "高蛋白地瓜烘蛋",
        "url": "https://www.instagram.com/kn.way___/reel/DcJCE6zvuN-/",
        "changes": "拿掉蘑菇改甜椒；為了膽固醇 3 顆全蛋改成 2 顆全蛋＋6 顆蛋白；熟雞胸改用生雞胸丁一起烤；份量放大成四份"
      },
      "ingredients": [
        {
          "food": "sweetpotato",
          "g": 400,
          "prep": "去皮切 1 公分片"
        },
        {
          "food": "chicken_breast",
          "g": 300,
          "prep": "切 1.5 公分丁"
        },
        {
          "food": "broccoli",
          "g": 200,
          "prep": "切小朵"
        },
        {
          "food": "cherry_tomato",
          "g": 140,
          "prep": "對半切"
        },
        {
          "food": "bellpepper",
          "g": 60,
          "prep": "切丁"
        },
        {
          "food": "red_onion",
          "g": 40,
          "prep": "切丁"
        },
        {
          "food": "egg",
          "g": 110,
          "measure": "2 顆"
        },
        {
          "food": "egg_white",
          "g": 198,
          "measure": "6 顆蛋的蛋白"
        },
        {
          "food": "cheese",
          "g": 20
        },
        {
          "food": "jalapeno",
          "g": 20,
          "prep": "可省略"
        },
        {
          "food": "salt",
          "g": 3,
          "measure": "半茶匙"
        },
        {
          "food": "bpepper",
          "g": 1,
          "measure": "少許"
        },
        {
          "food": "garlic_powder",
          "g": 2,
          "measure": "半茶匙"
        },
        {
          "food": "paprika",
          "g": 2,
          "measure": "半茶匙"
        }
      ],
      "steps": [
        {
          "text": "地瓜片放微波盒加 2 大匙水，盒蓋留縫，600W 微波 6 分鐘到軟。",
          "min": 6,
          "device": "微波爐",
          "attended": false
        },
        {
          "text": "切雞胸丁和蔬菜；全蛋加蛋白、鹽、黑胡椒、蒜粉、紅椒粉打散。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "烤皿抹極薄一層油，鋪地瓜壓平，依序放雞胸、花椰菜、番茄、甜椒、洋蔥，倒入蛋液，撒辣椒片和起司。",
          "min": 5,
          "device": null,
          "attended": true
        },
        {
          "text": "小烤箱預熱後烤 35 分鐘；表面太快焦就蓋鋁箔紙。",
          "min": 40,
          "device": "小烤箱",
          "attended": false,
          "heat": "約 200°C",
          "check": "中間插刀子拔出來沒有蛋液；探針插雞肉到 74°C"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘",
        "note": "切 4 塊分裝；也可以當早餐"
      },
      "safety": "蛋要完全凝固、雞肉中心 74°C。烤皿要放得進你的小烤箱（約 20×15 公分）；放不下就分兩盤或改用 Ninja 深烤盤『烘烤』180°C。",
      "hasStarch": true,
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1263.2500000000002,
          "pro": 128.81000000000003,
          "fat": 19.892999999999997,
          "carb": 151.14299999999997,
          "fib": 20.827000000000005,
          "sat": 8.641,
          "chol": 625.4000000000001,
          "na": 2536.23,
          "sugar": 33.21
        },
        "serving": {
          "kcal": 315.81250000000006,
          "pro": 32.20250000000001,
          "fat": 4.973249999999999,
          "carb": 37.78574999999999,
          "fib": 5.206750000000001,
          "sat": 2.16025,
          "chol": 156.35000000000002,
          "na": 634.0575,
          "sugar": 8.3025
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "chicken_breast",
            "egg_white",
            "cheese"
          ],
          "sat": [
            "bellpepper",
            "egg_white"
          ],
          "chol": [
            "sweetpotato",
            "cherry_tomato",
            "bellpepper",
            "red_onion",
            "jalapeno",
            "bpepper",
            "garlic_powder",
            "paprika"
          ],
          "na": [],
          "sugar": [
            "chicken_breast",
            "bellpepper",
            "egg_white",
            "bpepper",
            "garlic_powder",
            "paprika"
          ]
        }
      },
      "rawGrams": 1496,
      "portion": {
        "value": 1.125925925925926,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "蛋",
        "雞肉"
      ]
    },
    {
      "id": "buffalo-wings",
      "name": "氣炸水牛城雞翅",
      "role": "main",
      "cuisine": "美式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "少油水牛城雞翅",
        "url": "https://www.instagram.com/kn.way___/reel/DeWm1FPPhfn/",
        "changes": "改成四份；標示為偶爾吃的放縱餐"
      },
      "ingredients": [
        {
          "food": "chicken_wing",
          "g": 630,
          "prep": "買帶骨約 900 g（約 33 隻）；完全擦乾",
          "measure": "帶骨約 900 g"
        },
        {
          "food": "baking_powder",
          "g": 7,
          "measure": "1 茶匙半"
        },
        {
          "food": "garlic_powder",
          "g": 2,
          "measure": "3/4 茶匙"
        },
        {
          "food": "paprika",
          "g": 2,
          "measure": "3/4 茶匙"
        },
        {
          "food": "buffalo_sauce",
          "g": 90,
          "measure": "約 6 大匙"
        }
      ],
      "steps": [
        {
          "text": "雞翅用廚房紙徹底擦乾（越乾越脆），撒泡打粉、蒜粉、紅椒粉拌勻。",
          "min": 8,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』200°C 預熱 3 分鐘。",
          "min": 3,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "第一批雞翅平鋪不重疊，氣炸 10 分鐘。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 10 分鐘，取出。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處（避開骨頭）到 74°C"
        },
        {
          "text": "第二批照樣放入，氣炸 10 分鐘。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C"
        },
        {
          "text": "翻面。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 200°C"
        },
        {
          "text": "再氣炸 10 分鐘。",
          "min": 10,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 200°C",
          "check": "探針插最厚處（避開骨頭）到 74°C"
        },
        {
          "text": "趁熱倒入水牛城辣醬拌勻。",
          "min": 2,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "Ninja 180°C 回烤 4 分鐘",
        "note": "⚠️ 雞翅帶皮，脂肪和膽固醇都比雞腿排高，一週最多一次"
      },
      "safety": "雞肉中心 74°C；量的時候探針不要碰到骨頭。",
      "nutrition": {
        "total": {
          "kcal": 1444.15,
          "pro": 112.166,
          "fat": 102.97999999999999,
          "carb": 10.61,
          "fib": 1.182,
          "sat": 30.299999999999997,
          "chol": 636.3,
          "na": 3889.2200000000003,
          "sugar": 0.0
        },
        "serving": {
          "kcal": 361.0375,
          "pro": 28.0415,
          "fat": 25.744999999999997,
          "carb": 2.6525,
          "fib": 0.2955,
          "sat": 7.574999999999999,
          "chol": 159.075,
          "na": 972.3050000000001,
          "sugar": 0.0
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "chicken_wing"
          ],
          "sat": [],
          "chol": [
            "garlic_powder",
            "paprika"
          ],
          "na": [],
          "sugar": [
            "chicken_wing",
            "garlic_powder",
            "paprika"
          ]
        }
      },
      "rawGrams": 731,
      "portion": {
        "value": 1.1666666666666667,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "oats-peanut-banana",
      "name": "花生香蕉隔夜燕麥",
      "role": "breakfast",
      "cuisine": "早餐",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "花生香蕉隔夜燕麥",
        "url": "https://www.instagram.com/kn.way___/reel/DeoobIwPP-X/",
        "changes": "一次做 4 罐；用家裡的蛋白粉"
      },
      "ingredients": [
        {
          "food": "oats",
          "g": 100
        },
        {
          "food": "chia",
          "g": 20
        },
        {
          "food": "protein_powder",
          "g": 80
        },
        {
          "food": "almond_milk",
          "g": 600
        },
        {
          "food": "greek_yogurt",
          "g": 400
        },
        {
          "food": "banana",
          "g": 140,
          "measure": "1 根多"
        },
        {
          "food": "peanut_butter",
          "g": 24,
          "measure": "4 茶匙"
        },
        {
          "food": "salt",
          "g": 1,
          "measure": "一小撮"
        }
      ],
      "steps": [
        {
          "text": "優格、杏仁奶、蛋白粉和調味料攪拌到滑順。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "加入燕麥和奇亞籽；香蕉一半壓成泥拌進去，另一半切片留著吃前放上，花生醬也是吃前加。",
          "min": 3,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "分裝 4 個密封罐，冷藏 8–12 小時（前一晚做好）。",
          "min": 480,
          "device": null,
          "attended": false,
          "advance": true
        }
      ],
      "storage": {
        "bento": false,
        "fridgeDays": 3,
        "reheat": "冷的直接吃，不用加熱",
        "note": "燕麥片出廠前已經蒸壓加熱過，泡軟直接吃不算生食"
      },
      "safety": "冷藏 4°C 以下，3 天內吃完。",
      "nutrition": {
        "total": {
          "kcal": 1343.2000000000003,
          "pro": 128.56,
          "fat": 42.312,
          "carb": 128.976,
          "fib": 18.964000000000002,
          "sat": 5.096,
          "chol": 20.0,
          "na": 1513.44,
          "sugar": 31.14
        },
        "serving": {
          "kcal": 335.80000000000007,
          "pro": 32.14,
          "fat": 10.578,
          "carb": 32.244,
          "fib": 4.7410000000000005,
          "sat": 1.274,
          "chol": 5.0,
          "na": 378.36,
          "sugar": 7.785
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [],
          "sat": [
            "oats"
          ],
          "chol": [
            "oats",
            "banana",
            "peanut_butter"
          ],
          "na": [],
          "sugar": [
            "oats",
            "peanut_butter"
          ]
        }
      },
      "rawGrams": 1365,
      "portion": {
        "value": 1,
        "unit": "罐",
        "basis": "每批分成 4 罐；早餐混合食材未提供掌拳換算"
      },
      "proteins": []
    },
    {
      "id": "oats-blueberry",
      "name": "藍莓肉桂隔夜燕麥",
      "role": "breakfast",
      "cuisine": "早餐",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "藍莓肉桂隔夜燕麥",
        "url": "https://www.instagram.com/kn.way___/reel/DeoobIwPP-X/",
        "changes": "一次做 4 罐；用家裡的蛋白粉"
      },
      "ingredients": [
        {
          "food": "oats",
          "g": 120
        },
        {
          "food": "chia",
          "g": 24
        },
        {
          "food": "protein_powder",
          "g": 60
        },
        {
          "food": "almond_milk",
          "g": 600
        },
        {
          "food": "greek_yogurt",
          "g": 480
        },
        {
          "food": "blueberry",
          "g": 240
        },
        {
          "food": "maple",
          "g": 20,
          "measure": "4 茶匙"
        },
        {
          "food": "cinnamon",
          "g": 2,
          "measure": "1 茶匙"
        }
      ],
      "steps": [
        {
          "text": "優格、杏仁奶、蛋白粉和調味料攪拌到滑順。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "加入燕麥和奇亞籽；藍莓一半稍微壓碎拌進去，另一半吃前放上。",
          "min": 3,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "分裝 4 個密封罐，冷藏 8–12 小時（前一晚做好）。",
          "min": 480,
          "device": null,
          "attended": false,
          "advance": true
        }
      ],
      "storage": {
        "bento": false,
        "fridgeDays": 3,
        "reheat": "冷的直接吃，不用加熱",
        "note": "燕麥片出廠前已經蒸壓加熱過，泡軟直接吃不算生食"
      },
      "safety": "冷藏 4°C 以下，3 天內吃完。",
      "nutrition": {
        "total": {
          "kcal": 1317.02,
          "pro": 118.708,
          "fat": 31.796000000000003,
          "carb": 157.932,
          "fib": 21.148,
          "sat": 2.7119999999999997,
          "chol": 24.0,
          "na": 956.8000000000002,
          "sugar": 38.495999999999995
        },
        "serving": {
          "kcal": 329.255,
          "pro": 29.677,
          "fat": 7.949000000000001,
          "carb": 39.483,
          "fib": 5.287,
          "sat": 0.6779999999999999,
          "chol": 6.0,
          "na": 239.20000000000005,
          "sugar": 9.623999999999999
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "maple"
          ],
          "sat": [
            "oats",
            "maple"
          ],
          "chol": [
            "oats",
            "blueberry",
            "maple"
          ],
          "na": [],
          "sugar": [
            "oats",
            "maple"
          ]
        }
      },
      "rawGrams": 1546,
      "portion": {
        "value": 1,
        "unit": "罐",
        "basis": "每批分成 4 罐；早餐混合食材未提供掌拳換算"
      },
      "proteins": []
    },
    {
      "id": "oats-chocolate",
      "name": "濃巧克力隔夜燕麥",
      "role": "breakfast",
      "cuisine": "早餐",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "濃巧克力隔夜燕麥",
        "url": "https://www.instagram.com/kn.way___/reel/DeoobIwPP-X/",
        "changes": "一次做 4 罐；用家裡的蛋白粉"
      },
      "ingredients": [
        {
          "food": "oats",
          "g": 120
        },
        {
          "food": "chia",
          "g": 20
        },
        {
          "food": "protein_powder",
          "g": 80
        },
        {
          "food": "almond_milk",
          "g": 520
        },
        {
          "food": "greek_yogurt",
          "g": 400
        },
        {
          "food": "cocoa",
          "g": 24,
          "measure": "4 大匙"
        },
        {
          "food": "maple",
          "g": 36,
          "measure": "2 大匙"
        },
        {
          "food": "dark_choc",
          "g": 12,
          "prep": "切碎，吃前撒"
        },
        {
          "food": "salt",
          "g": 1,
          "measure": "一小撮"
        }
      ],
      "steps": [
        {
          "text": "優格、杏仁奶、蛋白粉和調味料攪拌到滑順。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "加入燕麥、奇亞籽和可可粉拌勻（可可粉先用一點杏仁奶調開比較不會結塊）。",
          "min": 3,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "分裝 4 個密封罐，冷藏 8–12 小時（前一晚做好）。",
          "min": 480,
          "device": null,
          "attended": false,
          "advance": true
        }
      ],
      "storage": {
        "bento": false,
        "fridgeDays": 3,
        "reheat": "冷的直接吃，不用加熱",
        "note": "燕麥片出廠前已經蒸壓加熱過，泡軟直接吃不算生食"
      },
      "safety": "冷藏 4°C 以下，3 天內吃完。",
      "nutrition": {
        "total": {
          "kcal": 1404.68,
          "pro": 129.236,
          "fat": 40.879999999999995,
          "carb": 146.41199999999998,
          "fib": 22.372,
          "sat": 9.484,
          "chol": 20.0,
          "na": 1391.8000000000002,
          "sugar": 15.764
        },
        "serving": {
          "kcal": 351.17,
          "pro": 32.309,
          "fat": 10.219999999999999,
          "carb": 36.602999999999994,
          "fib": 5.593,
          "sat": 2.371,
          "chol": 5.0,
          "na": 347.95000000000005,
          "sugar": 3.941
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "maple"
          ],
          "sat": [
            "oats",
            "maple"
          ],
          "chol": [
            "oats",
            "cocoa",
            "maple",
            "dark_choc"
          ],
          "na": [],
          "sugar": [
            "oats",
            "cocoa",
            "maple"
          ]
        }
      },
      "rawGrams": 1213,
      "portion": {
        "value": 1,
        "unit": "罐",
        "basis": "每批分成 4 罐；早餐混合食材未提供掌拳換算"
      },
      "proteins": []
    },
    {
      "id": "ricecooker-curry",
      "name": "電子鍋咖哩雞",
      "role": "main",
      "cuisine": "日式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "懶人高蛋白電子鍋咖哩",
        "url": "https://www.instagram.com/kn.way___/reel/DdoRZXLPVNO/",
        "changes": "拿掉蘑菇，改成最後拌入微波青花菜（原作者留言也這樣加）；雞腿 700 g 改 600 g、咖哩塊等比例減少"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "切一口大小"
        },
        {
          "food": "onion",
          "g": 200,
          "prep": "切塊",
          "measure": "1 顆"
        },
        {
          "food": "carrot",
          "g": 150,
          "prep": "切滾刀塊",
          "measure": "1 根"
        },
        {
          "food": "potato",
          "g": 200,
          "prep": "切塊",
          "measure": "1 顆"
        },
        {
          "food": "curry_roux",
          "g": 80,
          "measure": "約半盒"
        },
        {
          "food": "broccoli",
          "g": 300,
          "prep": "切小朵"
        }
      ],
      "steps": [
        {
          "text": "洋蔥、馬鈴薯、紅蘿蔔、雞腿切好。",
          "min": 12,
          "device": null,
          "attended": true
        },
        {
          "text": "依序把洋蔥、馬鈴薯、紅蘿蔔、雞腿放進電子鍋內鍋，倒 480 ml 水，咖哩塊放最上面，先不要攪拌。",
          "min": 2,
          "device": null,
          "attended": true
        },
        {
          "text": "蓋上，按『煮飯』模式，等它跳起。",
          "min": 50,
          "device": "電子鍋",
          "attended": false,
          "check": "雞肉中心 74°C、紅蘿蔔筷子插得過"
        },
        {
          "text": "青花菜放微波盒加 2 大匙水，盒蓋留縫，600W 微波 4 分鐘。",
          "min": 5,
          "device": "微波爐",
          "attended": false
        },
        {
          "text": "打開電子鍋，攪拌到咖哩塊完全融化、醬汁濃稠，拌入青花菜。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 3 分鐘，中途拌一下",
        "note": "咖哩隔天更好吃；飯另外用電鍋煮（電子鍋在煮咖哩）"
      },
      "safety": "雞肉中心 74°C。",
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1755.0,
          "pro": 141.57999999999998,
          "fat": 82.89999999999999,
          "carb": 117.37,
          "fib": 21.57,
          "sat": 31.200000000000003,
          "chol": 734.4,
          "na": 3899.5,
          "sugar": 33.0
        },
        "serving": {
          "kcal": 438.75,
          "pro": 35.394999999999996,
          "fat": 20.724999999999998,
          "carb": 29.3425,
          "fib": 5.3925,
          "sat": 7.800000000000001,
          "chol": 183.6,
          "na": 974.875,
          "sugar": 8.25
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [],
          "sat": [],
          "chol": [
            "onion",
            "carrot"
          ],
          "na": [],
          "sugar": []
        }
      },
      "rawGrams": 1530,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "cooker-brown-rice",
      "name": "電鍋糙米飯",
      "role": "starch",
      "cuisine": "主食",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "原創",
        "title": "",
        "changes": "電子鍋拿去煮咖哩時，改用電鍋煮飯"
      },
      "ingredients": [
        {
          "food": "brown_rice",
          "g": 240,
          "measure": "1 杯半（量米杯）"
        }
      ],
      "steps": [
        {
          "text": "糙米洗 2 次，放進內鍋加 360 ml 水（米的 1.5 倍）。",
          "min": 5,
          "device": null,
          "attended": true,
          "advance": true
        },
        {
          "text": "泡 1 小時以上（不泡會硬）。早上出門前泡好放冰箱也可以。",
          "min": 60,
          "device": null,
          "attended": false,
          "advance": true
        },
        {
          "text": "放進電鍋，外鍋 2 杯水，跳起後燜 15 分鐘再翻鬆。",
          "min": 60,
          "device": "電鍋",
          "attended": false,
          "check": "米粒裂開、咬起來不硬芯"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "灑一點水，微波 600W 約 1 分半",
        "note": "和電子鍋糙米飯一樣，每份約 140 g（一拳）。"
      },
      "safety": "煮好的飯不要在室溫放超過 2 小時。",
      "nutrition": {
        "total": {
          "kcal": 852.0,
          "pro": 17.76,
          "fat": 5.52,
          "carb": 183.84,
          "fib": 10.8,
          "sat": 1.44,
          "chol": null,
          "na": 7.2,
          "sugar": 1.2
        },
        "serving": {
          "kcal": 213.0,
          "pro": 4.44,
          "fat": 1.38,
          "carb": 45.96,
          "fib": 2.7,
          "sat": 0.36,
          "chol": null,
          "na": 1.8,
          "sugar": 0.3
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [],
          "sat": [],
          "chol": [
            "brown_rice"
          ],
          "na": [],
          "sugar": []
        }
      },
      "rawGrams": 240,
      "portion": {
        "value": 1.0,
        "unit": "拳",
        "basis": "依食譜 240 g 生米約煮成 560 g 熟飯；每拳約 140 g"
      },
      "proteins": []
    },
    {
      "id": "costco-chicken-rice",
      "name": "Costco 烤雞拌飯",
      "role": "main",
      "cuisine": "台式混搭",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "Costco 烤雞這樣吃",
        "url": "https://www.instagram.com/kn.way___/reel/DdghwBdvFwP/",
        "changes": "白飯改糙米飯（另一道菜）；雞皮大部分去掉；麻油和老干媽都用原作者寫的『一半』份量；不加袋子裡的雞汁（很鹹）"
      },
      "ingredients": [
        {
          "food": "rotisserie",
          "g": 560,
          "prep": "拆成雞絲，雞皮只留少量",
          "measure": "約 3/4 隻"
        },
        {
          "food": "soy",
          "g": 15,
          "measure": "1 大匙（薄鹽更好）"
        },
        {
          "food": "chili_crisp",
          "g": 10,
          "measure": "2 茶匙"
        },
        {
          "food": "sesame_oil",
          "g": 6,
          "measure": "半大匙"
        },
        {
          "food": "lemon",
          "g": 10,
          "measure": "1/4 顆擠汁"
        },
        {
          "food": "scallion",
          "g": 40,
          "prep": "切蔥花",
          "measure": "3–4 根"
        }
      ],
      "steps": [
        {
          "text": "烤雞趁溫熱拆肉（冷了比較難拆），雞皮大部分丟掉，剩下的骨架和肉可以冷凍下次用。",
          "min": 15,
          "device": null,
          "attended": true
        },
        {
          "text": "雞絲放微波盒蓋好，600W 微波 2 分鐘熱透（買回來超過 2 小時或冷藏過才需要）。",
          "min": 3,
          "device": "微波爐",
          "attended": false,
          "check": "中心燙手、冒蒸氣"
        },
        {
          "text": "雞絲加醬油、老干媽、麻油、檸檬汁、蔥花拌勻，再和煮好的糙米飯拌在一起（或分開裝）。",
          "min": 3,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分鐘",
        "note": "一隻烤雞大約拆出 700–800 g 肉，這道用 560 g，剩下的可以冷凍"
      },
      "safety": "烤雞買回來 2 小時內要拆好冷藏；復熱到中心 74°C。",
      "nutrition": {
        "total": {
          "kcal": 1445.36,
          "pro": 129.60600000000002,
          "fat": 91.78200000000001,
          "carb": 27.017,
          "fib": 1.3,
          "sat": 25.32,
          "chol": 688.8,
          "na": 1982.05,
          "sugar": 1.3599999999999999
        },
        "serving": {
          "kcal": 361.34,
          "pro": 32.401500000000006,
          "fat": 22.945500000000003,
          "carb": 6.75425,
          "fib": 0.325,
          "sat": 6.33,
          "chol": 172.2,
          "na": 495.5125,
          "sugar": 0.33999999999999997
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [
            "soy"
          ],
          "carb": [],
          "fib": [
            "rotisserie",
            "soy",
            "sesame_oil"
          ],
          "sat": [
            "soy",
            "scallion"
          ],
          "chol": [
            "soy",
            "sesame_oil",
            "lemon",
            "scallion"
          ],
          "na": [
            "sesame_oil"
          ],
          "sugar": [
            "rotisserie",
            "soy",
            "sesame_oil"
          ]
        }
      },
      "rawGrams": 641,
      "portion": {
        "value": 1.037037037037037,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "Costco 烤雞（拆下的肉）"
      ]
    },
    {
      "id": "chili-crisp-chicken",
      "name": "老干媽氣炸雞腿蔬菜",
      "role": "main",
      "cuisine": "台式快炒風",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "15 分鐘氣炸雞腿蔬菜",
        "url": "https://www.instagram.com/kn.way___/reel/DdWSgSjv_3m/",
        "changes": "依女生版份量放大成四份（每份雞腿 150 g）；醬汁蜂蜜和老干媽各減一點；分兩批氣炸"
      },
      "ingredients": [
        {
          "food": "chicken_thigh",
          "g": 600,
          "prep": "切一口大小"
        },
        {
          "food": "broccoli",
          "g": 400,
          "prep": "切小朵"
        },
        {
          "food": "bellpepper",
          "g": 300,
          "prep": "黃甜椒，切塊",
          "measure": "1 顆半"
        },
        {
          "food": "onion",
          "g": 200,
          "prep": "切塊",
          "measure": "1 顆"
        },
        {
          "food": "olive_oil",
          "g": 8,
          "measure": "2 茶匙"
        },
        {
          "food": "soy",
          "g": 34,
          "prep": "做醬",
          "measure": "2 大匙"
        },
        {
          "food": "honey",
          "g": 14,
          "prep": "做醬",
          "measure": "2 茶匙"
        },
        {
          "food": "chili_crisp",
          "g": 14,
          "prep": "做醬",
          "measure": "約 3 茶匙"
        },
        {
          "food": "rice_vinegar",
          "g": 30,
          "prep": "做醬",
          "measure": "2 大匙"
        },
        {
          "food": "garlic",
          "g": 20,
          "prep": "切末，做醬",
          "measure": "4 瓣"
        },
        {
          "food": "ginger",
          "g": 10,
          "prep": "磨泥，做醬",
          "measure": "2 茶匙"
        }
      ],
      "steps": [
        {
          "text": "雞腿和蔬菜切塊，拌橄欖油。醬汁材料加 2 茶匙水拌勻。",
          "min": 15,
          "device": null,
          "attended": true
        },
        {
          "text": "Ninja 選『氣炸』180°C，第一批（一半）放入，氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 180°C"
        },
        {
          "text": "翻拌一次。",
          "min": 1,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 180°C"
        },
        {
          "text": "再氣炸 4 分鐘，淋一半醬汁拌勻。",
          "min": 5,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 180°C"
        },
        {
          "text": "再氣炸 4 分鐘到上色，取出。",
          "min": 4,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 180°C",
          "check": "雞肉中心 74°C"
        },
        {
          "text": "第二批照做：氣炸 8 分鐘。",
          "min": 8,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 180°C"
        },
        {
          "text": "翻拌，再 4 分鐘後淋剩下的醬。",
          "min": 5,
          "device": "Ninja",
          "attended": true,
          "heat": "氣炸 180°C"
        },
        {
          "text": "再氣炸 4 分鐘。",
          "min": 4,
          "device": "Ninja",
          "attended": false,
          "heat": "氣炸 180°C",
          "check": "雞肉中心 74°C"
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 3,
        "reheat": "微波 600W 約 2 分半",
        "note": ""
      },
      "safety": "雞肉中心 74°C。醬裡有蜂蜜，最後幾分鐘才加，太早加會焦。",
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1547.32,
          "pro": 141.226,
          "fat": 73.664,
          "carb": 90.44800000000001,
          "fib": 20.060000000000002,
          "sat": 17.864,
          "chol": 696.0,
          "na": 2366.38,
          "sugar": 18.4
        },
        "serving": {
          "kcal": 386.83,
          "pro": 35.3065,
          "fat": 18.416,
          "carb": 22.612000000000002,
          "fib": 5.015000000000001,
          "sat": 4.466,
          "chol": 174.0,
          "na": 591.595,
          "sugar": 4.6
        },
        "missing": {
          "kcal": [],
          "pro": [
            "rice_vinegar"
          ],
          "fat": [
            "soy",
            "rice_vinegar"
          ],
          "carb": [],
          "fib": [
            "olive_oil",
            "soy",
            "honey",
            "rice_vinegar"
          ],
          "sat": [
            "bellpepper",
            "soy",
            "honey",
            "rice_vinegar",
            "ginger"
          ],
          "chol": [
            "bellpepper",
            "onion",
            "soy",
            "rice_vinegar",
            "garlic",
            "ginger"
          ],
          "na": [
            "olive_oil",
            "honey"
          ],
          "sugar": [
            "bellpepper",
            "olive_oil",
            "soy",
            "honey",
            "rice_vinegar",
            "ginger"
          ]
        }
      },
      "rawGrams": 1630,
      "portion": {
        "value": 1.1111111111111112,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    },
    {
      "id": "thai-chicken-salad",
      "name": "泰式雞肉沙拉",
      "role": "main",
      "cuisine": "泰式",
      "image": null,
      "imageNote": "原作者的照片不轉載；煮好後可上傳自己拍的成品照",
      "source": {
        "type": "Keelan",
        "title": "高份量雞肉沙拉",
        "url": "https://www.instagram.com/kn.way___/reel/DdJWjVrPjw5/",
        "changes": "一大碗改成四份；雞胸用電鍋蒸熟；萊姆汁可用檸檬汁"
      },
      "ingredients": [
        {
          "food": "chicken_breast",
          "g": 540,
          "prep": "煮熟後約 400 g"
        },
        {
          "food": "ginger",
          "g": 15,
          "prep": "5 g 切片蒸雞、10 g 磨泥做醬"
        },
        {
          "food": "cucumber",
          "g": 400,
          "prep": "切絲",
          "measure": "4 條"
        },
        {
          "food": "carrot",
          "g": 200,
          "prep": "刨絲",
          "measure": "1 根多"
        },
        {
          "food": "bellpepper",
          "g": 300,
          "prep": "切絲",
          "measure": "1 顆半"
        },
        {
          "food": "cabbage",
          "g": 400,
          "prep": "切細絲"
        },
        {
          "food": "red_onion",
          "g": 80,
          "prep": "切細絲，泡冰水 10 分鐘",
          "measure": "約半顆"
        },
        {
          "food": "cilantro",
          "g": 30,
          "prep": "切段",
          "measure": "1 把"
        },
        {
          "food": "lemon",
          "g": 60,
          "prep": "做醬（萊姆更香）",
          "measure": "4 大匙"
        },
        {
          "food": "fish_sauce",
          "g": 36,
          "prep": "做醬",
          "measure": "2 大匙"
        },
        {
          "food": "honey",
          "g": 14,
          "prep": "做醬",
          "measure": "2 茶匙"
        },
        {
          "food": "garlic",
          "g": 10,
          "prep": "切末，做醬",
          "measure": "2 瓣"
        },
        {
          "food": "chili",
          "g": 10,
          "prep": "可省略"
        }
      ],
      "steps": [
        {
          "text": "雞胸放盤子，鋪幾片薑。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "放進電鍋，外鍋 1 杯水，跳起後燜 10 分鐘。",
          "min": 30,
          "device": "電鍋",
          "attended": false,
          "check": "切開最厚處全白不透明；探針 74°C"
        },
        {
          "text": "等雞胸蒸的時候：小黃瓜、紅蘿蔔、甜椒、高麗菜切絲，紫洋蔥切絲泡冰水，香菜切段。蔬菜洗乾淨、瀝乾。",
          "min": 20,
          "device": null,
          "attended": true
        },
        {
          "text": "醬汁：萊姆汁、魚露、蜂蜜、蒜末、薑泥、1–2 大匙水、辣椒拌勻。",
          "min": 3,
          "device": null,
          "attended": true
        },
        {
          "text": "雞胸稍涼後用手撕成絲，和蔬菜一起分裝，醬汁另外用小盒裝。",
          "min": 8,
          "device": null,
          "attended": true
        }
      ],
      "storage": {
        "bento": true,
        "fridgeDays": 2,
        "reheat": "冷吃，不用加熱",
        "note": "醬汁吃前才淋，蔬菜才不會出水軟掉；便當要放保冷袋"
      },
      "safety": "雞胸中心 74°C；生菜要洗乾淨、瀝乾；放冰箱冷藏，帶出門要保冷。",
      "hasVeg": true,
      "nutrition": {
        "total": {
          "kcal": 1002.59,
          "pro": 147.48600000000002,
          "fat": 6.971,
          "carb": 99.29800000000002,
          "fib": 21.800000000000004,
          "sat": 1.6260000000000001,
          "chol": 302.4,
          "na": 3641.9800000000005,
          "sugar": 21.970000000000002
        },
        "serving": {
          "kcal": 250.6475,
          "pro": 36.871500000000005,
          "fat": 1.74275,
          "carb": 24.824500000000004,
          "fib": 5.450000000000001,
          "sat": 0.40650000000000003,
          "chol": 75.6,
          "na": 910.4950000000001,
          "sugar": 5.492500000000001
        },
        "missing": {
          "kcal": [],
          "pro": [],
          "fat": [],
          "carb": [],
          "fib": [
            "chicken_breast",
            "fish_sauce",
            "honey"
          ],
          "sat": [
            "ginger",
            "bellpepper",
            "cabbage",
            "cilantro",
            "honey"
          ],
          "chol": [
            "ginger",
            "cucumber",
            "carrot",
            "bellpepper",
            "cabbage",
            "red_onion",
            "cilantro",
            "lemon",
            "garlic",
            "chili"
          ],
          "na": [
            "honey"
          ],
          "sugar": [
            "chicken_breast",
            "ginger",
            "bellpepper",
            "cabbage",
            "cilantro",
            "honey"
          ]
        }
      },
      "rawGrams": 2095,
      "portion": {
        "value": 1.0,
        "unit": "掌",
        "basis": "豆魚蛋肉生重每掌約 135 g（120–150 g 的中間值）"
      },
      "proteins": [
        "雞肉"
      ]
    }
  ],
  "sets": [
    {
      "id": "s1",
      "name": "黑胡椒牛柳套餐",
      "recipes": [
        "black-pepper-beef",
        "roast-eggplant",
        "broccoli",
        "brown-rice"
      ]
    },
    {
      "id": "s2",
      "name": "蒸雞腿配手撕高麗菜",
      "recipes": [
        "steamed-chicken",
        "cabbage",
        "brown-rice"
      ]
    },
    {
      "id": "s3",
      "name": "氣炸雞腿配紅燒冬瓜",
      "recipes": [
        "airfry-chicken",
        "wintermelon",
        "sweet-potato"
      ]
    },
    {
      "id": "s4",
      "name": "麻婆豆腐配青花菜",
      "recipes": [
        "mapo-tofu",
        "broccoli",
        "brown-rice"
      ]
    },
    {
      "id": "s5",
      "name": "番茄燉牛肉一鍋到底",
      "recipes": [
        "tomato-beef",
        "cabbage"
      ]
    },
    {
      "id": "s6",
      "name": "清蒸鱸魚配紅燒冬瓜",
      "recipes": [
        "steamed-seabass",
        "wintermelon",
        "brown-rice"
      ]
    },
    {
      "id": "s7",
      "name": "薑燒豬配烤茄子",
      "recipes": [
        "ginger-pork",
        "roast-eggplant",
        "brown-rice"
      ]
    },
    {
      "id": "s8",
      "name": "氣炸鯛魚配櫛瓜炒蛋",
      "recipes": [
        "airfry-tilapia",
        "zucchini-egg",
        "sweet-potato"
      ]
    },
    {
      "id": "s9",
      "name": "是拉差檸檬雞腿配青花菜",
      "recipes": [
        "sriracha-chicken",
        "broccoli",
        "brown-rice"
      ]
    },
    {
      "id": "s10",
      "name": "蒜香優格雞腿配烤茄子",
      "recipes": [
        "garlic-yogurt-chicken",
        "roast-eggplant",
        "brown-rice"
      ]
    },
    {
      "id": "s11",
      "name": "希臘檸檬雞腿配高麗菜",
      "recipes": [
        "greek-lemon-chicken",
        "cabbage",
        "sweet-potato"
      ]
    },
    {
      "id": "s12",
      "name": "氣炸鹽酥雞配高麗菜",
      "recipes": [
        "airfry-popcorn-chicken",
        "cabbage",
        "brown-rice"
      ]
    },
    {
      "id": "s13",
      "name": "雞腿彩蔬味噌優格",
      "recipes": [
        "miso-yogurt-chicken",
        "brown-rice"
      ]
    },
    {
      "id": "s14",
      "name": "Peri-Peri 烤雞配青花菜",
      "recipes": [
        "peri-peri-chicken",
        "broccoli",
        "sweet-potato"
      ]
    },
    {
      "id": "s15",
      "name": "希臘檸檬雞腿烤盤一盤搞定",
      "recipes": [
        "lemon-chicken-potato-tray"
      ]
    },
    {
      "id": "s16",
      "name": "鮭魚蔬菜盤配糙米",
      "recipes": [
        "salmon-tray",
        "brown-rice"
      ]
    },
    {
      "id": "s17",
      "name": "地瓜烘蛋一盤搞定",
      "recipes": [
        "sweet-potato-egg-bake"
      ]
    },
    {
      "id": "s18",
      "name": "薑燒豬配氣炸馬鈴薯",
      "recipes": [
        "ginger-pork",
        "broccoli",
        "airfry-potato"
      ]
    },
    {
      "id": "s19",
      "name": "電子鍋咖哩雞配電鍋糙米",
      "recipes": [
        "ricecooker-curry",
        "cooker-brown-rice"
      ]
    },
    {
      "id": "s20",
      "name": "Costco 烤雞拌飯配青花菜",
      "recipes": [
        "costco-chicken-rice",
        "broccoli",
        "brown-rice"
      ]
    },
    {
      "id": "s21",
      "name": "老干媽氣炸雞腿蔬菜",
      "recipes": [
        "chili-crisp-chicken",
        "brown-rice"
      ]
    },
    {
      "id": "s22",
      "name": "泰式雞肉沙拉配氣炸馬鈴薯",
      "recipes": [
        "thai-chicken-salad",
        "airfry-potato"
      ]
    }
  ],
  "rules": {
    "forbidden": [
      "生食",
      "內臟",
      "香菇",
      "蘑菇"
    ],
    "forbiddenFoodsNote": "所有食材都已人工檢查：沒有香菇、蘑菇或任何菇類，沒有內臟。『不吃生食』指生肉、生魚、生蛋：肉蛋都煮到全熟；生菜沙拉與生蒜可以吃（2026-11-01 確認）。",
    "palmFist": {
      "_說明": "掌／拳只是約略換算，參考國健署『我的餐盤』：豆魚蛋肉一掌心、飯菜用拳頭估。",
      "protein": "1 掌心 ≈ 熟肉／魚／豆腐 約 90–120 g（生重約 120–150 g）",
      "veg": "1 拳 ≈ 煮熟蔬菜 約 80–100 g",
      "starch": "1 拳 ≈ 熟飯 約 130–150 g、地瓜約 150 g、馬鈴薯塊約 180 g"
    },
    "safety": [
      "肉類中心溫度：雞肉 74°C、絞肉 71°C、豬牛整塊或片 63°C（靜置 3 分鐘）、魚 63°C。",
      "煮好 2 小時內要分裝冷藏：分成 4 個淺便當盒，打開蓋子放涼 15–20 分鐘、不燙手就蓋上放冰箱。",
      "冷藏便當隔天吃最好；本網站每道菜都標了最多可放幾天。",
      "復熱要整盒熱透、中心冒煙（74°C），中途拌一下讓溫度平均。",
      "帶便當出門：放保冷袋＋保冷劑，到了就放冰箱，吃前再微波。"
    ]
  },
  "foods": {
    "beef_round": {
      "name": "牛後腿肉",
      "tfda": "I0108101",
      "shop": "肉品",
      "nutrition100g": {
        "kcal": 122.0,
        "pro": 19.4,
        "fat": 4.3,
        "carb": 3.7,
        "fib": null,
        "sat": 2.2,
        "chol": 59.0,
        "na": 58.0,
        "sugar": 0.0
      },
      "sourceName": "牛後腿肉"
    },
    "beef_shank": {
      "name": "牛腱子心",
      "tfda": "I0108301",
      "shop": "肉品",
      "nutrition100g": {
        "kcal": 139.0,
        "pro": 19.8,
        "fat": 6.0,
        "carb": 0.0,
        "fib": null,
        "sat": 2.6,
        "chol": 76.0,
        "na": 79.0,
        "sugar": null
      },
      "sourceName": "牛後腿腱子心"
    },
    "pork_tenderloin": {
      "name": "豬小里肌（腰內肉）",
      "tfda": "I0306101",
      "shop": "肉品",
      "nutrition100g": {
        "kcal": 139.0,
        "pro": 21.1,
        "fat": 5.4,
        "carb": 0.0,
        "fib": null,
        "sat": 2.2,
        "chol": 68.0,
        "na": 46.0,
        "sugar": 0.0
      },
      "sourceName": "豬小里肌"
    },
    "pork_lean_mince": {
      "name": "豬後腿瘦肉絞肉",
      "tfda": "I0302301",
      "shop": "肉品",
      "nutrition100g": {
        "kcal": 120.0,
        "pro": 21.1,
        "fat": 3.4,
        "carb": 0.3,
        "fib": null,
        "sat": 1.2,
        "chol": 57.0,
        "na": 41.0,
        "sugar": 0.1
      },
      "sourceName": "豬後腿瘦肉"
    },
    "chicken_thigh": {
      "name": "去皮去骨雞腿排",
      "tfda": "I0404501",
      "shop": "肉品",
      "nutrition100g": {
        "kcal": 165.0,
        "pro": 19.8,
        "fat": 8.9,
        "carb": 0.0,
        "fib": 0.0,
        "sat": 2.4,
        "chol": 116.0,
        "na": 68.0,
        "sugar": 0.0
      },
      "sourceName": "去皮去骨雞腿(肉雞)"
    },
    "tilapia": {
      "name": "台灣鯛魚片",
      "tfda": "J0412002",
      "shop": "海鮮",
      "nutrition100g": {
        "kcal": 110.0,
        "pro": 18.2,
        "fat": 3.6,
        "carb": 2.5,
        "fib": null,
        "sat": 1.0,
        "chol": 38.0,
        "na": 46.0,
        "sugar": null
      },
      "sourceName": "台灣鯛魚片(生)"
    },
    "seabass": {
      "name": "金目鱸魚片（去皮）",
      "tfda": "J0404201",
      "shop": "海鮮",
      "note": "金目鱸（尖吻鱸）以資料庫「尖嘴鱸(去皮)」數值計算",
      "nutrition100g": {
        "kcal": 98.0,
        "pro": 20.6,
        "fat": 1.2,
        "carb": 0.1,
        "fib": null,
        "sat": 0.3,
        "chol": 58.0,
        "na": 48.0,
        "sugar": null
      },
      "sourceName": "尖嘴鱸(去皮)"
    },
    "tofu": {
      "name": "板豆腐（傳統豆腐）",
      "tfda": "R4700902",
      "shop": "豆製品・蛋",
      "nutrition100g": {
        "kcal": 93.0,
        "pro": 9.6,
        "fat": 5.5,
        "carb": 1.9,
        "fib": 1.6,
        "sat": 1.0,
        "chol": 0.0,
        "na": 7.0,
        "sugar": 0.0
      },
      "sourceName": "傳統豆腐(2022年取樣)"
    },
    "egg": {
      "name": "雞蛋",
      "tfda": "K0100101",
      "shop": "豆製品・蛋",
      "unit": "顆",
      "unitG": 55,
      "nutrition100g": {
        "kcal": 139.0,
        "pro": 12.9,
        "fat": 9.2,
        "carb": 1.3,
        "fib": 0.0,
        "sat": 3.2,
        "chol": 402.0,
        "na": 129.0,
        "sugar": 0.1
      },
      "sourceName": "雞蛋(白殼)"
    },
    "cabbage": {
      "name": "高麗菜",
      "tfda": "E3000103",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 22.0,
        "pro": 1.4,
        "fat": 0.2,
        "carb": 4.9,
        "fib": 1.3,
        "sat": null,
        "chol": null,
        "na": 11.0,
        "sugar": null
      },
      "sourceName": "甘藍(圓球形)"
    },
    "zucchini": {
      "name": "櫛瓜",
      "tfda": "E7100201",
      "shop": "蔬菜",
      "unit": "條",
      "unitG": 300,
      "nutrition100g": {
        "kcal": 11.0,
        "pro": 2.2,
        "fat": 0.0,
        "carb": 1.8,
        "fib": 0.9,
        "sat": null,
        "chol": null,
        "na": 0.0,
        "sugar": null
      },
      "sourceName": "綠櫛瓜"
    },
    "tomato": {
      "name": "牛番茄",
      "tfda": "E7400102",
      "shop": "蔬菜",
      "unit": "顆",
      "unitG": 150,
      "nutrition100g": {
        "kcal": 18.0,
        "pro": 0.9,
        "fat": 0.0,
        "carb": 4.4,
        "fib": 0.8,
        "sat": null,
        "chol": null,
        "na": 2.0,
        "sugar": null
      },
      "sourceName": "紅番茄"
    },
    "eggplant": {
      "name": "長茄子",
      "tfda": "E7300101",
      "shop": "蔬菜",
      "unit": "條",
      "unitG": 150,
      "nutrition100g": {
        "kcal": 20.0,
        "pro": 1.2,
        "fat": 0.2,
        "carb": 5.3,
        "fib": 2.7,
        "sat": 0.1,
        "chol": null,
        "na": 2.0,
        "sugar": 2.3
      },
      "sourceName": "長茄子"
    },
    "broccoli": {
      "name": "青花菜（綠花椰）",
      "tfda": "E5800402",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 33.0,
        "pro": 3.4,
        "fat": 0.4,
        "carb": 6.5,
        "fib": 2.8,
        "sat": 0.2,
        "chol": 0.0,
        "na": 13.0,
        "sugar": 1.8
      },
      "sourceName": "青花菜(2021年取樣)"
    },
    "wintermelon": {
      "name": "冬瓜",
      "tfda": "E6200103",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 19.0,
        "pro": 0.4,
        "fat": 0.0,
        "carb": 5.1,
        "fib": 1.2,
        "sat": 0.0,
        "chol": 0.0,
        "na": 0.0,
        "sugar": 1.5
      },
      "sourceName": "冬瓜(2022年取樣)"
    },
    "potato": {
      "name": "馬鈴薯",
      "tfda": "B0700202",
      "shop": "蔬菜",
      "unit": "顆",
      "unitG": 200,
      "nutrition100g": {
        "kcal": 68.0,
        "pro": 2.3,
        "fat": 0.0,
        "carb": 14.9,
        "fib": 1.2,
        "sat": 0.0,
        "chol": 0.0,
        "na": 2.0,
        "sugar": 0.4
      },
      "sourceName": "馬鈴薯(2022年取樣)"
    },
    "onion": {
      "name": "洋蔥",
      "tfda": "E2400301",
      "shop": "蔬菜",
      "unit": "顆",
      "unitG": 200,
      "nutrition100g": {
        "kcal": 39.0,
        "pro": 1.0,
        "fat": 0.2,
        "carb": 9.5,
        "fib": 1.4,
        "sat": 0.1,
        "chol": null,
        "na": 2.0,
        "sugar": 5.5
      },
      "sourceName": "黃洋蔥"
    },
    "carrot": {
      "name": "紅蘿蔔",
      "tfda": "E0200101",
      "shop": "蔬菜",
      "unit": "根",
      "unitG": 150,
      "nutrition100g": {
        "kcal": 32.0,
        "pro": 1.0,
        "fat": 0.2,
        "carb": 8.5,
        "fib": 2.7,
        "sat": 0.0,
        "chol": null,
        "na": 67.0,
        "sugar": 5.2
      },
      "sourceName": "胡蘿蔔"
    },
    "bellpepper": {
      "name": "紅甜椒",
      "tfda": "E7500201",
      "shop": "蔬菜",
      "unit": "顆",
      "unitG": 200,
      "nutrition100g": {
        "kcal": 30.0,
        "pro": 0.8,
        "fat": 0.5,
        "carb": 7.1,
        "fib": 1.6,
        "sat": null,
        "chol": null,
        "na": 1.0,
        "sugar": null
      },
      "sourceName": "甜椒(紅皮)"
    },
    "sweetpotato": {
      "name": "黃肉地瓜",
      "tfda": "B0400601",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 115.0,
        "pro": 1.3,
        "fat": 0.2,
        "carb": 27.8,
        "fib": 2.5,
        "sat": 0.1,
        "chol": null,
        "na": 51.0,
        "sugar": 4.8
      },
      "sourceName": "黃肉甘藷"
    },
    "garlic": {
      "name": "蒜頭",
      "tfda": "E2100101",
      "shop": "蔬菜",
      "unit": "瓣",
      "unitG": 5,
      "nutrition100g": {
        "kcal": 115.0,
        "pro": 6.7,
        "fat": 0.2,
        "carb": 26.4,
        "fib": 4.2,
        "sat": 0.2,
        "chol": null,
        "na": 4.0,
        "sugar": 1.0
      },
      "sourceName": "大蒜"
    },
    "ginger": {
      "name": "薑",
      "tfda": "E1900101",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 19.0,
        "pro": 0.0,
        "fat": 0.3,
        "carb": 4.8,
        "fib": 1.4,
        "sat": null,
        "chol": null,
        "na": 12.0,
        "sugar": null
      },
      "sourceName": "嫩薑"
    },
    "scallion": {
      "name": "青蔥",
      "tfda": "E2300103",
      "shop": "蔬菜",
      "note": "資料庫無台灣青蔥，以日本甜蔥數值代替",
      "nutrition100g": {
        "kcal": 28.0,
        "pro": 1.0,
        "fat": 0.1,
        "carb": 7.6,
        "fib": 2.7,
        "sat": null,
        "chol": null,
        "na": 1.0,
        "sugar": 3.1
      },
      "sourceName": "日本甜蔥"
    },
    "chili": {
      "name": "紅辣椒（可省略）",
      "tfda": "E7500601",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 35.0,
        "pro": 2.4,
        "fat": 0.7,
        "carb": 9.3,
        "fib": 6.9,
        "sat": 0.3,
        "chol": null,
        "na": 14.0,
        "sugar": 3.1
      },
      "sourceName": "長辣椒(紅皮)"
    },
    "brown_rice": {
      "name": "糙米",
      "tfda": "A05013",
      "shop": "米・乾貨",
      "nutrition100g": {
        "kcal": 355.0,
        "pro": 7.4,
        "fat": 2.3,
        "carb": 76.6,
        "fib": 4.5,
        "sat": 0.6,
        "chol": null,
        "na": 3.0,
        "sugar": 0.5
      },
      "sourceName": "糙稉米平均值"
    },
    "oil": {
      "name": "芥花油",
      "tfda": "M1800101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 883.0,
        "pro": 0.0,
        "fat": 99.9,
        "carb": 0.0,
        "fib": null,
        "sat": 9.7,
        "chol": null,
        "na": 2.0,
        "sugar": null
      },
      "sourceName": "芥花油"
    },
    "olive_oil": {
      "name": "橄欖油",
      "tfda": "M2700101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 884.0,
        "pro": 0.0,
        "fat": 100.0,
        "carb": 0.0,
        "fib": null,
        "sat": 16.3,
        "chol": 0.0,
        "na": null,
        "sugar": null
      },
      "sourceName": "橄欖油"
    },
    "sesame_oil": {
      "name": "黑麻油",
      "tfda": "M1500201",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 881.0,
        "pro": 0.1,
        "fat": 99.7,
        "carb": 0.2,
        "fib": null,
        "sat": 16.5,
        "chol": null,
        "na": null,
        "sugar": null
      },
      "sourceName": "黑芝麻油"
    },
    "soy": {
      "name": "醬油",
      "tfda": "P0700101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 90.0,
        "pro": 7.8,
        "fat": null,
        "carb": 14.7,
        "fib": null,
        "sat": null,
        "chol": null,
        "na": 4997.0,
        "sugar": null
      },
      "sourceName": "醬油"
    },
    "oyster": {
      "name": "蠔油",
      "tfda": "P0800301",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 156.0,
        "pro": 6.5,
        "fat": 0.1,
        "carb": 32.2,
        "fib": 0.1,
        "sat": null,
        "chol": 0.0,
        "na": 5847.0,
        "sugar": null
      },
      "sourceName": "蠔油"
    },
    "doubanjiang": {
      "name": "辣豆瓣醬",
      "tfda": "P1004201",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 90.0,
        "pro": 4.5,
        "fat": 3.3,
        "carb": 13.1,
        "fib": 5.2,
        "sat": 0.5,
        "chol": null,
        "na": 4380.0,
        "sugar": null
      },
      "sourceName": "辣豆瓣醬"
    },
    "mirin": {
      "name": "味醂",
      "tfda": "P0800101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 220.0,
        "pro": 0.5,
        "fat": 0.0,
        "carb": 54.5,
        "fib": 0.0,
        "sat": 0.0,
        "chol": null,
        "na": 108.0,
        "sugar": 50.5
      },
      "sourceName": "味醂"
    },
    "starch": {
      "name": "玉米粉（太白粉也可）",
      "tfda": "A0420101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 368.0,
        "pro": 0.3,
        "fat": 0.4,
        "carb": 88.3,
        "fib": 0.2,
        "sat": 0.1,
        "chol": null,
        "na": 14.0,
        "sugar": 0.0
      },
      "sourceName": "玉米粉"
    },
    "bpepper": {
      "name": "黑胡椒粉",
      "tfda": "P0101301",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 325.0,
        "pro": 11.6,
        "fat": 6.7,
        "carb": 67.7,
        "fib": 22.5,
        "sat": 4.1,
        "chol": null,
        "na": 7.0,
        "sugar": null
      },
      "sourceName": "黑胡椒粉"
    },
    "wpepper": {
      "name": "白胡椒粉",
      "tfda": "P0101101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 288.0,
        "pro": 3.7,
        "fat": 1.1,
        "carb": 78.8,
        "fib": 26.3,
        "sat": 0.2,
        "chol": null,
        "na": 120.0,
        "sugar": null
      },
      "sourceName": "白胡椒粉"
    },
    "parsley": {
      "name": "乾燥洋香菜片",
      "tfda": "P0100901",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 265.0,
        "pro": 24.4,
        "fat": 7.5,
        "carb": 47.7,
        "fib": 25.0,
        "sat": 1.5,
        "chol": null,
        "na": 28.0,
        "sugar": 10.2
      },
      "sourceName": "洋香菜片"
    },
    "sugar": {
      "name": "冰糖或砂糖",
      "tfda": "N0100201",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 387.0,
        "pro": null,
        "fat": null,
        "carb": 99.9,
        "fib": null,
        "sat": null,
        "chol": null,
        "na": 1.0,
        "sugar": 99.9
      },
      "sourceName": "冰糖"
    },
    "vinegar": {
      "name": "烏醋",
      "tfda": "P0600701",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 37.0,
        "pro": 0.5,
        "fat": 0.0,
        "carb": 8.7,
        "fib": 0.0,
        "sat": null,
        "chol": null,
        "na": 1571.0,
        "sugar": null
      },
      "sourceName": "烏醋"
    },
    "lemon": {
      "name": "檸檬汁",
      "tfda": "D38003",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 30.0,
        "pro": 0.5,
        "fat": 0.4,
        "carb": 7.0,
        "fib": 0.2,
        "sat": 0.1,
        "chol": null,
        "na": 1.0,
        "sugar": 1.2
      },
      "sourceName": "檸檬汁平均值"
    },
    "salt": {
      "name": "鹽",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 0,
        "pro": 0,
        "fat": 0,
        "carb": 0,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 39300,
        "sugar": 0
      },
      "note": "資料庫無一般食鹽，鈉以氯化鈉理論值 39.3% 計",
      "nutrition100g": {
        "kcal": 0,
        "pro": 0,
        "fat": 0,
        "carb": 0,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 39300,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "ricewine": {
      "name": "米酒",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 110,
        "pro": 0,
        "fat": 0,
        "carb": 0,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 0,
        "sugar": 0
      },
      "note": "資料庫無料理米酒，以酒精度 19.5% 估算熱量；加熱後大部分酒精會揮發，實際更低",
      "nutrition100g": {
        "kcal": 110,
        "pro": 0,
        "fat": 0,
        "carb": 0,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 0,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "chicken_breast": {
      "name": "雞胸肉",
      "tfda": "I0402102",
      "shop": "肉品",
      "note": "資料庫的「里肌肉(肉雞)」就是雞胸部位（去皮），以此計算",
      "nutrition100g": {
        "kcal": 106.0,
        "pro": 23.7,
        "fat": 0.6,
        "carb": 0.0,
        "fib": null,
        "sat": 0.2,
        "chol": 56.0,
        "na": 44.0,
        "sugar": null
      },
      "sourceName": "里肌肉(肉雞)"
    },
    "chicken_wing": {
      "name": "雞中翅",
      "tfda": "I0406202",
      "shop": "肉品",
      "note": "資料庫無單獨雞中翅，以「三節翅(肉雞)」去骨含皮數值代替；克數為去骨可食重，帶骨購買量約為 1.4 倍",
      "nutrition100g": {
        "kcal": 222.0,
        "pro": 17.7,
        "fat": 16.3,
        "carb": 0.0,
        "fib": null,
        "sat": 4.8,
        "chol": 101.0,
        "na": 85.0,
        "sugar": null
      },
      "sourceName": "三節翅(肉雞)"
    },
    "salmon": {
      "name": "鮭魚（去皮切片）",
      "tfda": "J0402402",
      "shop": "海鮮",
      "nutrition100g": {
        "kcal": 174.0,
        "pro": 20.7,
        "fat": 9.5,
        "carb": 0.0,
        "fib": null,
        "sat": 2.6,
        "chol": 60.0,
        "na": 39.0,
        "sugar": 0.0
      },
      "sourceName": "大西洋鮭魚切片(中段)"
    },
    "egg_white": {
      "name": "蛋白",
      "tfda": "K0106102",
      "shop": "豆製品・蛋",
      "unit": "顆份",
      "unitG": 33,
      "nutrition100g": {
        "kcal": 52.0,
        "pro": 11.6,
        "fat": 0.2,
        "carb": 1.2,
        "fib": null,
        "sat": null,
        "chol": 0.0,
        "na": 213.0,
        "sugar": null
      },
      "sourceName": "雞蛋白(黃殼)"
    },
    "red_onion": {
      "name": "紫洋蔥",
      "tfda": "E2400201",
      "shop": "蔬菜",
      "unit": "顆",
      "unitG": 200,
      "nutrition100g": {
        "kcal": 29.0,
        "pro": 0.9,
        "fat": 0.1,
        "carb": 7.3,
        "fib": 1.5,
        "sat": 0.0,
        "chol": null,
        "na": 4.0,
        "sugar": 4.3
      },
      "sourceName": "紫洋蔥"
    },
    "cherry_tomato": {
      "name": "小番茄",
      "tfda": "E7400401",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 31.0,
        "pro": 1.1,
        "fat": 0.5,
        "carb": 6.9,
        "fib": 1.5,
        "sat": 0.3,
        "chol": null,
        "na": 10.0,
        "sugar": 5.1
      },
      "sourceName": "聖女小番茄"
    },
    "basil": {
      "name": "九層塔",
      "tfda": "E2700101",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 21.0,
        "pro": 2.9,
        "fat": 0.3,
        "carb": 4.4,
        "fib": 3.4,
        "sat": 0.1,
        "chol": null,
        "na": 2.0,
        "sugar": 0.1
      },
      "sourceName": "九層塔"
    },
    "banana": {
      "name": "香蕉",
      "tfda": "D0800401",
      "shop": "水果",
      "unit": "根",
      "unitG": 120,
      "nutrition100g": {
        "kcal": 81.0,
        "pro": 1.4,
        "fat": 0.3,
        "carb": 21.3,
        "fib": 1.7,
        "sat": 0.1,
        "chol": null,
        "na": 0.0,
        "sugar": 11.9
      },
      "sourceName": "北蕉(3天)"
    },
    "blueberry": {
      "name": "藍莓",
      "tfda": "D5000101",
      "shop": "水果",
      "nutrition100g": {
        "kcal": 51.0,
        "pro": 0.5,
        "fat": 0.3,
        "carb": 13.6,
        "fib": 1.8,
        "sat": 0.1,
        "chol": null,
        "na": 0.0,
        "sugar": 9.1
      },
      "sourceName": "藍莓(台灣)"
    },
    "cheese": {
      "name": "刨絲起司",
      "tfda": "L0500301",
      "shop": "乳品",
      "nutrition100g": {
        "kcal": 323.0,
        "pro": 25.1,
        "fat": 22.6,
        "carb": 4.4,
        "fib": null,
        "sat": 15.8,
        "chol": 76.0,
        "na": 548.0,
        "sugar": 0.4
      },
      "sourceName": "刨絲乾酪"
    },
    "greek_yogurt": {
      "name": "無糖無脂希臘優格",
      "shop": "乳品",
      "custom": {
        "kcal": 54,
        "pro": 10.3,
        "fat": 0.2,
        "carb": 3.6,
        "fib": 0,
        "sat": 0.1,
        "chol": 5,
        "na": 36,
        "sugar": 3.2
      },
      "note": "資料庫無希臘優格，依常見市售無脂希臘優格標示估算",
      "nutrition100g": {
        "kcal": 54,
        "pro": 10.3,
        "fat": 0.2,
        "carb": 3.6,
        "fib": 0,
        "sat": 0.1,
        "chol": 5,
        "na": 36,
        "sugar": 3.2
      },
      "sourceName": "理論值估算"
    },
    "almond_milk": {
      "name": "無糖杏仁奶",
      "shop": "乳品",
      "custom": {
        "kcal": 15,
        "pro": 0.5,
        "fat": 1.2,
        "carb": 0.5,
        "fib": 0.3,
        "sat": 0.1,
        "chol": 0,
        "na": 70,
        "sugar": 0
      },
      "note": "資料庫無杏仁奶，依常見市售無糖杏仁奶標示估算",
      "nutrition100g": {
        "kcal": 15,
        "pro": 0.5,
        "fat": 1.2,
        "carb": 0.5,
        "fib": 0.3,
        "sat": 0.1,
        "chol": 0,
        "na": 70,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "oats": {
      "name": "燕麥片",
      "tfda": "A0810101",
      "shop": "米・乾貨",
      "pantry": true,
      "nutrition100g": {
        "kcal": 383.0,
        "pro": 12.3,
        "fat": 9.7,
        "carb": 64.1,
        "fib": 4.7,
        "sat": null,
        "chol": null,
        "na": 3.0,
        "sugar": null
      },
      "sourceName": "燕麥片"
    },
    "chia": {
      "name": "奇亞籽",
      "tfda": "C1505101",
      "shop": "米・乾貨",
      "pantry": true,
      "nutrition100g": {
        "kcal": 422.0,
        "pro": 21.7,
        "fat": 31.8,
        "carb": 34.8,
        "fib": 29.7,
        "sat": 3.3,
        "chol": 0.0,
        "na": 0.0,
        "sugar": 0.4
      },
      "sourceName": "奇亞子"
    },
    "protein_powder": {
      "name": "蛋白粉（家裡那罐）",
      "shop": "米・乾貨",
      "pantry": true,
      "custom": {
        "kcal": 380,
        "pro": 75,
        "fat": 6,
        "carb": 8,
        "fib": 2,
        "sat": 1,
        "chol": 0,
        "na": 600,
        "sugar": 2
      },
      "note": "每家蛋白粉差很多，此為常見植物蛋白粉估算值；請依你那罐的營養標示修改",
      "nutrition100g": {
        "kcal": 380,
        "pro": 75,
        "fat": 6,
        "carb": 8,
        "fib": 2,
        "sat": 1,
        "chol": 0,
        "na": 600,
        "sugar": 2
      },
      "sourceName": "理論值估算"
    },
    "peanut_butter": {
      "name": "無糖花生醬",
      "tfda": "P1300901",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 635.0,
        "pro": 24.0,
        "fat": 54.3,
        "carb": 17.9,
        "fib": 10.6,
        "sat": 10.4,
        "chol": null,
        "na": 306.0,
        "sugar": null
      },
      "sourceName": "花生醬"
    },
    "cocoa": {
      "name": "無糖可可粉",
      "tfda": "O0901701",
      "shop": "米・乾貨",
      "pantry": true,
      "nutrition100g": {
        "kcal": 415.0,
        "pro": 20.8,
        "fat": 22.8,
        "carb": 43.8,
        "fib": 24.7,
        "sat": 14.7,
        "chol": null,
        "na": 26.0,
        "sugar": null
      },
      "sourceName": "可可粉"
    },
    "dark_choc": {
      "name": "黑巧克力（70% 以上）",
      "tfda": "Q6100601",
      "shop": "米・乾貨",
      "pantry": true,
      "note": "以 85% 黑巧克力數值代替",
      "nutrition100g": {
        "kcal": 585.0,
        "pro": 10.9,
        "fat": 46.1,
        "carb": 38.7,
        "fib": 14.2,
        "sat": 29.8,
        "chol": null,
        "na": 5.0,
        "sugar": 10.7
      },
      "sourceName": "黑巧克力(85%)"
    },
    "maple": {
      "name": "楓糖漿",
      "tfda": "N0600101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 258.0,
        "pro": 0.1,
        "fat": 0.1,
        "carb": 66.6,
        "fib": null,
        "sat": null,
        "chol": null,
        "na": 1.0,
        "sugar": null
      },
      "sourceName": "楓糖"
    },
    "honey": {
      "name": "蜂蜜",
      "tfda": "N0700101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 315.0,
        "pro": 0.1,
        "fat": 0.1,
        "carb": 81.5,
        "fib": null,
        "sat": null,
        "chol": 0.0,
        "na": null,
        "sugar": null
      },
      "sourceName": "蜂蜜(冬蜜)"
    },
    "miso": {
      "name": "味噌",
      "tfda": "P1200101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 206.0,
        "pro": 10.6,
        "fat": 4.5,
        "carb": 33.1,
        "fib": 4.5,
        "sat": 1.0,
        "chol": null,
        "na": 4153.0,
        "sugar": 18.0
      },
      "sourceName": "味噌"
    },
    "sriracha": {
      "name": "是拉差辣椒醬",
      "tfda": "P1003201",
      "shop": "調味料",
      "pantry": true,
      "note": "資料庫無是拉差，以一般辣椒醬數值代替",
      "nutrition100g": {
        "kcal": 73.0,
        "pro": 2.6,
        "fat": 2.9,
        "carb": 11.5,
        "fib": 4.7,
        "sat": 0.5,
        "chol": null,
        "na": 4948.0,
        "sugar": null
      },
      "sourceName": "辣椒醬"
    },
    "buffalo_sauce": {
      "name": "Frank's RedHot 水牛城辣醬",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 33,
        "pro": 0,
        "fat": 0,
        "carb": 6.7,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 2900,
        "sugar": 0
      },
      "note": "資料庫無此醬，熱量依原作者標示（30 ml 約 10 kcal），鈉依常見標示估算",
      "nutrition100g": {
        "kcal": 33,
        "pro": 0,
        "fat": 0,
        "carb": 6.7,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 2900,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "baking_powder": {
      "name": "無鋁泡打粉",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 53,
        "pro": 0,
        "fat": 0,
        "carb": 28,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 10600,
        "sugar": 0
      },
      "note": "資料庫無泡打粉，鈉依一般泡打粉估算",
      "nutrition100g": {
        "kcal": 53,
        "pro": 0,
        "fat": 0,
        "carb": 28,
        "fib": 0,
        "sat": 0,
        "chol": 0,
        "na": 10600,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "paprika": {
      "name": "紅椒粉（煙燻）",
      "tfda": "P0101801",
      "shop": "調味料",
      "pantry": true,
      "note": "資料庫無紅椒粉，以辣椒粉數值代替",
      "nutrition100g": {
        "kcal": 307.0,
        "pro": 14.7,
        "fat": 14.1,
        "carb": 59.1,
        "fib": 42.5,
        "sat": 2.9,
        "chol": null,
        "na": 12.0,
        "sugar": null
      },
      "sourceName": "辣椒粉"
    },
    "cayenne": {
      "name": "卡宴辣椒粉",
      "tfda": "P0101801",
      "shop": "調味料",
      "pantry": true,
      "note": "以辣椒粉數值代替",
      "nutrition100g": {
        "kcal": 307.0,
        "pro": 14.7,
        "fat": 14.1,
        "carb": 59.1,
        "fib": 42.5,
        "sat": 2.9,
        "chol": null,
        "na": 12.0,
        "sugar": null
      },
      "sourceName": "辣椒粉"
    },
    "garlic_powder": {
      "name": "蒜粉",
      "tfda": "P0101701",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 300.0,
        "pro": 18.1,
        "fat": 0.4,
        "carb": 71.9,
        "fib": 16.6,
        "sat": 0.1,
        "chol": null,
        "na": 74.0,
        "sugar": null
      },
      "sourceName": "蒜粉"
    },
    "onion_powder": {
      "name": "洋蔥粉",
      "tfda": "P0101001",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 355.0,
        "pro": 8.1,
        "fat": 1.8,
        "carb": 82.1,
        "fib": 11.2,
        "sat": 0.8,
        "chol": null,
        "na": 34.0,
        "sugar": 3.2
      },
      "sourceName": "洋蔥粉"
    },
    "italian_herb": {
      "name": "義式香料／奧勒岡",
      "tfda": "P0100901",
      "shop": "調味料",
      "pantry": true,
      "note": "資料庫無奧勒岡，以乾燥洋香菜數值代替",
      "nutrition100g": {
        "kcal": 265.0,
        "pro": 24.4,
        "fat": 7.5,
        "carb": 47.7,
        "fib": 25.0,
        "sat": 1.5,
        "chol": null,
        "na": 28.0,
        "sugar": 10.2
      },
      "sourceName": "洋香菜片"
    },
    "rosemary": {
      "name": "迷迭香",
      "tfda": "P0101501",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 342.0,
        "pro": 5.9,
        "fat": 21.9,
        "carb": 59.8,
        "fib": 47.4,
        "sat": 12.3,
        "chol": null,
        "na": 5.0,
        "sugar": 3.3
      },
      "sourceName": "迷迭香粉"
    },
    "five_spice": {
      "name": "五香粉",
      "tfda": "P0100401",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 268.0,
        "pro": 8.7,
        "fat": 8.9,
        "carb": 68.1,
        "fib": 49.6,
        "sat": 1.5,
        "chol": null,
        "na": 98.0,
        "sugar": null
      },
      "sourceName": "五香粉"
    },
    "sp_starch": {
      "name": "地瓜粉",
      "tfda": "B0420101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 356.0,
        "pro": 1.0,
        "fat": 0.2,
        "carb": 85.5,
        "fib": 0.5,
        "sat": null,
        "chol": null,
        "na": 19.0,
        "sugar": 0.0
      },
      "sourceName": "甘藷粉"
    },
    "white_vinegar": {
      "name": "白醋（或紅酒醋）",
      "tfda": "P0600401",
      "shop": "調味料",
      "pantry": true,
      "note": "以資料庫「薏仁醋」（白醋）數值代替",
      "nutrition100g": {
        "kcal": 13.0,
        "pro": null,
        "fat": null,
        "carb": 3.3,
        "fib": null,
        "sat": null,
        "chol": null,
        "na": 183.0,
        "sugar": null
      },
      "sourceName": "薏仁醋"
    },
    "jalapeno": {
      "name": "墨西哥辣椒片（罐裝，可省略）",
      "tfda": "R4400601",
      "shop": "調味料",
      "pantry": true,
      "note": "以醃辣椒數值代替",
      "nutrition100g": {
        "kcal": 52.0,
        "pro": 1.9,
        "fat": 0.3,
        "carb": 10.6,
        "fib": 0.8,
        "sat": 0.2,
        "chol": null,
        "na": 1520.0,
        "sugar": 6.8
      },
      "sourceName": "醃辣椒"
    },
    "cinnamon": {
      "name": "肉桂粉",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 247,
        "pro": 4,
        "fat": 1.2,
        "carb": 81,
        "fib": 53,
        "sat": 0,
        "chol": 0,
        "na": 10,
        "sugar": 0
      },
      "note": "資料庫無肉桂粉，用量極少，依一般數值估算",
      "nutrition100g": {
        "kcal": 247,
        "pro": 4,
        "fat": 1.2,
        "carb": 81,
        "fib": 53,
        "sat": 0,
        "chol": 0,
        "na": 10,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "curry_roux": {
      "name": "日式咖哩塊",
      "tfda": "P0200501",
      "shop": "調味料",
      "note": "咖哩塊油和鈉都高，可以只放 2/3 份量",
      "nutrition100g": {
        "kcal": 505.0,
        "pro": 5.6,
        "fat": 34.5,
        "carb": 45.4,
        "fib": 4.9,
        "sat": 20.0,
        "chol": 48.0,
        "na": 4180.0,
        "sugar": 10.0
      },
      "sourceName": "咖哩塊"
    },
    "rotisserie": {
      "name": "Costco 烤雞（拆下的肉）",
      "tfda": "R7300101",
      "shop": "肉品",
      "note": "以資料庫「烤雞（全雞肉）」計算；Costco 烤雞實際鈉可能更高",
      "nutrition100g": {
        "kcal": 233.0,
        "pro": 22.8,
        "fat": 14.2,
        "carb": 3.6,
        "fib": null,
        "sat": 4.2,
        "chol": 123.0,
        "na": 195.0,
        "sugar": null
      },
      "sourceName": "烤雞"
    },
    "chili_crisp": {
      "name": "老干媽（油辣椒）",
      "shop": "調味料",
      "pantry": true,
      "custom": {
        "kcal": 600,
        "pro": 3,
        "fat": 62,
        "carb": 9,
        "fib": 2,
        "sat": 8,
        "chol": 0,
        "na": 1400,
        "sugar": 0
      },
      "note": "資料庫無老干媽，依包裝常見標示估算；這是油，熱量高，量要抓準",
      "nutrition100g": {
        "kcal": 600,
        "pro": 3,
        "fat": 62,
        "carb": 9,
        "fib": 2,
        "sat": 8,
        "chol": 0,
        "na": 1400,
        "sugar": 0
      },
      "sourceName": "理論值估算"
    },
    "fish_sauce": {
      "name": "魚露",
      "tfda": "P0800401",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 64.0,
        "pro": 10.2,
        "fat": 0.2,
        "carb": 5.3,
        "fib": null,
        "sat": 0.1,
        "chol": 0.0,
        "na": 8908.0,
        "sugar": 5.0
      },
      "sourceName": "魚露"
    },
    "cucumber": {
      "name": "小黃瓜",
      "tfda": "E6400201",
      "shop": "蔬菜",
      "unit": "條",
      "unitG": 100,
      "nutrition100g": {
        "kcal": 14.0,
        "pro": 0.8,
        "fat": 0.1,
        "carb": 3.1,
        "fib": 0.7,
        "sat": 0.1,
        "chol": null,
        "na": 1.0,
        "sugar": 1.3
      },
      "sourceName": "花胡瓜(有機)"
    },
    "cilantro": {
      "name": "香菜",
      "tfda": "E4000101",
      "shop": "蔬菜",
      "nutrition100g": {
        "kcal": 20.0,
        "pro": 2.3,
        "fat": 0.3,
        "carb": 4.5,
        "fib": 3.2,
        "sat": null,
        "chol": null,
        "na": 17.0,
        "sugar": null
      },
      "sourceName": "芫荽"
    },
    "rice_vinegar": {
      "name": "米醋",
      "tfda": "P0600101",
      "shop": "調味料",
      "pantry": true,
      "nutrition100g": {
        "kcal": 10.0,
        "pro": null,
        "fat": null,
        "carb": 2.4,
        "fib": null,
        "sat": null,
        "chol": null,
        "na": 8.0,
        "sugar": null
      },
      "sourceName": "米醋"
    }
  },
  "devices": [
    "鑄鐵鍋",
    "電鍋",
    "電子鍋",
    "Ninja",
    "小烤箱",
    "微波爐",
    "果汁機"
  ],
  "nutrients": {
    "kcal": [
      "熱量",
      "kcal"
    ],
    "pro": [
      "蛋白質",
      "g"
    ],
    "fat": [
      "脂肪",
      "g"
    ],
    "carb": [
      "碳水",
      "g"
    ],
    "fib": [
      "膳食纖維",
      "g"
    ],
    "sat": [
      "飽和脂肪",
      "g"
    ],
    "chol": [
      "膽固醇",
      "mg"
    ],
    "na": [
      "鈉",
      "mg"
    ],
    "sugar": [
      "糖",
      "g"
    ]
  }
};
