export default {
    "users": [
        {
            "id": "u01",
            "name": "Isabel",
            "person_price": null,
            "profile": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
        },
        {
            "id": "u02",
            "name": "Rose",
            "person_price": null
        },
        {
            "id": "u03",
            "name": "Irene",
            "person_price": null
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
                "price": 50
            },
            {
                "id": "p02",
                "name": "泰式椒麻雞飯",
                "category": "c01",
                "price": 90
            },
            {
                "id": "p03",
                "name": "打拋豬飯",
                "category": "c01",
                "price": 80
            },
            {
                "id": "p04",
                "name": "海鮮什錦炒麵",
                "category": "c02",
                "price": 100
            },
            {
                "id": "p05",
                "name": "日式炒烏龍麵",
                "category": "c02",
                "price": 90
            },
            {
                "id": "p06",
                "name": "咖哩湯烏龍麵",
                "category": "c02",
                "price": 100
            },
            {
                "id": "p07",
                "name": "炸物拼盤",
                "category": "c03",
                "price": 160
            },
            {
                "id": "p08",
                "name": "涼拌青木瓜絲",
                "category": "c03",
                "price": 120
            },
            {
                "id": "p09",
                "name": "正宗泰式奶茶",
                "category": "c04",
                "price": 40
            },
            {
                "id": "p10",
                "name": "椰汁西米露",
                "category": "c04",
                "price": 50
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