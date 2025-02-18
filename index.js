let slideIndex = 1;
showSlides(slideIndex);

const slideTexts = [
  {
    heading: "Fresh & Healthy Organic Food",
    description: "Free shipping on all your orders. We deliver, you enjoy.",
  },
  {
    heading: "Premium Quality Groceries",
    description: "Handpicked groceries, delivered fresh to your door.",
  },
  {
    heading: "Best Deals on Fresh Produce",
    description: "Get discounts on fresh vegetables and fruits.",
  },
];

function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  let heading = document.getElementById("slide-heading");
  let description = document.getElementById("slide-description");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex - 1 ? "block" : "none";
  });

  dots.forEach((dot, index) => {
    dot.className = index === slideIndex - 1 ? "dot active" : "dot";
  });

  // **Ensure text content updates correctly**
  heading.textContent = slideTexts[slideIndex - 1].heading;
  description.textContent = slideTexts[slideIndex - 1].description;
}

//  toggle functions
function toggleDropdown() {
  const menu = document.getElementById("category-menu");
  const icon = document.getElementById("category-icon");

  // Toggle the dropdown visibility
  menu.classList.toggle("hidden");

  // Toggle the chevron icon
  if (menu.classList.contains("hidden")) {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
}

function selectCategory(category, event) {
  // Prevent event bubbling to close the dropdown prematurely
  event.stopPropagation();

  // Update the selected category name
  const categoryName = document.getElementById("category-name");
  categoryName.textContent = category;

  // Close the dropdown after selection
  const menu = document.getElementById("category-menu");
  const icon = document.getElementById("category-icon");

  menu.classList.add("hidden");
  icon.classList.remove("fa-chevron-up");
  icon.classList.add("fa-chevron-down");
}
