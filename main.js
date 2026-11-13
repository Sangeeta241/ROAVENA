
// ROAVENA - MAIN JAVASCRIPT

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// SHOW MORE DESTINATIONS

const showMoreBtn = document.getElementById("showMoreBtn");
const destinationCards = document.querySelectorAll(".destination-card");

if (showMoreBtn) {

    // Initially show only 5 destinations
    destinationCards.forEach((card, index) => {
        if (index >= 5) {
            card.classList.add("hidden-card");
        }
    });

    showMoreBtn.addEventListener("click", function () {

        const hiddenCards = document.querySelectorAll(
            ".destination-card.hidden-card"
        );

        if (hiddenCards.length > 0) {

            hiddenCards.forEach(card => {
                card.classList.remove("hidden-card");
            });

            showMoreBtn.textContent = "Show Less ↑";

        } else {

            destinationCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add("hidden-card");
                }
            });

            showMoreBtn.textContent = "Explore All Destinations ↓";

            document.getElementById("destinations").scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}