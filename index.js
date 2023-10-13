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
const appearItems = document.querySelectorAll('.appear');

const delayAppearCallback = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('delay-inview');
        } else if (entry.isIntersecting && entry.target.classList.contains('delay-inview' || 'inview')) {
            entry.unobserve(entry.target);
        }
    });
}

const appearCallback = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        } else if (entry.isIntersecting && entry.target.classList.contains('delay-inview' || 'inview')) {
            entry.unobserve(entry.target);
        }
    });
}

const delayHomeSectionsObserver = new IntersectionObserver(delayAppearCallback);
const sectionsObserver = new IntersectionObserver(appearCallback, { threshold: 0.2 });

const homeHero = document.querySelector(".home-hero");

if (homeHero) {
    const homeCallback = function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionsObserver.disconnect();
                appearItems.forEach(item => delayHomeSectionsObserver.observe(item));
            } else {
                delayHomeSectionsObserver.disconnect();
                appearItems.forEach(item => sectionsObserver.observe(item));
            }
        });
    };
    const homeHeroObserver = new IntersectionObserver(homeCallback);
    homeHeroObserver.observe(homeHero);
} else {
    appearItems.forEach(item => sectionsObserver.observe(item));
}

// Code to change "what next" icon to "your tech stack"
const skillDiv = document.getElementById("skill-change")
const skillIcon = document.getElementById("skill-change-icon")
const skillText = document.getElementById("skill-change-text")

skillDiv.addEventListener("mouseover", () => {
    skillIcon.style.backgroundImage="url('https://img.icons8.com/ffffff/ios/50/sheets.png')"
    skillText.innerText="Your stack!"
})

skillDiv.addEventListener("mouseout", () => {
    skillIcon.style.backgroundImage="url('https://img.icons8.com/ffffff/ios/50/where.png')"
    skillText.innerText="What next?"
})