# Historia de Usuario: Inicio de Sesión

**ID:** HU_CLIENTE_02
**Título:** Inicio de sesión de usuarios registrados
**Rol:** Usuario registrado
**Prioridad:** Alta

---

## 📝 Descripción

Como **usuario registrado** en PacePal, quiero **iniciar sesión con mis credenciales** para **acceder a mi perfil y gestionar mis actividades de running**.

---

## 🎯 Objetivo

Proporcionar un mecanismo seguro y sencillo para que los usuarios existentes puedan autenticarse en la plataforma, validando sus credenciales en el lado del cliente antes de realizar la petición al servidor.

---

## ✅ Criterios de Aceptación

1.  **Campos del Formulario:**

    - Debe solicitar: Correo Electrónico y Contraseña.
    - Debe incluir una opción de "Recuérdame" (checkbox).

2.  **Validaciones (Cliente):**

    - **Email:** Debe verificar que el formato sea válido antes de enviar.
    - **Contraseña:** Debe verificar que el campo no esté vacío.
    - El formulario no debe enviarse si alguno de los campos es inválido.

3.  **Feedback al Usuario:**

    - Si se intenta enviar el formulario vacío, deben aparecer mensajes de error específicos bajo cada campo.
    - Si el formato del email es incorrecto, debe indicarse claramente.
    - Tras un inicio de sesión simulado exitoso, debe mostrarse un mensaje de confirmación ("Inicio de sesión exitoso") y redirigir a la página principal (`index.html`).

4.  **Experiencia de Usuario (UX):**
    - Debe incluir un botón para mostrar/ocultar la contraseña (icono de ojo).
    - Debe permitir volver a la página de inicio o navegar al registro si no se tiene cuenta.

---

## 🔗 Relación con la Implementación

Esta historia de usuario se implementa en `pages/auth/login.html`, utilizando las funciones de validación compartidas en `js/validaciones.js` y la gestión de eventos en `js/formulario.js`.
