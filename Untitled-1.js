window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navBar");
  nav.classList.toggle("scrolled", window.scrollY > window.innerHeight - 80);
});
