/**
 * formulario.js
 * Gestión de la interacción del formulario (Validaciones, UI, etc.)
 */

document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------------------------------
    // 1. Toggle Password (Ojo / Ojo Tachado)
    // -----------------------------------------------------------
    // Esta funcionalidad es de UX/UI y no depende de las validaciones de Cliente.
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const isHidden = input.type === 'password';
            input.type = isHidden ? 'text' : 'password';

            // Cambiar icono usando Bootstrap Icons
            if (isHidden) {
                btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
                btn.setAttribute('aria-label', 'Ocultar contraseña');
            } else {
                btn.innerHTML = '<i class="bi bi-eye"></i>';
                btn.setAttribute('aria-label', 'Mostrar contraseña');
            }
        });
    });


    // -----------------------------------------------------------
    // 2. Gestión de Formularios (Registro y Login)
    // -----------------------------------------------------------

    const formRegistro = document.getElementById('form-registro');
    const formLogin = document.getElementById('form-login');

    // ===========================================================
    // FUNCIONES AUXILIARES
    // ===========================================================

    /**
     * Pinta un mensaje de error bajo un campo
     */
    function mostrarError(idCampo, mensaje) {
        const errorP = document.getElementById(`error-${idCampo}`);
        const input = document.getElementById(idCampo);

        if (errorP) errorP.textContent = mensaje;
        if (input) input.classList.add('input-error');
    }

    /**
     * Limpia todos los errores de un formulario
     */
    function limpiarErrores(form) {
        form.querySelectorAll('.form-error').forEach(p => p.textContent = '');
        form.querySelectorAll('.input-error').forEach(i => i.classList.remove('input-error'));
    }

    /**
     * Muestra un mensaje de éxito general
     */
    function mostrarExito(id, mensaje) {
        const contenedor = document.getElementById(id);
        if (contenedor) contenedor.textContent = mensaje;
    }


    // ===========================================================
    // 3. FORMULARIO DE REGISTRO
    // ===========================================================
    if (formRegistro) {

        // Mostrar u ocultar campo tarjeta dinámicamente
        const direccionInput = document.getElementById("direccion");
        const paisSelect = document.getElementById("pais");
        const campoTarjeta = document.getElementById("grupo-tarjeta");
        const inputTarjeta = document.getElementById("tarjeta");

        // Comprueba si Dirección y País están completos y muestra u oculta el campo Tarjeta
        function actualizarVisibilidadTarjeta() {
            const direccion = direccionInput.value.trim();
            const pais = paisSelect.value.trim();

            if (direccion !== "" && pais !== "") {
                campoTarjeta.classList.remove("oculto");
            } else {
                campoTarjeta.classList.add("oculto");
                // Opcional: limpiar contenido e invalidaciones previas
                if (inputTarjeta) inputTarjeta.value = "";
            }
        }

        if (direccionInput && paisSelect && campoTarjeta) {
            direccionInput.addEventListener("input", actualizarVisibilidadTarjeta);
            paisSelect.addEventListener("change", actualizarVisibilidadTarjeta);
            
            // Asegurar estado inicial correcto
            actualizarVisibilidadTarjeta();
        }

        formRegistro.addEventListener('submit', (event) => {
            event.preventDefault();
            limpiarErrores(formRegistro);

            let errores = 0;

            // Obtener valores
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirm = document.getElementById("confirm-password").value;
            const fecha = document.getElementById("fecha-nacimiento").value;
            const tarjeta = document.getElementById("tarjeta").value;

            // Validación nombre
            if (!esNombreValido(nombre)) {
                mostrarError("nombre", "Nombre no válido. Use máximo 2 palabras, solo letras.");
                errores++;
            }

            // Validación email
            if (!esEmailValido(email)) {
                mostrarError("email", "Formato de correo incorrecto.");
                errores++;
            }

            // Validación contraseña
            if (!esPasswordValida(password)) {
                mostrarError("password", "La contraseña no cumple los requisitos.");
                errores++;
            }

            // Confirmación de contraseña
            if (!coincidenPasswords(password, confirm)) {
                mostrarError("confirm-password", "Las contraseñas no coinciden.");
                errores++;
            }

            // Validación fecha (opcional)
            if (fecha) {
                const fechaError = validarFechaNacimiento(fecha);
                if (fechaError !== "") {
                    mostrarError("fecha-nacimiento", fechaError);
                    errores++;
                }
            }

            // Validación tarjeta (solo si visible)
            if (!grupoTarjeta.classList.contains("oculto")) {
                if (!esTarjetaValida(tarjeta)) {
                    mostrarError("tarjeta", "Tarjeta inválida. Debe contener 16 dígitos.");
                    errores++;
                }
            }

            if (errores > 0) return;

            // ÉXITO
            mostrarExito("registro-exito", "Cuenta creada con éxito. Redirigiendo...");

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
        });

    }


    // ===========================================================
    // 4. FORMULARIO LOGIN
    // ===========================================================
    if (formLogin) {
        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();
            limpiarErrores(formLogin);

            let errores = 0;

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (!esEmailValido(email)) {
                mostrarError("login-email", "Correo no válido.");
                errores++;
            }

            if (password.trim().length < 4) {
                mostrarError("login-password", "Contraseña incorrecta.");
                errores++;
            }

            if (errores > 0) return;

            mostrarExito("login-exito", "Inicio de sesión exitoso. Redirigiendo...");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        });
    }


    // ===========================================================
    // 5. CONEXIÓN FUTURA CON BACK-END (DWES)
    // ===========================================================

    // function enviarDatosAlServidor(datos) {
    //   // TODO: implementar llamada fetch/AJAX al servidor DWES.
    // }

});
