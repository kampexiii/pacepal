# Preparación para Back-End (Integración DWES)

Este documento explica cómo la arquitectura del Front-End (Cliente) ha sido diseñada para facilitar su futura integración con el Back-End (Servidor) en el módulo de Desarrollo Web en Entorno Servidor (DWES).

---

## 1. Modularidad del Código JavaScript

El código JS no está incrustado en el HTML, sino separado en archivos funcionales:

- `js/validaciones.js`: Contiene funciones puras que devuelven `true` o `false`. Estas funciones son agnósticas al DOM.
- `js/formulario.js`: Maneja la interacción con el DOM y llama a las validaciones.

**Ventaja para DWES:**
Esta separación permite que, en el futuro, `formulario.js` pueda ser modificado para enviar los datos validados a una API sin tocar la lógica de validación.

## 2. Funciones Preparadas para AJAX / Fetch

En `js/formulario.js`, la estructura actual del evento `submit` está lista para inyectar una llamada asíncrona.

**Estructura Actual:**

```javascript
if (errores === 0) {
    // ÉXITO LOCAL
    mostrarExito(...);
    setTimeout(redirigir, 1000);
}
```

**Estructura Futura (DWES):**

```javascript
if (errores === 0) {
    // PREPARACIÓN PARA FETCH
    const datos = new FormData(formRegistro);

    fetch('/api/registro', {
        method: 'POST',
        body: datos
    })
    .then(response => response.json())
    .then(data => {
        if(data.ok) mostrarExito(...);
        else mostrarErrorServidor(data.msg);
    });
}
```

El código está estructurado para que este cambio sea "plug-and-play".

## 3. Validación Doble (Cliente + Servidor)

Las reglas de validación definidas en `validaciones_detalladas.md` (Regex de email, complejidad de contraseña) son las mismas que deberán implementarse en el Back-End (PHP/Laravel).

- **Cliente:** Mejora la UX, feedback inmediato, reduce carga al servidor.
- **Servidor:** Garantiza la seguridad y la integridad de los datos (imprescindible).

El diseño actual asegura que el Front-End ya "filtra" la mayoría de errores comunes antes de que lleguen al servidor.

## 4. Gestión de Respuestas

El sistema de visualización de errores (`mostrarError(id, mensaje)`) es reutilizable. Si el servidor devuelve un error (ej. "El email ya está registrado"), el Front-End puede usar la misma función para mostrar ese error en el campo correspondiente, manteniendo la coherencia visual.

## 5. Seguridad

- Los campos de contraseña no tienen valor por defecto.
- Se usa `autocomplete` estándar para facilitar la gestión de contraseñas por el navegador.
- El envío por AJAX evitará la recarga de página, protegiendo mejor el estado de la aplicación.
