// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var targetSectionId = this.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetSectionId);
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
