const menuToggle = document.getElementById('menuToggle');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show-left');
        }
    });
});

// Applica l’osservatore agli elementi con classe hidden o hidden-left
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
document.querySelectorAll('.hidden-left').forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    elements.forEach(el => observer.observe(el));
});