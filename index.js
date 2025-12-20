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

// Desktop only - toggle aria-expanded on hover for screen readers
if (window.innerWidth >= 768) {
  const projectsLink = document.querySelector('.nav-bar .has-submenu > a');

  if (projectsLink) {
    projectsLink.parentElement.addEventListener('mouseenter', () => {
      projectsLink.setAttribute('aria-expanded', 'true');
    });

    projectsLink.parentElement.addEventListener('mouseleave', () => {
      projectsLink.setAttribute('aria-expanded', 'false');
    });
  }
}

// Debug: Log CSS variables and font information
console.log('=== DEBUG INFO ===');
console.log('Viewport width:', window.innerWidth);
console.log('Viewport height:', window.innerHeight);
console.log('Device pixel ratio:', window.devicePixelRatio);

const rootStyles = getComputedStyle(document.documentElement);
console.log('CSS Variables:');
console.log('  --project-hero-overlap-top:', rootStyles.getPropertyValue('--project-hero-overlap-top').trim());
console.log('  --project-hero-overlap-bottom:', rootStyles.getPropertyValue('--project-hero-overlap-bottom').trim());
console.log('  --home-hero-overlap-top:', rootStyles.getPropertyValue('--home-hero-overlap-top').trim());
console.log('  --home-hero-overlap-bottom:', rootStyles.getPropertyValue('--home-hero-overlap-bottom').trim());

const htmlStyles = getComputedStyle(document.documentElement);
console.log('Root font-size:', htmlStyles.fontSize);

// Check if project hero exists
const projectHero = document.querySelector('.project-hero');
if (projectHero) {
  const heroTop = projectHero.querySelector('.hero-top');
  const heroBottom = projectHero.querySelector('.hero-bottom');

  if (heroTop) {
    const heroTopStyles = getComputedStyle(heroTop);
    console.log('Project hero-top margin-bottom:', heroTopStyles.marginBottom);
  }

  if (heroBottom) {
    const heroBottomStyles = getComputedStyle(heroBottom);
    console.log('Project hero-bottom margin-top:', heroBottomStyles.marginTop);
  }
}

// Check if home hero exists
const homeHero = document.querySelector('.home-hero');
if (homeHero) {
  const heroTop = homeHero.querySelector('.hero-top');
  const heroBottom = homeHero.querySelector('.hero-bottom');

  if (heroTop) {
    const heroTopStyles = getComputedStyle(heroTop);
    console.log('Home hero-top margin-bottom:', heroTopStyles.marginBottom);
  }

  if (heroBottom) {
    const heroBottomStyles = getComputedStyle(heroBottom);
    console.log('Home hero-bottom margin-top:', heroBottomStyles.marginTop);
  }
}

// Check font loading
document.fonts.ready.then(() => {
  console.log('Fonts loaded:', document.fonts.size);
  document.fonts.forEach((font) => {
    console.log(`  - ${font.family} ${font.weight} ${font.style}`);
  });
});
