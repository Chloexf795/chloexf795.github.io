// References to elements
const mainTitle = document.getElementById("main-title");
const mainMenu = document.getElementById("main-menu");
const backBtn = document.getElementById("back-btn");
const portfolioBtn = document.getElementById("portfolio-btn");
const portfolioSubmenu = document.getElementById("portfolio-submenu");

// Show the main menu when mouse enters near the title
mainTitle.addEventListener("mouseenter", () => {
    mainMenu.classList.remove("d-none");
    backBtn.classList.remove("d-none");
});

// Hide the main menu when clicking the back button
backBtn.addEventListener("click", () => {
    mainMenu.classList.add("d-none");
    backBtn.classList.add("d-none");
    portfolioSubmenu.classList.add("d-none"); // Ensure submenu is hidden
});

// Toggle the portfolio submenu visibility
portfolioBtn.addEventListener("click", () => {
    portfolioSubmenu.classList.toggle("d-none");
});
