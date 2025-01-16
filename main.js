// Get references to elements
const nameElement = document.getElementById('name');
const menu = document.querySelector('.menu');
const portfolioBtn = document.getElementById('portfolio-btn');
const portfolioSubmenu = document.querySelector('.portfolio-submenu');
const backBtn = document.getElementById('back-btn');

// Show menu when mouse is near the name
nameElement.addEventListener('mouseenter', () => {
    menu.classList.remove('d-none');
    backBtn.classList.remove('d-none');
});

// Toggle portfolio submenu visibility
portfolioBtn.addEventListener('click', () => {
    const isVisible = portfolioSubmenu.classList.contains('d-none');
    portfolioSubmenu.classList.toggle('d-none', !isVisible);
});

// Hide menu when back button is clicked
backBtn.addEventListener('click', () => {
    menu.classList.add('d-none');
    backBtn.classList.add('d-none');
    portfolioSubmenu.classList.add('d-none');
});
