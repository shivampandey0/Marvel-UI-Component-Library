const hamburger = document.querySelector(".hamburger-menu");
const closenav = document.querySelector(".nav-close-btn");
const mobNav = document.querySelector(".mobile-nav");

hamburger.addEventListener('click', ()=> {
    mobNav.style.width = "60vw";
});

closenav.addEventListener('click', ()=> {
    mobNav.style.width = null;
});
