// Add this JavaScript to handle the mobile menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.mobile-header button');
    const nav = document.querySelector('.headernav');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    document.body.appendChild(menuOverlay);

    // Toggle menu when hamburger is clicked
    hamburgerButton.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        nav.classList.remove('active');
        menuOverlay.classList.remove('active');
    });

    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.headernav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuOverlay.classList.remove('active');
        });
    });
});