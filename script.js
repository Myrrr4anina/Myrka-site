/* ===== СЧЁТЧИК ПОСЕЩЕНИЙ ===== */

const visitorDisplay = document.getElementById("visitor-number");

// Считаем посещение только на странице, где есть табло
if (visitorDisplay) {
    let visitors = Number(localStorage.getItem("mySiteVisitors")) || 0;

    visitors++;

    localStorage.setItem("mySiteVisitors", visitors);

    visitorDisplay.textContent = String(visitors).padStart(6, "0");
}