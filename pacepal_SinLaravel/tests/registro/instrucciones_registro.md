# Test Funcional — Registro (PacePal)

## Objetivo

Comprobar que el formulario de registro funciona correctamente, mostrando los errores esperados y permitiendo un registro exitoso sin recargar la página.

## Requisitos previos

1. Tener Chrome o Firefox instalado.
2. Tener la extensión **Selenium IDE** o **Katalon Recorder** instalada en el navegador.
3. Tener el proyecto desplegado en un servidor local (ej. XAMPP) o accesible vía URL.

## Ejecución del Test

1. Abrir Selenium IDE / Katalon Recorder.
2. Importar el archivo `test_registro.side` (Selenium) o `test_registro.krec` (Katalon).
3. Asegurarse de que la URL base coincida con tu entorno local (ej. `http://localhost/pacepal/pacepal_SinLaravel`).
4. Ejecutar el test completo.

## Pasos automáticos (Detalle)

1. **Abrir la página**: `pages/auth/registro.html`
2. **Validación Vacía**: Enviar formulario vacío → verificar errores visibles en Nombre, Email, Password y Confirmación.
3. **Validación Password**: Introducir contraseña inválida ("invalid") → verificar mensaje de error.
4. **Validación Email**: Introducir email inválido ("invalid-email") → verificar mensaje de error.
5. **Comportamiento Dinámico**:
   - Rellenar Dirección y País → Verificar que aparece el campo Tarjeta.
   - Borrar Dirección → Verificar que el campo Tarjeta se oculta.
6. **Registro Exitoso**:
   - Rellenar todos los campos con datos válidos (Nombre, Email, Password robusta, Dirección, Tarjeta).
   - Clicar "Crear cuenta".
   - Verificar mensaje de éxito: "Cuenta creada con éxito. Redirigiendo...".

## Resultado esperado

- El formulario valida correctamente cada campo.
- Los mensajes de error aparecen debajo de cada input correspondiente.
- El campo de tarjeta aparece/desaparece según la lógica de negocio.
- El registro exitoso muestra el mensaje de confirmación sin recargar la página.

## Evidencias

Las evidencias de este test se basan en:

1. La ejecución exitosa de los scripts `test_registro.side` (Selenium IDE) y `test_registro.krec` (Katalon Recorder).
2. Las capturas de pantalla almacenadas en la carpeta `capturas/`, que documentan los estados clave del formulario.
   _Nota: No se incluyen grabaciones de vídeo en el repositorio; la ejecución de los scripts sirve como demostración funcional._

## Notas

- Si se ejecuta en GitHub Pages, ajustar la URL base.
- Los selectores CSS/ID dependen de la estructura actual de `registro.html`. No modificar los IDs del HTML.
