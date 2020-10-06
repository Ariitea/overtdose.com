


//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let itemOnClick = document.querySelector("nav-item");

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");


// Hamburger Menu animation
window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
});

// Hamburger Menu open function
hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open')
});

//Hamburger Menu "show/hide" On Click
itemOnClick.addEventListener('click', function(){
  header.classList.remove('menu-open')
});

// Cookie fucntion for storage et remove banner
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
});

// Time out storage displayed
setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active")
}, 2000);
