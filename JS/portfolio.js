// $(".arrowright").on("click", function () {
//     $(".right").addClass("active");
// })


// document.querySelector('.arrowright').addEventListener('click', function () {
//     document.querySelector('.right').classList.add("active");
//     document.querySelector('.center').classList.add("off")
// })

// document.querySelector('.back').addEventListener('click', function () {
//     document.querySelector('.right').classList.remove("active");
//     document.querySelector('.center').classList.remove("off")
// })

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    menu.classList.toggle("active");
})

const navcon = document.querySelector('nav>ul>li:nth-of-type(4)');
const contact = document.querySelector('.contact');
const center = document.querySelector('.center');

navcon.addEventListener('click', function () {
    contact.classList.add('active');
    center.classList.add('off');
    portfolio.classList.remove('active');
    about.classList.remove('active');

})

const home = document.querySelector('nav>ul>li:nth-of-type(1)');

home.addEventListener('click', function () {
    contact.classList.remove('active');
    about.classList.remove('active');
    center.classList.remove('off');
    portfolio.classList.remove('active');
})

const navabo = document.querySelector('nav>ul>li:nth-of-type(3)');
const about = document.querySelector('.about');

navabo.addEventListener('click', function () {
    about.classList.add('active');
    center.classList.add('off');
    contact.classList.remove('active');
    portfolio.classList.remove('active');

})

const navpor = document.querySelector('nav>ul>li:nth-of-type(2)');
const portfolio = document.querySelector('.portfolio');

navpor.addEventListener('click', function () {
    portfolio.classList.add('active');
    center.classList.add('off');
    contact.classList.remove('active');
    about.classList.remove('active');
})
