/**
 * Archivo: theme.js
 * Descripción: Lógica para el cambio de tema (Claro/Oscuro) y persistencia.
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;

    // 1. Leer preferencia guardada o usar default
    const savedTheme = localStorage.getItem('pacepal-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Aplicar tema inicial
    applyTheme(currentTheme);

    // 2. Función para aplicar tema
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('pacepal-theme', theme);
        currentTheme = theme;

        // Actualizar icono
        if (themeIcon) {
            // Limpiar texto si existiera (compatibilidad)
            themeIcon.textContent = '';

            // Resetear clases de iconos
            themeIcon.classList.remove('bi-sun-fill', 'bi-moon-stars-fill');

            // Asignar icono según tema
            if (theme === 'dark') {
                themeIcon.classList.add('bi-sun-fill');
            } else {
                themeIcon.classList.add('bi-moon-stars-fill');
            }
        }
    }

    // 3. Event Listener para el botón
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});
