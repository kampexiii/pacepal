# Test Funcional — Login (PacePal)

## Objetivo

Comprobar que el formulario de inicio de sesión valida correctamente las credenciales y permite el acceso con datos válidos.

## Requisitos previos

1. Tener Chrome o Firefox instalado.
2. Tener la extensión **Selenium IDE** o **Katalon Recorder** instalada.
3. Tener el proyecto desplegado en un servidor local.

## Ejecución del Test

1. Abrir Selenium IDE / Katalon Recorder.
2. Importar el archivo `test_login.side` (Selenium) o `test_login.krec` (Katalon).
3. Ajustar la URL base si es necesario.
4. Ejecutar el test.

## Pasos automáticos (Detalle)

1. **Abrir la página**: `pages/auth/login.html`
2. **Validación Vacía**: Enviar formulario vacío → verificar errores.
3. **Validación Parcial**:
   - Rellenar solo email → verificar error en contraseña.
   - Rellenar solo contraseña → verificar error en email.
4. **Login Exitoso**:
   - Introducir email válido ("juan@example.com").
   - Introducir contraseña válida ("Pass123$").
   - Clicar "Iniciar sesión".
   - Verificar mensaje de éxito: "Inicio de sesión exitoso. Redirigiendo...".

## Resultado esperado

- El sistema impide el envío si faltan datos.
- Los mensajes de error son claros y visibles.
- El login exitoso muestra el mensaje de confirmación.

## Evidencias

Las evidencias de este test se basan en:

1. La ejecución exitosa de los scripts `test_login.side` (Selenium IDE) y `test_login.krec` (Katalon Recorder).
2. Las capturas de pantalla almacenadas en la carpeta `capturas/`, que documentan los estados clave del formulario.
   _Nota: No se incluyen grabaciones de vídeo en el repositorio; la ejecución de los scripts sirve como demostración funcional._

## Notas

- Si el mensaje de error del email no aparece visiblemente en el DOM (falta etiqueta `<p>`), el test podría fallar en ese paso específico. Se recomienda revisar la estructura HTML si esto ocurre.
