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

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
document.querySelectorAll('.hidden-left').forEach(el => observer.observe(el));