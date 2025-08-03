// script.js

// Typing effect for the introduction
const typingText = document.getElementById('typing-text');
const words = ['Moatasem.', 'A Developer.', 'An Innovator.']; // More professional messages
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex++;
    if (wordIndex === words.length) wordIndex = 0;
    setTimeout(type, 500);
  }
}

// Start the typing effect and manage navbar active state when the page loads
document.addEventListener('DOMContentLoaded', () => {
  type();

  const navLinks = document.querySelectorAll('.navbar ul li a');

  // Function to set active nav link based on current URL or scroll position
  const setActiveNavLink = () => {
    navLinks.forEach(link => link.classList.remove('active')); // Remove active from all first

    const currentPath = window.location.pathname;
    const isProjectsPage = currentPath.includes("projects.html");

    if (isProjectsPage) {
        // If on projects.html, activate the "Projects" link
        const projectsLink = document.querySelector('.navbar ul li a[href="projects.html"]');
        if (projectsLink) {
            projectsLink.classList.add('active');
        }
    } else {
        // If on home.html (or any other page), handle section-based active links
        let currentActiveSection = 'home'; // Default to home

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 90; // Offset for fixed navbar
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentActiveSection = section.id;
            }
        });

        // Activate the link corresponding to the current section
        const activeLink = document.querySelector(`.navbar ul li a[href="#${currentActiveSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
  };

  // Set initial active link
  setActiveNavLink();

  // Update active navigation link on scroll for home.html
  window.addEventListener('scroll', () => {
    if (!window.location.pathname.includes("projects.html")) {
        // Only update on scroll if not on the projects page
        setActiveNavLink();
    }
  });

  // Smooth scroll for internal links on home.html
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // Only prevent default and smooth scroll if it's an internal link on the same page
      if (this.pathname === window.location.pathname) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
      }
    });
  });
});