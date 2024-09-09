// const a = " Abdu "
// const b = "Sultanov"
// const c = 16

// const d = "max"
// const e = "Shermatov"
// const f = 32


const obj1 = {

    name: 'Abdu',
    surname: 'Sultanov',
    age: 16,
    address:'Tashkent'
}


const product1 = {
img:'https://images.uzum.uz/clvcafc6pk58gtm6p9i0/original.jpg',
    title: 'сумка мужские',
    rate:4.9,
    reviews:150,
    oldPrice:120000,
    newPrice:14000,
    description:' чота там чота там короче туркия норм качества'

}

const product2 = {
    Img:'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages.zoodmall.com%2Fweb%2Fproduct%2Fpicture%2F85%2F29117885%2F170610564502425400425.jpeg',

    title: 'очки',
    rate:9,
    reviews:50,
    oldPrice:10000,
    newPrice:1000,
    description:' чота там чота там короче туркия норм качества'

}

const product3 = {
    Img:'https://images2.zoodmall.uz/cdn-cgi/image/w=500,fit=contain,f=auto/https%3A%2F%2Fimages.zoodmall.com%2Fweb%2Fproduct%2Fpicture%2F85%2F29117885%2F170610564502425400425.jpeg',

    title: 'чайник ',
    rate:4,
    reviews:10,
    oldPrice:150000,
    newPrice:14000,
    description:' чота там чота там короче туркия норм качества'

}

product3.rate = 4.8
product3.newPrice = 2000
product3.oldPrice = 2000
product3.stock = 52 + 'товаров'
delete product3.oldPrice

console.log(product1 [ 'title'], product1['newPrice'] );
console.log(product2 [ 'title'], product2['newPrice'] );
console.log(product3 [ 'title'], product3['newPrice'], product3['rate'], product3['stock'] );







const cardImg = document.querySelector('.card img ').src = product1.img
const cardTitle = document.querySelector('.card h3').innerText = product1.title
const cardRating = document.querySelector('#rating').innerText = product1.rate
const cardReviews = document.querySelector('#reviews').innerText =product1.reviews
const cardOldprice = document.querySelector('.card s ').innerText = product1.s
const cardNewprice = document.querySelector('.card b ').innerText = product1.b


cardImg.style. width = '200px'
