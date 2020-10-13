//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnKBcNE8NTWxafRvvvEwvdzr3vb7e8-sE",
  authDomain: "ovd-bdd.firebaseapp.com",
  databaseURL: "https://ovd-bdd.firebaseio.com",
  projectId: "ovd-bdd",
  storageBucket: "ovd-bdd.appspot.com",
  messagingSenderId: "333444686977",
  appId: "1:333444686977:web:ee9b64d843453cd2515980",
  measurementId: "G-DTLQXB5E0D"
};

var db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage("gs://ovd-bdd.appspot.com");




// Hamburger Menu animation
window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
});

// Hamburger Menu open function
hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open')
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


// Email Form
function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("selectList").value;
    document.location.href = "mailto:contact@overtdose.com?subject="
         + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage)
};
