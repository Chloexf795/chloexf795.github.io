// References to elements
const mainTitle = document.getElementById("main-title");
const mainMenu = document.getElementById("main-menu");

// Show the main menu when the mouse is near Chloe Xu
mainTitle.addEventListener("mouseenter", () => {
    mainMenu.classList.remove("d-none");
});

// Hide the main menu when clicking outside
document.addEventListener("click", (event) => {
    if (!mainTitle.contains(event.target) && !mainMenu.contains(event.target)) {
        mainMenu.classList.add("d-none");
    }
});

// Toggle visibility of the Portfolio submenu
const portfolioBtn = document.getElementById("portfolio-btn");
const portfolioSubmenu = document.getElementById("portfolio-submenu");

portfolioBtn.addEventListener("click", () => {
    const isVisible = !portfolioSubmenu.classList.contains("d-none");
    portfolioSubmenu.classList.toggle("d-none", isVisible);
});

// Ensure submenu disappears when clicking elsewhere
document.addEventListener("click", (event) => {
    if (!portfolioBtn.contains(event.target) && !portfolioSubmenu.contains(event.target)) {
        portfolioSubmenu.classList.add("d-none");
    }
});
