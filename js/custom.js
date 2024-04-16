

$(document).ready(function() {
    $('.footer-links-wrapper h3').click(function() {
    $(this).next('ul').slideToggle();
    $(this).find('.toggle-sign').text(function(_, text) {
            return text === '+' ? 'x' : '+';
                });
                });
                   // Initialize carousel
      $('#entertainmentCarousel').carousel();
            });
        
      
// Get the menu container element
const menuContainer = document.querySelector(".menu-container");
const navbarCollapse = document.querySelector(".navbar-collapse");

menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
       navbarCollapse.classList.toggle("show"); // Add or remove 'show' class
  
    if (menuContainer.classList.contains("active")) {
      navbarCollapse.style.opacity = "1"; // Ensure opacity is set to 1 when menu is active
      navbarCollapse.style.transform = "scale(1)"; // Ensure menu is scaled when active
    } else {
      navbarCollapse.style.opacity = "0"; // Set opacity to 0 when menu is inactive
      navbarCollapse.style.transform = "scale(0)"; // Set scale to 0 when menu is inactive
    }
   
});


document.addEventListener("DOMContentLoaded", function() {
  const dropdownIcons = document.querySelectorAll(".dropdown-icon");

  dropdownIcons.forEach(function(icon) {
      icon.addEventListener("click", function() {
          const list = this.parentElement.querySelector("ul");
          list.classList.toggle("show");
      });
  });
});
