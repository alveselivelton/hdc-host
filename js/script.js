const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Versão pra toque por touch screen
hamburger.addEventListener("touchstart", (e) => {
  e.preventDefault();
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
