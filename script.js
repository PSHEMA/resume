// Simple script for mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
      });
  });
});