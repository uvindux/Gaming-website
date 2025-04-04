// Live Search Bar Functionality
document.getElementById("search").addEventListener("keyup", function () {
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
        alert("Wait! Check out our latest game deals before you go!");
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

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header");

    // Check if header exists before inserting the button
    if (header) {
        let darkModeToggle = document.createElement("button");
        darkModeToggle.innerText = "Toggle Dark Mode";
        darkModeToggle.classList.add("dark-mode-toggle");
        header.appendChild(darkModeToggle);

        // Toggle Dark Mode
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        });

        // Maintain user preference
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
        }
    } else {
        console.error("Header not found! Ensure all pages have a <header> element.");
    }
});

