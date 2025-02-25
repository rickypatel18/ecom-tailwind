// right toggle
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var menuClose = document.getElementById("menu-close");
  var dropdown = document.getElementById("dropdown-menu");

  function toggleDropdown() {
    dropdown.classList.toggle("opacity-0");
    dropdown.classList.toggle("scale-95");
    dropdown.classList.toggle("translate-x-5");
    dropdown.classList.toggle("pointer-events-none");
  }

  if (menuToggle && dropdown && menuClose) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleDropdown();
    });

    menuClose.addEventListener("click", function () {
      toggleDropdown();
    });

    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !dropdown.contains(event.target)
      ) {
        dropdown.classList.add(
          "opacity-0",
          "scale-95",
          "translate-x-5",
          "pointer-events-none"
        );
      }
    });
  } else {
    console.error(
      "menu-toggle, menu-close, or dropdown-menu not found in the DOM."
    );
  }
});

// search toggle
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-id");
  const searchMenu = document.getElementById("search-dropdown");
  const searchClose = document.getElementById("search-close");

  // Show Search Dropdown with Delay
  searchIcon.addEventListener("click", function () {
    searchMenu.classList.remove("opacity-0", "pointer-events-none");
    searchMenu.classList.add("opacity-100");
    searchMenu.style.top = "0"; // Moves it into view
  });

  // Close Search Dropdown
  searchClose.addEventListener("click", function () {
    searchMenu.classList.add("opacity-0", "pointer-events-none");
    searchMenu.style.top = "-50vh"; // Moves it back up
  });
});

// category toggle for small device
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category-item");

  categories.forEach((category, index) => {
    category.addEventListener("click", function () {
      const subcategory = category.nextElementSibling;
      const icon = category.querySelector(".toggle-icon");

      const isOpen = !subcategory.classList.contains("hidden");

      // Close all subcategories
      document.querySelectorAll(".subcategory").forEach((menu) => {
        menu.classList.add("hidden");
      });

      document.querySelectorAll(".toggle-icon").forEach((icon) => {
        icon.classList.replace("fa-chevron-up", "fa-chevron-down");
      });

      // Toggle current subcategory
      if (!isOpen) {
        subcategory.classList.remove("hidden");
        icon.classList.replace("fa-chevron-down", "fa-chevron-up");
      }
    });
  });
});

// category toggle for medium device
document.addEventListener("DOMContentLoaded", function () {
  const categoryButton = document.getElementById("category-button-md");
  const dropdownMenu = document.getElementById("dropdown-menu-md");
  const categoryItems = document.querySelectorAll(".category-item-md");

  // Toggle Main Category Dropdown
  categoryButton.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle("opacity-0");
    dropdownMenu.classList.toggle("scale-95");
    dropdownMenu.classList.toggle("pointer-events-none");
  });

  // Handle Subcategory Toggle
  categoryItems.forEach((item) => {
    const subMenu = item.nextElementSibling; // The adjacent subcategory list
    const icon = item.querySelector(".toggle-icon");

    item.addEventListener("click", function (event) {
      event.stopPropagation();

      // Close all other subcategories first
      document.querySelectorAll(".subcategory").forEach((menu) => {
        if (menu !== subMenu) {
          menu.classList.add("hidden");
        }
      });

      document.querySelectorAll(".toggle-icon").forEach((iconEl) => {
        iconEl.classList.replace("fa-chevron-down", "fa-chevron-right");
      });

      // Toggle the current subcategory
      if (subMenu.classList.contains("hidden")) {
        subMenu.classList.remove("hidden");
        icon.classList.replace("fa-chevron-right", "fa-chevron-down");
      } else {
        subMenu.classList.add("hidden");
        icon.classList.replace("fa-chevron-down", "fa-chevron-right");
      }
    });
  });

  // Close Dropdown When Clicking Outside
  document.addEventListener("click", function (event) {
    if (
      !categoryButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add(
        "opacity-0",
        "scale-95",
        "pointer-events-none"
      );

      // Close all subcategories
      document.querySelectorAll(".subcategory").forEach((menu) => {
        menu.classList.add("hidden");
      });

      // Reset all arrow icons
      document.querySelectorAll(".toggle-icon").forEach((icon) => {
        icon.classList.replace("fa-chevron-down", "fa-chevron-right");
      });
    }
  });
});
