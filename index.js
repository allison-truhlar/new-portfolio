// Code for dropdown menu
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.querySelector(".nav-dropdown");

// Initialize default value for showDropdown
let isDropdownVisible = false;

// Toggle the dropdown menu on smaller screens and animate the hamburger menu
menuBtn.addEventListener("click", () => {
  if (isDropdownVisible) {
    menuBtn.classList.remove("change");
    menuBtn.setAttribute("aria-expanded", "false");
    dropdown.style.display = "none";
    isDropdownVisible = false;
  } else {
    menuBtn.classList.add("change");
    menuBtn.setAttribute("aria-expanded", "true");
    dropdown.style.display = "flex";
    isDropdownVisible = true;
  }
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (
    isDropdownVisible &&
    !menuBtn.contains(e.target) &&
    !dropdown.contains(e.target)
  ) {
    menuBtn.classList.remove("change");
    menuBtn.setAttribute("aria-expanded", "false");
    dropdown.style.display = "none";
    isDropdownVisible = false;
  }
});

// Code to watch for when a div with class home-appear enters the screen
// Following this article: https://dev.to/miacan2021/fade-in-animation-on-scroll-with-intersectionobserver-vanilla-js-4p27
const appearItems = document.querySelectorAll(".appear");

const delayAppearCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("delay-inview");
      delayHomeSectionsObserver.unobserve(entry.target);
    }
  });
};

const appearCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      sectionsObserver.unobserve(entry.target);
    }
  });
};

const delayHomeSectionsObserver = new IntersectionObserver(delayAppearCallback);
const sectionsObserver = new IntersectionObserver(appearCallback, {
  threshold: 0.01,
});

const hero = document.querySelector(".hero");

if (hero) {
  const homeCallback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionsObserver.disconnect();
        appearItems.forEach((item) => delayHomeSectionsObserver.observe(item));
      } else {
        delayHomeSectionsObserver.disconnect();
        appearItems.forEach((item) => sectionsObserver.observe(item));
      }
    });
  };
  const heroObserver = new IntersectionObserver(homeCallback);
  heroObserver.observe(hero);
} else {
  appearItems.forEach((item) => sectionsObserver.observe(item));
}
