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


/* PIE CHART */
document.addEventListener('DOMContentLoaded', () => {

  const statsSection = document.getElementById('stats');
  const ctx = document.getElementById('winsChart');

  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Wins', 'Losses'],
      datasets: [{
        data: [0, 0],                       // start empty
        backgroundColor: ['#4A90E2', '#1f2f44'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '65%',
      animation: {
        duration: 1500,
        easing: 'easeOutQuart'
      }
    }
  });

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      chart.data.datasets[0].data = [64.8, 35.2];
      chart.update();
      observer.disconnect();               // run once
    }
  }, {
    threshold: 0.6
  });

  observer.observe(statsSection);


});


let barChartCreated = false;

const statsSection = document.getElementById('stats2');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !barChartCreated) {
                statsSection.classList.add('visible');

                requestAnimationFrame(() => {
                    createBarChart();
                });

                barChartCreated = true;
            }
        });
    },
    { threshold: 0.6 }
);

observer.observe(statsSection);

function createBarChart() {
    const ctx = document.getElementById('titlesChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2019', '2021', '2022', '2024', '2025'],
            datasets: [{
                label: 'Titles Won',
                data: [2, 3, 1, 1, 1],
                backgroundColor: '#4A90E2',
                borderRadius: 8
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}






function sortTable(colIndex) {
  const table = document.getElementById("achievementsTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  const asc = table.dataset.sort !== "asc";
  table.dataset.sort = asc ? "asc" : "desc";

  rows.sort((a, b) => {
    const A = a.cells[colIndex].innerText;
    const B = b.cells[colIndex].innerText;
    return asc ? A.localeCompare(B, undefined, {numeric:true}) 
               : B.localeCompare(A, undefined, {numeric:true});
  });

  rows.forEach(row => tbody.appendChild(row))};


