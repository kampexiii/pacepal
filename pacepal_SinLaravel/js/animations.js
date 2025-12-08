/**
 * Archivo: animations.js
 * Descripción: Lógica JavaScript para controlar las animaciones basadas en scroll y eventos.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('PacePal Animations Loaded');

    // -----------------------------------------------------------
    // 1. Intersection Observer para "Reveal on Scroll"
    // -----------------------------------------------------------
    // Aquí configuro el observador que detectará cuando los elementos entran en la pantalla.

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // El elemento debe ser 15% visible para activarse
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añado la clase que dispara la transición CSS
                entry.target.classList.add('is-visible');
                // Dejo de observar el elemento una vez animado (animación única)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecciono todos los elementos que quiero animar
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => revealObserver.observe(el));


    // -----------------------------------------------------------
    // 2. Header Sticky con cambio de estilo
    // -----------------------------------------------------------
    // Cambio la apariencia del header cuando el usuario hace scroll hacia abajo.

    const header = document.getElementById('site-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'py-2');
            header.classList.remove('py-3');
        } else {
            header.classList.remove('shadow-md', 'py-2');
            header.classList.add('py-3');
        }
    });
});
