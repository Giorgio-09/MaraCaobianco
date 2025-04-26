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


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita il refresh della pagina

    emailjs.sendForm('service_jwd2wwb', 'template_eje31pb', this)
    .then(function() {
        alert('Messaggio inviato con successo!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Errore durante l\'invio: ' + JSON.stringify(error));
    });
});