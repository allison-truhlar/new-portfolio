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