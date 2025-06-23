// Smooth scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const ceoVideo = document.getElementById('ceo-video');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ceoVideo.play();
    } else {
      ceoVideo.pause(); // Optional: pause when out of view
    }
  });
}, {
  threshold: 0.5 // Video plays when 50% visible
});

observer.observe(ceoVideo);

