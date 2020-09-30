//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");


window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open');
})

// Cookie
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
});

setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active");
}, 2000);
