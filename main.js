


//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let itemOnClick = document.querySelector("nav-item");

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
});

// Hamburger Menu
window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
});

hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open')
});

//Hamburger Menu Down On Click


// Cookie
setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active")
}, 2000);
