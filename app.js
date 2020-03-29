class Product {
    constructor(name, price, img, desc) {
        this.name = name
        this.price = price
        this.img = img
        this.desc = desc
    }
}

class UI {
    static displayNavProduct(dataIndex) {
        const StoredProducts = [
            [
                {
                    name: '小米10 Pro',
                    price: '4999元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                },
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'

                }, {
                    name: '小米CC9',
                    price: '1499元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }
            ],
            [
                {
                    name: 'Redmi K30',
                    price: '4999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: 'Redmi K30 5G',
                    price: '1499元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: 'Redmi 10G',
                    price: '1099元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: 'Redmi 20G',
                    price: '2099元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: 'Redmi 30G',
                    price: '4099元起',
                    img: 'images/xiaomi/mi10.jpg'

                }, {
                    name: 'Redmi 40G',
                    price: '1599元起',
                    img: 'images/xiaomi/mi10.jpg'
                }
            ],
            [
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                },
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                },
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'

                }, {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }
            ],
            [
                {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                },
                {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                },
                {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'

                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                }
            ],
            [
                {
                    name: '小米10 Pro',
                    price: '4999元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                },
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'

                }, {
                    name: '小米CC9',
                    price: '1499元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }
            ],
            [
                {
                    name: '小米10 Pro',
                    price: '4999元起',
                    img: 'images/xiaomi/mi10-pro.jpg'
                },
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: '小米CC9 Pro',
                    price: '2599元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米9 Pro 5G',
                    price: '3699元起',
                    img: 'images/xiaomi/mi10-pro.jpg'

                }, {
                    name: '小米CC9',
                    price: '1499元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }
            ],
            [
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                },
                {
                    name: '小米10',
                    price: '3999元起',
                    img: 'images/xiaomi/mi10.jpg'
                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'

                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }, {
                    name: '小米CC9e',
                    price: '1099元起',
                    img: 'images/xiaomi/micc9-pro.jpg'
                }
            ]
        ]

        const productsList = StoredProducts
        let products = productsList[dataIndex]

        products.forEach((product, index) =>
            UI.addProductToNav(product, products[products.length - 1], index)
        )

    }

    static addProductToNav(product, last, index) {
        const list = document.querySelector(`#product-list ul li:nth-child(${index + 1})`)
        list.innerHTML =
            `<img src='${product.img}' alt='product' 
            style =${product === last ? "border:0" : ""}>
            <div class="title">${product.name}</div>
            <div class="price">${product.price}</div>`
    }

    static displayListProduct(dataIndex) {
        const StoredProducts = [
            {
                img: 'images/xiaomi/mi10-pro.jpg',
                name: '小米10 Pro'
            }, {
                img: 'images/xiaomi/mi10.jpg',
                name: '小米10'
            }, {
                img: 'images/xiaomi/micc9-pro.jpg',
                name: '小米9 CC'
            }, {
                img: 'images/xiaomi/xiaomicc.png',
                name: '小米9'
            }, {
                img: 'images/television/tv1.jpg',
                name: '电视1'
            }, {
                img: 'images/television/tv2.jpg',
                name: '电视2'
            }, {
                img: 'images/television/tv3.jpg',
                name: '电视3'
            }, {
                img: 'images/xiaomi/mi10.jpg',
                name: '小米10'
            }, {
                img: 'images/xiaomi/micc9-pro.jpg',
                name: '小米9 CC'
            }, {
                img: 'images/xiaomi/xiaomicc.png',
                name: '小米9'
            }
        ]

        let StoredList = []
        StoredProducts.forEach((StoredProduct, index) => {
            const product = Array(24 - (index * 2)).fill(StoredProduct)
            StoredList = [...StoredList, product]
        })

        let products = StoredList[dataIndex]
        products.forEach((product, index) =>
            UI.addProductToList(product, index)
        )
    }

    static addProductToList(product, index) {
        const list = document.querySelector(`#children-list`)
        let ul
        if (index % 6) {
            ul = document.querySelector(`#children-list ul:nth-child(${parseInt(index / 6) + 1})`)
        } else {
            ul = document.createElement('ul')
            ul.className = "children-list-col"
        }

        const li = document.createElement('li')
        li.innerHTML =
            `<span class="testing"><img src="${product.img}" alt="">
        <span class="text">${product.name}</span><span>`

        ul.appendChild(li)
        list.appendChild(ul)

    }

    static displayBoxProduct(dataIndex) {
        const StoredProducts = [
            {
                name: '米家互联网空调C2（一级能效）',
                price: '2399元',
                img: 'images/box/hot1.png',
                desc: '变频节能省电，自情节'
            }, {
                name: '米家互联网空调C1（一级能效）',
                price: '2399元',
                img: 'images/xiaomi/mi10-pro.jpg',
                desc: '变频节能省电，自情节'
            }
        ]

        let StoredList = []
        StoredProducts.forEach((StoredProduct) => {
            const product = Array(7).fill(StoredProduct)
            StoredList = [...StoredList, product]
        })
        let products = StoredList[dataIndex]

        products.forEach((product, index) =>
            UI.addProductToBox(product, index)
        )

    }

    static addProductToBox(product, index) {
        const list = document.querySelector(`#box-list li:nth-child(${index + 1})`)
        list.innerHTML =
            `<div class="content">
            <img src="${product.img}" alt="" width="160">
            <h3 class="title">${product.name}</h3>
            <p class="desc">${product.desc}</p>
            <p class="price">
              <span>${product.price}</span>
              <del>${product.price}</del>
            </p>
          </div>`
    }
}

