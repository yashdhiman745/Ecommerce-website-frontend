const header = document.querySelector("header");
// when window is scroll it will assign sticky class to it. and we coded css of sticky class.
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.addEventListener("click", () => {
    menu.classlist.toggle('bx-x');
    navbar.classList.toggle('open');
});
window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navbar.classList.remove('open');
}


