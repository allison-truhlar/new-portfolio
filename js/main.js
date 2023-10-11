const navbar = document.getElementById('navbar');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
  prevScrollPos = currentScrollPos;
};