// Function to simulate typing effect
function typeEffect(element, speed) {
  const text = element.innerHTML;
  element.innerHTML = '';

  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Function to trigger the typing effect
function startTypingEffect() {
  const aboutMeSection = document.querySelector('#about');
  const paragraphs = aboutMeSection.getElementsByTagName('p');

  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    typeEffect(paragraph, 10);
  }
}

// Trigger typing effect when the page loads
window.addEventListener('DOMContentLoaded', startTypingEffect);

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    const offset = 150; // Adjust the offset as needed
    const targetPosition = targetElement.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Sticky navigation
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Scroll Reveal Animation
ScrollReveal().reveal('.section', { delay: 200, distance: '50px', easing: 'ease-in-out' });
