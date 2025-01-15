// Get references to elements
const nameElement = document.getElementById('name');
const menu = document.querySelector('.menu');
const portfolioBtn = document.getElementById('portfolio-btn');
const portfolioMenu = document.querySelector('.portfolio-menu');

// Show menu on hover over the name
nameElement.addEventListener('mouseover', () => {
    menu.style.display = 'flex';
});

// Hide menu when the mouse leaves the name area
nameElement.addEventListener('mouseleave', () => {
    setTimeout(() => {
        menu.style.display = 'none';
    }, 500);
});

// Toggle portfolio submenu visibility
portfolioBtn.addEventListener('click', () => {
    const isVisible = portfolioMenu.style.display === 'flex';
    portfolioMenu.style.display = isVisible ? 'none' : 'flex';
});
