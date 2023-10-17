// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        // Calculate the target element's offset from the top of the page
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
  
        // Scroll to the target element with smooth behavior
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });


if (window.innerWidth <= 768) {
  window.addEventListener('scroll', function () {
      const skillsSection = document.getElementById('skills');
      if (!skillsSection) {
          return;
      }
      
      const rect = skillsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom >= 0) {
          const skillBoxes = document.querySelectorAll('.skill-box');
          skillBoxes.forEach(skillBox => {
              skillBox.classList.add('show-skill');
          });
      }
  });
}
