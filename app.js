let test = document.querySelectorAll('.navitem')

console.log(test)
const array = [...test]

array.forEach((test) => {
    var test2 = document.querySelector('#product-list')

    test.addEventListener('mouseover', () => {
        test2.style.maxHeight = "250px"
        test2.style.transition = "all .5s"

        test2.addEventListener('mouseleave', () =>
            test2.style.maxHeight = "0px"
        )

        test2.addEventListener('mouseover', () => {
            test2.style.maxHeight = "250px"
            test2.style.transition = "all .5s"
        })
    })

    test.addEventListener('mouseleave', () => {
        test2.style.maxHeight = "0px"

    })

})


class Product {
    constructor(name, price, img, desc) {
        this.name = name
        this.price = price
        this.img = img
        this.desc = desc
    }
}

class UI {
    static displayProduct() {
        const StoredProducts = [
            {
                name: 'Redmi K30',
                price: 1200,
                img: 'images/xiaomi/mi10-pro.jpg'
            },
            {
                name: 'Redmi K30 5G',
                price: 1500,
                img: 'images/xiaomi/mi10-pro.jpg'
            },
            {
                name: 'Redmi 10G',
                price: 5000,
                img: 'images/xiaomi/mi10-pro.jpg'
            }, {
                name: 'Redmi 20G',
                price: 7000
            }, {
                name: 'Redmi 30G',
                price: 8000
            }, {
                name: 'Redmi 40G',
                price: 9000
            }
        ]

        const products = StoredProducts

        products.forEach((product) => UI.addProductToList(product))
    }

    static addProductToList(product) {
        const list = document.querySelector('#product-list')

        const row = document.createElement('ul')

        list.appendChild(row)
        console.log(list)
    }
}

document.addEventListener('DOMContentLoaded', UI.displayProduct)