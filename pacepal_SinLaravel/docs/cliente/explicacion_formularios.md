# Explicación Técnica de los Formularios

Este documento detalla la estructura, comportamiento y diseño de los formularios implementados en el módulo de Cliente para el proyecto PacePal.

---

## 1. Formulario de Registro (`registro.html`)

El formulario de registro es el punto de entrada para nuevos usuarios. Se ha diseñado para capturar la información esencial manteniendo una experiencia de usuario fluida.

### 📋 Campos del Formulario

**Obligatorios:**

- **Nombre y Apellidos:** Input de texto.
- **Correo Electrónico:** Input de tipo email.
- **Contraseña:** Input de tipo password con toggle de visibilidad.
- **Confirmar Contraseña:** Input de tipo password.

**Opcionales:**

- **Sexo:** Select (Hombre, Mujer, Otro).
- **Fecha de Nacimiento:** Input de tipo date.
- **Dirección:** Input de texto (Trigger del comportamiento dinámico).
- **País:** Select (Trigger del comportamiento dinámico).
- **Tarjeta:** Input de texto (Oculto por defecto).

**Preferencias:**

- **Notificaciones:** Checkbox.
- **Revista Digital:** Checkbox.

### 🔄 Comportamiento Dinámico

Se ha implementado una lógica condicional en JavaScript (`js/formulario.js`) para mejorar la UX:

- **Estado Inicial:** El campo de "Tarjeta" está oculto (`display: none` vía clase CSS `.oculto`).
- **Activación:** Se añaden _event listeners_ a los campos "Dirección" y "País".
- **Lógica:** Cuando el usuario escribe algo en "Dirección" **Y** selecciona un "País", el script elimina la clase `.oculto` del contenedor de la tarjeta, haciéndolo visible con una transición suave.
- **Reversión:** Si el usuario borra la dirección, el campo de tarjeta vuelve a ocultarse automáticamente.

### 🧠 Lógica de Input

- Se utiliza el evento `submit` para interceptar el envío del formulario.
- `event.preventDefault()` detiene la recarga de la página.
- Se ejecutan secuencialmente las funciones de validación importadas de `validaciones.js`.
- Si hay errores, se inyectan mensajes en el DOM (`textContent`) y se añaden clases de error (`.input-error`) a los inputs.

### 🎨 Diseño Adaptado (DIW)

- **Paleta:** Uso de variables CSS (`--color-primary`, `--color-text-main`) para coherencia con la landing.
- **Modo Oscuro:** Integración completa con `theme.js`. El formulario adapta sus fondos y textos automáticamente al cambiar el tema.
- **Mobile-First:** Los inputs ocupan el 100% del ancho en móviles y se ajustan en pantallas grandes mediante Bootstrap Grid.

---

## 2. Formulario de Login (`login.html`)

Diseñado para ser rápido y directo, facilitando el acceso a usuarios recurrentes.

### 📋 Campos Incluidos

- **Correo Electrónico:** Validación de formato en tiempo real.
- **Contraseña:** Validación de no-vacío.
- **Recuérdame:** Checkbox para persistencia de sesión (simulada).

### ⚙️ Funcionamiento

1.  El usuario introduce credenciales.
2.  Al pulsar "Iniciar sesión", JS valida que el email tenga formato correcto y la contraseña no esté vacía.
3.  Si es válido, muestra mensaje de éxito `#login-exito` y redirige a `index.html` tras 1 segundo.

### 🔗 Integración con Navegación

- Incluye enlace directo a "Crear cuenta" para usuarios no registrados.
- Botón "Inicio" para volver a la landing page sin loguearse.
- Toggle de tema (Sol/Luna) integrado en la cabecera del formulario.
