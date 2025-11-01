// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing animation in hero
const text = "Learn Computer & English Skills for a Better Future";
const typingElement = document.getElementById("typing-text");
let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting) {
    typingElement.textContent = text.slice(0, index++);
  } else {
    typingElement.textContent = text.slice(0, index--);
  }

  if (index === text.length + 1) {
    isDeleting = true;
    setTimeout(type, 2000);
  } else if (index === 0) {
    isDeleting = false;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, isDeleting ? 40 : 80);
  }
}
type();

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));
