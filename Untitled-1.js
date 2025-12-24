const track = document.querySelector(".track");

document.addEventListener("mousemove", (e) => {
  const speed = e.clientX / window.innerWidth;
  track.style.animationDuration = `${30 - speed * 20}s`;
});
