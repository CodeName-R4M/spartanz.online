function toggleMenu() {
  const navLinks = document.querySelector('.nav-links.mobile-menu');
  navLinks.classList.toggle('active');
}

// document.querySelectorAll('.event').forEach(event => {
//   event.addEventListener('click', function() {
//       this.classList.toggle('active');
//   });
// });

// document.querySelectorAll('.no-flip').forEach((element) => {
//   element.addEventListener('click', (event) => {
//       event.stopPropagation();
//   });
// });
