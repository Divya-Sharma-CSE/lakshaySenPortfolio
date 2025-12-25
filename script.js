//SHUTTLE SCROLLING EFFECT
const nav = document.querySelector(".shuttle");

nav.addEventListener("click", () => {
    const shuttle = document.querySelector(".heroShuttle");
    const quote = document.querySelector(".quotePage");
    quote.scrollIntoView({ behavior: "smooth", block: "start" });

    shuttle.style.visibility = "visible";

});

/* 
//MENU EXPAND    
const menu = document.querySelector(".selections");
const hero = document.querySelector(".heroPage");

menu.addEventListener("click", () => {
    hero.style.backgroundColor= rgba(0, 0, 0, 0.5);
    
}); */


//MENU EXPAND
const arrow = document.querySelector(".sections");
const overlay = document.getElementById("menuOverlay");
const closeBtn = document.querySelector(".closeBtn");
const body = document.body;

arrow.addEventListener("click", () => {
    body.classList.add("menu-open");
});

overlay.addEventListener("click", () => {
    body.classList.remove("menu-open");
});

closeBtn.addEventListener("click", () => {
    body.classList.remove("menu-open");
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    body.classList.remove("menu-open");
  }
});


//STOP ON HOVER
/* const statsBox = document.querySelector(".statsNoHover");

function stop(){
    statsBox.addEventListener("mouseover", () => {
        statsBox.classList.remove("statsNoHover");
        statsBox.classList.add("statsHover")
    });
};

function reset(){
    statsBox.addEventListener("mouseover", () => {
        statsBox.classList.remove("statsHover");
        statsBox.classList.add("statsNoHover")
    });
} */

