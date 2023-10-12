// Code for dropdown menu
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('nav-dropdown-link-container');

// Initialize default value for showDropdown
let isDropdownVisible = false;

// Toggle the dropdown menu on smaller screens and animate the hamburger menu
menuBtn.addEventListener('click', () => {
    if (isDropdownVisible) {
        menuBtn.classList.remove("change")
        dropdown.style.display = "none"
        isDropdownVisible = false
    } else if (!isDropdownVisible) {
        menuBtn.classList.add('change');
        dropdown.style.display = "flex"
        isDropdownVisible = true
    }
});


// Code to watch for when a div with class home-appear enters the screen
// Following this article: https://dev.to/miacan2021/fade-in-animation-on-scroll-with-intersectionobserver-vanilla-js-4p27
const homeAppearItems = document.querySelectorAll('.home-appear');

const delayHomeAppearCallback = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('delay-inview');
        } else if (entry.isIntersecting && entry.target.classList.contains('delay-inview' || 'inview')) {
            entry.unobserve(entry.target);
        }
    });
}

const homeAppearCallback = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        } else if (entry.isIntersecting && entry.target.classList.contains('delay-inview' || 'inview')) {
            entry.unobserve(entry.target);
        }
    });
}

const delayHomeSectionsObserver = new IntersectionObserver(delayHomeAppearCallback);
const homeSectionsObserver = new IntersectionObserver(homeAppearCallback);

// Check if home-hero class exists before using homeHeroObserver
const homeHero = document.querySelector(".home-hero");
if (homeHero) {
    const homeCallback = function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Home hero is intersecting the viewport");
                for (let i = 0; i < homeAppearItems.length; i++) {
                    delayHomeSectionsObserver.observe(homeAppearItems[i]);
                }
            } else if (!entry.isIntersecting) {
                console.log("Home hero is NOT intersecting the viewport");
                for (let i = 0; i < homeAppearItems.length; i++) {
                    homeSectionsObserver.observe(homeAppearItems[i]);
                }
            }
        });
    };
    const homeHeroObserver = new IntersectionObserver(homeCallback);
    homeHeroObserver.observe(homeHero);
} else {
    // If home-hero class is not found, use sectionsObserver for appearItems
    const appearItems = document.querySelectorAll('.appear');
    const appearCallback = function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            } else if (entry.isIntersecting && entry.target.classList.contains('inview')) {
                entry.unobserve(entry.target);
            }
        });
    }
    const sectionsObserver = new IntersectionObserver(appearCallback);
    for (let i = 0; i < appearItems.length; i++) {
        sectionsObserver.observe(appearItems[i]);
    }
}