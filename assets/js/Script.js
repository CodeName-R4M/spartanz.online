function toggleMenu() {
    const navLinks = document.querySelector('.nav-links.mobile-menu');
    navLinks.classList.toggle('active');
}
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.innerWidth > 768; // Detect if it's desktop view
  
    if (isDesktop) {
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });
      });
    }
  });
  
  window.addEventListener('resize', () => {
    const isDesktop = window.innerWidth > 768;
    const cards = document.querySelectorAll('.card');
  
    if (isDesktop) {
      cards.forEach(card => {
        card.addEventListener('click', () => {
          card.classList.toggle('flipped');
        });
      });
    } else {
      cards.forEach(card => {
        card.removeEventListener('click', () => {
          card.classList.toggle('flipped');
        });
      });
    }
  });
  document.querySelectorAll('.card').forEach(card => {
card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});
}); 
document.querySelectorAll('.no-flip').forEach((element) => {
element.addEventListener('click', (event) => {
  event.stopPropagation();
});
});