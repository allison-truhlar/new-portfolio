const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('nav-dropdown');

// Toggle the dropdown menu on smaller screens and animate the hamburger menu
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('change');
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});