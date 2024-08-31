document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        
        // Toggle aria-expanded attribute
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
    });
});
