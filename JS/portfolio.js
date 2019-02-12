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
