// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const headerRight = document.querySelector('.header-right');
const body = document.body;

menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    headerRight.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Handle dropdown on mobile
const dropdownBtns = document.querySelectorAll('.dropdown .dropbtn');

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        // Only handle click for mobile view
        if (window.innerWidth <= 992) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
    if (window.innerWidth <= 992) {
        const isMenuOpen = navMenu.classList.contains('active');
        const isClickInside = navMenu.contains(e.target) ||
            menuToggle.contains(e.target) ||
            headerRight.contains(e.target);

        if (isMenuOpen && !isClickInside) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            headerRight.classList.remove('active');
            body.classList.remove('menu-open');

            // Close any open dropdowns
            dropdownBtns.forEach(btn => {
                btn.parentElement.classList.remove('active');
            });
        }
    }
});

// Close menu when window is resized to desktop
window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        headerRight.classList.remove('active');
        body.classList.remove('menu-open');

        // Reset dropdowns
        dropdownBtns.forEach(btn => {
            btn.parentElement.classList.remove('active');
        });
    }
});

// Live Search Bar Functionality
document.getElementById("search")?.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let games = document.querySelectorAll(".game");

    games.forEach(game => {
        let title = game.querySelector("h3").innerText.toLowerCase();
        if (title.includes(filter)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});

// Exit-Intent Pop-Up
document.addEventListener("mouseleave", function (event) {
    if (event.clientY < 10) { // Detects when the user moves cursor to top (close tab)
        // alert("Wait! Check out our latest game deals before you go!");
    }
});

// Registration Form Validation
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
    }
});

// Function to toggle night mode
// Define mode outside the function so it persists between function calls
let mode = 0;

function nightmodeToggle() {
    switch (mode) {
        case 0:
            document.body.style.backgroundColor = "#09182b"; // Dark mode
            document.querySelectorAll("p").forEach(p => p.style.color = "#ffffff");
            console.log("Switched to dark mode");
            mode = 1; // Update the mode
            break;
        case 1:
            document.body.style.backgroundColor = "#ffffff"; // Light mode
            document.querySelectorAll("p").forEach(p => p.style.color = "#000000");
            document.getElementById("memberCard").style.color = "#09182b";
            console.log("Switched to light mode");
            mode = 0; // Update the mode
            break;
    }
}

// Add event listener for night mode toggle button
document.getElementById("nightMode")?.addEventListener("click", nightmodeToggle);

//Game Product, popular games javascript code
document.querySelectorAll('.product-image').forEach(image => {
    image.addEventListener('click', function () {
        // Remove enlarged class from any previously enlarged image
        const currentEnlarged = document.querySelector('.product-image.enlarged');
        if (currentEnlarged) {
            currentEnlarged.classList.remove('enlarged');
        }

        // Toggle enlarged class on clicked image
        this.classList.toggle('enlarged');

        // Add click event to remove enlargement when clicking outside
        if (this.classList.contains('enlarged')) {
            const removeEnlargement = (e) => {
                if (!this.contains(e.target)) {
                    this.classList.remove('enlarged');
                    document.removeEventListener('click', removeEnlargement);
                }
            };
            document.addEventListener('click', removeEnlargement);
        }
    });
});

//Contact us section validation js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Function to show error message
    function showError(input, errorElement) {
        errorElement.style.display = 'block';
        input.classList.add('input-error');
    }

    // Function to hide error message
    function hideError(input, errorElement) {
        errorElement.style.display = 'none';
        input.classList.remove('input-error');
    }

    // Real-time validation for name
    nameInput?.addEventListener('input', function () {
        if (this.value.trim() === '') {
            showError(nameInput, nameError);
        } else {
            hideError(nameInput, nameError);
        }
    });

    // Real-time validation for email
    emailInput?.addEventListener('input', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.value)) {
            showError(emailInput, emailError);
        } else {
            hideError(emailInput, emailError);
        }
    });

    // Message validation if messageInput exists
    messageInput?.addEventListener('input', function () {
        if (this.value.trim() === '') {
            showError(messageInput, messageError);
        } else {
            hideError(messageInput, messageError);
        }
    });

    // Form submission validation
    form?.addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();

        // Name validation
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, emailError);
            return;
        }

        // Message validation if messageInput exists
        if (messageInput && messageInput.value.trim() === '') {
            showError(messageInput, messageError);
            return;
        }

        // If all validations pass, you can submit the form
        alert('Form submitted successfully!');
    });
});