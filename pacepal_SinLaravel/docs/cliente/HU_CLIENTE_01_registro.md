# Historia de Usuario: Registro de Usuario

**ID:** HU_CLIENTE_01
**Título:** Registro de nuevos usuarios en la plataforma PacePal
**Rol:** Usuario visitante
**Prioridad:** Alta

---

## 📝 Descripción

Como **usuario visitante** interesado en la plataforma, quiero **poder registrarme a través de un formulario web** para **crear mi cuenta personal y acceder a las funcionalidades de la comunidad PacePal**.

---

## 🎯 Objetivo

Implementar un formulario de registro funcional, accesible y validado en el lado del cliente que permita la captación de nuevos usuarios, asegurando la integridad de los datos antes de su envío al servidor.

---

## ✅ Criterios de Aceptación

1.  **Campos del Formulario:**

    - El formulario debe solicitar obligatoriamente: Nombre y Apellidos, Correo Electrónico, Contraseña y Confirmación de Contraseña.
    - Debe incluir campos opcionales: Sexo, Fecha de Nacimiento, Dirección y País.
    - Debe incluir checkboxes para "Notificaciones" y "Revista Digital".

2.  **Validaciones en Tiempo Real (Cliente):**

    - **Nombre:** Debe validar que no exceda 2 palabras y solo contenga letras.
    - **Email:** Debe cumplir con el formato estándar de correo electrónico.
    - **Contraseña:** Mínimo 8 caracteres, incluyendo mayúscula, minúscula, número y símbolo.
    - **Confirmación:** Debe coincidir exactamente con la contraseña.

3.  **Comportamiento Dinámico:**

    - Si el usuario rellena "Dirección" y selecciona un "País", debe aparecer automáticamente un campo adicional para introducir "Tarjeta de Crédito/Débito".
    - Si se borra la dirección, el campo de tarjeta debe volver a ocultarse.

4.  **Feedback al Usuario:**

    - Los errores de validación deben mostrarse claramente debajo de cada campo afectado en color rojo.
    - El borde del input debe cambiar de color para indicar error.
    - Al completar el registro exitosamente, debe mostrarse un mensaje de éxito sin recargar la página y redirigir al login tras unos segundos.

5.  **Accesibilidad:**
    - El formulario debe ser navegable por teclado.
    - Los mensajes de error deben ser legibles por lectores de pantalla.

---

## 🔗 Relación con la Implementación

Esta historia de usuario se materializa en el archivo `pages/auth/registro.html` y su lógica asociada en `js/formulario.js` y `js/validaciones.js`.
