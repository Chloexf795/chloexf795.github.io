// Get references to elements
const nameElement = document.getElementById('name');
const menu = document.querySelector('.menu');
const backBtn = document.getElementById('back-btn');

// Show menu when mouse is near the name
nameElement.addEventListener('mouseenter', () => {
    menu.classList.remove('d-none');
});

// Hide menu when back button is clicked
backBtn.addEventListener('click', () => {
    menu.classList.add('d-none');
});
