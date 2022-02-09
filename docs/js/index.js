const hamburger = document.querySelector(".hamburger-menu");
const closenav = document.querySelector(".nav-close-btn");
const mobNav = document.querySelector(".mobile-nav");

hamburger.addEventListener('click', ()=> {
    mobNav.style.width = "60vw";
});

closenav.addEventListener('click', ()=> {
    mobNav.style.width = null;
});


// Mobile Drawer
let isMobile = false;
const mobileMenu = document.querySelector(".mobile-menu");
const drawer = document.querySelector(".drawer");

mobileMenu.addEventListener('click',() => {
    isMobile = !isMobile;
    if (isMobile) {
        drawer.classList.add("open-drawer");
        mobileMenu.innerHTML = ` Menu <i class="fa-solid fa-angle-down"></i>`;
    }else{
        drawer.classList.remove("open-drawer");
        mobileMenu.innerHTML = ` Menu <i class="fa-solid fa-angle-up"></i>`;
    }
})
