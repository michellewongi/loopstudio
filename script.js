var menu = document.querySelector(".wrapper");
var ham = document.querySelector(".hamburger");
var xIcon = document.querySelector(".close-icon");
var hamIcon = document.querySelector(".hamburger-icon");

ham.addEventListener("click", toggleMenu);
menu.classList.contains("show-menu");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    xIcon.style.display = "none";
    hamIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    xIcon.style.display = "block";
    hamIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menu-links");

if (window.innerWidth <= 1000) {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", toggleMenu);
  });
}
if (window.innerWidth >= 1000) {
  menuLinks.forEach(function (menuLink) {
    menuLink.removeEventListener("click", toggleMenu);
  });
}
