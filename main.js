// Get references to elements
const nameElement = document.getElementById('name');
const menu = document.querySelector('.menu');
const portfolioBtn = document.getElementById('portfolio-btn');
const portfolioMenu = document.querySelector('.portfolio-menu');

// Show menu on hover over the name
nameElement.addEventListener('mouseover', () => {
    menu.classList.remove('d-none');
});

// Hide menu when the mouse leaves the name area
nameElement.addEventListener('mouseleave', () => {
    setTimeout(() => {
        menu.classList.add('d-none');
    }, 500);
});

// Toggle portfolio submenu visibility
portfolioBtn.addEventListener('click', () => {
    portfolioMenu.classList.toggle('d-none');
});
