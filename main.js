
// Elements
const header = document.getElementById('header');
const menuTrigger = document.getElementById('menu-trigger');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const toastContainer = document.getElementById('toast-container');
const currentYearEl = document.getElementById('current-year');
const sections = document.querySelectorAll('section');

// Set current year in the footer
currentYearEl.textContent = new Date().getFullYear();

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Highlight active section in navigation
  let currentSection = '';
  let currentPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
      currentSection = section.id;
    }
  });
  
  // Update navigation links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
  
  mobileNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
  
  // Check for elements to animate on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    if (isElementInViewport(el)) {
      el.classList.add('visible');
    }
  });
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
  );
}

// Mobile menu toggle
function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  // Change button text to indicate loading
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Simulate form submission with timeout
  setTimeout(() => {
    showToast('Message sent! Thank you for reaching out.', 'success');
    contactForm.reset();
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;
  }, 1500);
}

// Toast notification
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  if (type === 'error') {
    toast.style.borderLeftColor = '#ef4444';
  } else if (type === 'success') {
    toast.style.borderLeftColor = '#10b981';
  }
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

// Event Listeners
window.addEventListener('scroll', handleScroll);
menuTrigger.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMobileMenu);
contactForm.addEventListener('submit', handleSubmit);

mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Initialize animation on scroll for initially visible elements
document.addEventListener('DOMContentLoaded', function() {
  handleScroll(); // Check which elements are initially visible
});

// Add click event to all links to smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
