
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    productCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;
const totalItems = items.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + totalItems) % totalItems;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % totalItems;
  updateCarousel();
});


setInterval(() => {
  index = (index + 1) % totalItems;
  updateCarousel();
}, 5000);
