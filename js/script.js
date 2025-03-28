
  // Toggle mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const headerRight = document.querySelector('.header-right');
  const body = document.body;
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      headerRight.classList.toggle('active');
      body.classList.toggle('menu-open');
  });

  // Handle dropdown on mobile
  const dropdownBtns = document.querySelectorAll('.dropdown .dropbtn');
  
  dropdownBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          // Only handle click for mobile view
          if (window.innerWidth <= 992) {
              e.preventDefault();
              this.parentElement.classList.toggle('active');
          }
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
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
  window.addEventListener('resize', function() {
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

/* toggle dark mode button*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }