// Code for dropdown menu
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('nav-dropdown-link-container');

// Initialize default value for showDropdown
let isDropdownVisible = false;

// Toggle the dropdown menu on smaller screens and animate the hamburger menu
menuBtn.addEventListener('click', () => {
    if (isDropdownVisible){
        menuBtn.classList.remove("change")
        dropdown.style.display = "none"
        isDropdownVisible = false
    } else if (!isDropdownVisible){
        menuBtn.classList.add('change');
        dropdown.style.display = "flex"
        isDropdownVisible = true
    }
});


// Code to watch for when a div with class appear enters the screen
// Following this article: https://dev.to/miacan2021/fade-in-animation-on-scroll-with-intersectionobserver-vanilla-js-4p27
const appearItems = document.querySelectorAll('.appear'); 
const callback = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else if (entry.isIntersecting && entry.target.classList.contains('inview')){
        entry.unobserve(entry.target);
    }
  });
}
const intersectionObserver = new IntersectionObserver(callback);
for(let i=0; i < appearItems.length; i++){
    intersectionObserver.observe(appearItems[i]);
 }
