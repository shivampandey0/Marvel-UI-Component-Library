// Hamberger Menu
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


// Dismissable Alerts and other elements
const dismissElement = document.querySelectorAll(".delete");
const resetAlerts = document.querySelector("#resetAlerts");

dismissElement.forEach(e => {    
    e.addEventListener("click", (e) => {
        let parentElement = e.target.parentElement.parentElement;
        console.log(parentElement);
        parentElement.style.display = "none";
        resetAlerts.classList.remove("hide");
    })
});

resetAlerts.addEventListener('click',()=>{
  dismissElement.forEach(e => {
      let parentElement = e.parentElement;
      parentElement.style.display = "";
      resetAlerts.classList.add("hide");

  })
});

