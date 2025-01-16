// Portfolio button functionality
const portfolioBtn = document.getElementById("portfolio-btn");
const portfolioSubmenu = document.getElementById("portfolio-submenu");

if (portfolioBtn) {
    portfolioBtn.addEventListener("click", () => {
        // Toggle submenu visibility
        portfolioSubmenu.classList.toggle("d-none");
    });
}

// Photos page functionality
const photosPage = document.querySelector(".photos-page");
if (photosPage) {
    const photos = [
        "assets/images/photo1.JPG",
        "assets/images/photo2.JPG",
        "assets/images/photo3.JPG",
        // Add paths to all your photos here
    ];

    let currentPhotoIndex = 0;

    // Function to change the photo
    const changePhoto = () => {
        currentPhotoIndex = Math.floor(Math.random() * photos.length);
        photosPage.style.backgroundImage = `url('${photos[currentPhotoIndex]}')`;
    };

    // Add click event to change the photo
    photosPage.addEventListener("click", changePhoto);

    // Set initial photo
    changePhoto();
}
