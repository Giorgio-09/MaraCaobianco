// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

// Animazioni scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Anima solo una volta
        }
    });
}, {
    threshold: 0.1 // Mostra quando almeno il 10% dell'elemento è visibile
});

// Osserva gli elementi con la classe "animate"
document.querySelectorAll('.animate').forEach(el => observer.observe(el));
