const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
 
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
 

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link');
 
function setActiveLink() {
  const scrollY = window.scrollY + 100; // offset for fixed header
 
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
 
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}
 
window.addEventListener('scroll', setActiveLink);

const scrollTopBtn = document.getElementById('scrollTopBtn');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
 
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('formSuccess');
 
function showError(input, errorEl, message) {
  input.classList.add('invalid');
  errorEl.textContent = message;
}
 
function clearError(input, errorEl) {
  input.classList.remove('invalid');
  errorEl.textContent = '';
}
 
function isValidEmail(value) {
  
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
 
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess.classList.remove('show');
 
  let isValid = true;
 
  const nameError = document.getElementById('nameError');
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, nameError, 'Please enter your name.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }
 

  const emailError = document.getElementById('emailError');
  if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email address.');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }
 
 
  const messageError = document.getElementById('messageError');
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, messageError, 'Message should be at least 10 characters.');
    isValid = false;
  } else {
    clearError(messageInput, messageError);
  }
 
  if (isValid) {
    formSuccess.classList.add('show');
    contactForm.reset();
  }
});
 

[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
  });
});