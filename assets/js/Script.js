function toggleMenu() {
  const navLinks = document.querySelector('.nav-links.mobile-menu');

  if (navLinks) {
    navLinks.classList.toggle('active');
  } else {
    console.error("Menu element not found! Check if '.nav-links.mobile-menu' exists in HTML.");
  }
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
