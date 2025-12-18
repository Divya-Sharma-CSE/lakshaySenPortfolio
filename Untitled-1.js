window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navBar");
  nav.classList.toggle("scrolled", window.scrollY > window.innerHeight - 80);
});

// MENU EXPAND
const hamburger = document.querySelector(".sections");
const overlay = document.getElementById("menuOverlay");
const body = document.body;

hamburger.addEventListener("click", () => {
  body.classList.add("menu-open");
});

overlay.addEventListener("click", () => {
  body.classList.remove("menu-open");
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    body.classList.remove("menu-open");
  }
});