const eventNavItem = () => {
    const navItemNode = document.querySelectorAll('.navitem')
    const navItems = [...navItemNode]

    navItems.forEach((navItem) => {
        var productList = document.querySelector('#product-list')

        navItem.addEventListener('mouseover', (e) => {
            UI.displayNavProduct(e.target.dataset.index)

            productList.style.maxHeight = "250px"
            productList.addEventListener('mouseover', () => productList.style.maxHeight = "250px")
            productList.addEventListener('mouseleave', () => productList.style.maxHeight = "0px")

        })

        navItem.addEventListener('mouseleave', () => productList.style.maxHeight = "0px")
    })
}

const eventListItem = () => {

    const childrenList = document.getElementById('children-list')
    var temp = document.createElement('placeholder')

    const listItemNode = document.querySelectorAll('.itemCategory')
    const listItems = [...listItemNode]
    listItems.forEach((listItem) => {
        listItem.addEventListener('mouseenter', (e) => {
            UI.displayListProduct(e.target.dataset.index)
            childrenList.style.display = "flex"
        })
        listItem.addEventListener('mouseleave', () => {
            temp.innerHTML = childrenList.innerHTML
            childrenList.style.display = "none"
            childrenList.innerHTML = ""
        })

    })

    childrenList.addEventListener('mouseenter', () => {
        childrenList.style.display = "flex"
        if (childrenList.innerHTML === "")
            childrenList.innerHTML = temp.innerHTML
    })
    childrenList.addEventListener('mouseleave', () => {
        childrenList.style.display = "none"
        childrenList.innerHTML = ""
    })
}

const eventBoxItem = () => {

    UI.displayBoxProduct(0)

    const boxItemNode = document.querySelectorAll('.boxItem')
    const boxItems = [...boxItemNode]
    boxItems.forEach((boxItem) => {
        boxItem.addEventListener('mouseenter', (e) => {
            const currentBox = document.querySelector('#boxItemList .active')
            currentBox.classList.remove('active')
            boxItem.className += ' active'

            UI.displayBoxProduct(e.target.dataset.index)
        })
    })
}

eventNavItem()
eventListItem()
eventBoxItem()

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) +
    (Math.floor(Math.random() * 10)) * 60 * 60 * 1000);

initializeClock('countdown', deadline);


var slideIndex = 1;
var myTimer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    resume()
    const slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

const plusSlides = (n) => n < 0 ? showSlides(slideIndex -= 1) : showSlides(slideIndex += 1)

const showSlides = (n) => {
    slideIndex = n
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => clearInterval(myTimer)

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex) }, 10000);
}

let tranlateX = 0
let firstPos = 0
const swipe = document.querySelector('.swipe-wrap ul')
const first = document.querySelectorAll('.swipe-wrap ul .first')



swipePrev = (value, action) => {
    const current = document.querySelector('.swipe-wrap ul .current')
    const btnPrev = document.querySelector('#btn-prev')
    const btnNext = document.querySelector('#btn-next')
    let condition = false

    if (action === 'prev') {
        condition = current.previousElementSibling !== null
        btnNext.classList.remove('disabled-i')
    }
    else if (action === 'next') {
        condition = firstPos < first.length - 1
        btnPrev.classList.remove('disabled-i')
    }

    if (condition) {
        action === 'prev' ? firstPos-- : firstPos++
        current.classList.remove("current")
        first[firstPos].classList.add("current")
        tranlateX += value
        swipe.style.transform = `translate3d(${tranlateX}px, 0, 0)`

        if (first[firstPos].previousElementSibling === null)
            btnPrev.className += " disabled-i"

        if (firstPos + 1 >= first.length)
            btnNext.className += " disabled-i"
    }
}




