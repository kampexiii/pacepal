/**
 * formulario.js
 * Gestión de la interacción del formulario (Validaciones, UI, etc.)
 */

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------
    // 1. Toggle Password (Ojo / Ojo Tachado)
    // -----------------------------------------------------------
    // Esta funcionalidad es de UX/UI y no depende de las validaciones de Cliente.
    // Se mantiene activa para facilitar la interacción.
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';

            // Cambiar icono usando Bootstrap Icons
            if (isHidden) {
                // Ahora se ve el texto -> icono de ocultar (ojo tachado)
                btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
                btn.setAttribute('aria-label', 'Ocultar contraseña');
            } else {
                // Ahora está oculto -> icono de mostrar (ojo normal)
                btn.innerHTML = '<i class="bi bi-eye"></i>';
                btn.setAttribute('aria-label', 'Mostrar contraseña');
            }
        });
    });

    // -----------------------------------------------------------
    // 2. Gestión de Formularios (Registro y Login)
    // -----------------------------------------------------------
    
    // Archivo: formulario.js
    // Aquí preparo la estructura para gestionar los formularios de registro y login.
    // La lógica de validación y mensajes la implementará Pacheco en este archivo.

    // TODO Pacheco:
    // 1. Obtener referencias a los formularios de registro y login.
    // const formRegistro = document.getElementById('form-registro');
    // const formLogin = document.getElementById('form-login');

    // 2. Añadir listeners para el evento submit en ambos formularios.
    // if (formRegistro) {
    //   // formRegistro.addEventListener('submit', function (event) {
    //   //   // TODO Pacheco: prevenir envío, leer campos, llamar a validaciones.js
    //   //   // y mostrar mensajes de error o éxito sin recargar la página.
    //   // });
    // }

    // if (formLogin) {
    //   // formLogin.addEventListener('submit', function (event) {
    //   //   // TODO Pacheco: validar email y contraseña del login.
    //   // });
    // }

    // 3. Crear funciones auxiliares para:
    //    - pintar errores bajo cada input,
    //    - resaltar campos con error,
    //    - mostrar mensajes de éxito,
    //    - limpiar mensajes al corregir el campo.
    // // function mostrarError(campo, mensaje) { ... }
    // // function limpiarErrores(form) { ... }

    // 4. Integrar la lógica con validaciones.js:
    //    - Usar esNombreValido, esEmailValido, esPasswordValida, etc.
    //    - Usar debeMostrarTarjeta para decidir si se enseña el campo tarjeta.

    // 5. Dejar preparado el punto donde se conectará con el futuro Back-End (DWES).
    //    Por ejemplo:
    //    // function enviarDatosAlServidor(datos) {
    //    //   // TODO Pacheco y DWES: llamada fetch/AJAX al servidor.
    //    // }

});
