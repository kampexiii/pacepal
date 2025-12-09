# Validaciones Detalladas (Reglas de Negocio)

Este documento especifica las reglas de validación implementadas en `js/validaciones.js` y aplicadas en los formularios de PacePal.

---

## 1. Formulario de Registro

### A. Nombre y Apellidos

- **Regla:** El nombre completo no puede exceder de 2 palabras (Nombre + Apellido).
- **Implementación:** Se divide el string por espacios (`split(/\s+/)`) y se cuenta la longitud del array.
- **Restricción:** Solo se permiten letras y acentos. Longitud mínima de 2 caracteres por palabra.
- **Mensaje de Error:** "Nombre no válido. Use máximo 2 palabras, solo letras."

### B. Correo Electrónico

- **Regla:** Debe cumplir el estándar RFC 5322 simplificado.
- **Regex:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Verificación:** Presencia de `@`, dominio y extensión, sin espacios intermedios.
- **Mensaje de Error:** "Formato de correo incorrecto."

### C. Contraseña

- **Regla:** Alta seguridad requerida.
- **Requisitos:**
  - Mínimo 8 caracteres.
  - Al menos 1 letra mayúscula.
  - Al menos 1 letra minúscula.
  - Al menos 1 número.
  - Al menos 1 símbolo especial.
- **Regex:** `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/`
- **Mensaje de Error:** "La contraseña no cumple los requisitos."

### D. Confirmación de Contraseña

- **Regla:** Igualdad estricta.
- **Lógica:** `password === confirmPassword`
- **Mensaje de Error:** "Las contraseñas no coinciden."

### E. Tarjeta de Crédito (Condicional)

- **Regla:** Solo se valida si el campo es visible (Dirección + País rellenos).
- **Formato:** 16 dígitos numéricos.
- **Regex:** `/^\d{16}$/` (Se eliminan espacios en blanco antes de validar).
- **Mensaje de Error:** "Tarjeta inválida. Debe contener 16 dígitos."

### F. Checkboxes (Notificaciones / Revista)

- Son campos opcionales, no bloquean el envío del formulario, pero su estado se recoge al enviar.

---

## 2. Formulario de Login

### A. Email

- Se reutiliza la misma función de validación (`esEmailValido`) que en el registro.
- **Mensaje de Error:** "Correo no válido."

### B. Contraseña

- Validación simple de longitud mínima (evitar envío vacío).
- **Mensaje de Error:** "Contraseña incorrecta." (Mensaje genérico por seguridad).

---

## 3. Feedback Visual y UX

- **Mensajes de Error:** Se inyectan dinámicamente en etiquetas `<p class="form-error">` situadas inmediatamente debajo de cada input.
- **Estilos de Error:** La clase CSS `.input-error` añade un borde rojo y un ligero fondo rojizo al input afectado para destacar visualmente el fallo.
- **Éxito:** Si todas las validaciones pasan, se muestra un mensaje en verde (`#registro-exito` o `#login-exito`) y se simula una redirección tras un breve delay, sin recargar la página (SPA feel).
