export default {
    "users": [
        {
            "id": "u01",
            "name": "Isabel",
            "person_price": null,
            "profile": "png-avatar/005-woman.png"
        },
        {
            "id": "u02",
            "name": "Rose",
            "person_price": null,
            "profile": "png-avatar/039-boy.png"
        },
        {
            "id": "u03",
            "name": "Irene",
            "person_price": null,
            "profile": "png-avatar/024-woman.png"
        }
    ],
    "menu": {
        "categories": [
            {
                "id": "c01",
                "name": "飯食"
            },
            {
                "id": "c02",
                "name": "麵食"
            },
            {
                "id": "c03",
                "name": "點心炸物"
            },
            {
                "id": "c04",
                "name": "飲料"
            }
        ],
        "products": [
            {
                "id": "p01",
                "name": "香噴噴雞肉飯",
                "category": "c01",
                "price": 50,
                "image": "png-food2/026-friedrice.png"
            },
            {
                "id": "p02",
                "name": "泰式椒麻雞飯",
                "category": "c01",
                "price": 90,
                "image": "png-food2/048-bulgogi.png"
            },
            {
                "id": "p03",
                "name": "打拋豬飯",
                "category": "c01",
                "price": 80,
                "image": "png-food2/019-curry.png"
            },
            {
                "id": "p04",
                "name": "海鮮什錦炒麵",
                "category": "c02",
                "price": 100,
                "image": "png-food2/017-tomyumgoong.png"
            },
            {
                "id": "p05",
                "name": "日式炒烏龍麵",
                "category": "c02",
                "price": 90,
                "image": "png-food2/002-ramen.png"
            },
            {
                "id": "p06",
                "name": "咖哩湯烏龍麵",
                "category": "c02",
                "price": 100,
                "image": "png-food2/031-oyakodon.png"
            },
            {
                "id": "p07",
                "name": "炸物拼盤",
                "category": "c03",
                "price": 160,
                "image": "png-food2/038-satay.png"
            },
            {
                "id": "p08",
                "name": "涼拌青木瓜絲",
                "category": "c03",
                "price": 120,
                "image": "png-food2/045-narutomaki.png"
            },
            {
                "id": "p09",
                "name": "正宗泰式奶茶",
                "category": "c04",
                "price": 40,
                "image": "png-food2/050-thaitea.png"
            },
            {
                "id": "p10",
                "name": "椰汁西米露",
                "category": "c04",
                "price": 50,
                "image": "png-food2/008-greentea.png"
            }
        ]
    },
    "orders": [
        {
            "productid": "p01",
            "product_price": 50,
            "amount": 2,
            "users": [
                ["u01","u02"], ["u03"]
            ]
        }
    ]
}