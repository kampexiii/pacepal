# Guía de Ejecución de Tests Funcionales

Esta guía explica cómo ejecutar las pruebas automatizadas diseñadas para validar el correcto funcionamiento de los formularios de Registro y Login de PacePal.

---

## 1. Herramientas Necesarias

Para ejecutar los tests, necesitas instalar una de las siguientes extensiones en tu navegador (Chrome o Firefox):

- **Selenium IDE:** [Descargar para Chrome](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd) | [Descargar para Firefox](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/)
- **Katalon Recorder:** [Descargar](https://www.katalon.com/katalon-recorder-ide/)

## 2. Estructura de Tests

Los tests se encuentran en la carpeta `tests/` del proyecto:

- `tests/registro/`: Contiene scripts para probar el registro.
- `tests/login/`: Contiene scripts para probar el inicio de sesión.

Formatos disponibles:

- `.side`: Archivo de proyecto para **Selenium IDE**.
- `.krec`: Archivo de exportación para **Katalon Recorder**.

## 3. Cómo Ejecutar un Test (Ejemplo con Selenium IDE)

1.  **Abrir Selenium IDE:** Haz clic en el icono de la extensión en tu navegador.
2.  **Importar Proyecto:** Selecciona "Open an existing project".
3.  **Cargar Archivo:** Navega a `pacepal_SinLaravel/tests/registro/test_registro.side`.
4.  **Configurar URL:** Asegúrate de que la URL base en la parte superior coincida con tu entorno local (ej. `http://localhost/pacepal/pacepal_SinLaravel`).
5.  **Ejecutar:** Haz clic en el botón "Run all tests" (icono de Play).

## 4. Qué Validar (Criterios de Éxito)

### Test de Registro

- **Paso 1 (Errores):** El test intentará enviar el formulario vacío. Debes ver mensajes rojos bajo cada input.
- **Paso 2 (Dinámico):** El test escribirá una dirección y país. Debes ver aparecer el campo "Tarjeta". Luego lo borrará y el campo debe desaparecer.
- **Paso 3 (Éxito):** El test rellenará datos válidos. Debes ver el mensaje verde "Cuenta creada con éxito".

### Test de Login

- **Paso 1 (Errores):** Intentará login vacío o con datos parciales. Debes ver los errores correspondientes.
- **Paso 2 (Éxito):** Introducirá credenciales válidas y verificará el mensaje de éxito.

## 5. Interpretación de Resultados

- **Verde (Pass):** Todos los pasos se ejecutaron correctamente y las aserciones (validaciones de texto/visibilidad) coincidieron.
- **Rojo (Fail):** Algo falló. Puede ser que un elemento no se encontró o un texto de error no coincidió. Revisa el log de Selenium para ver el detalle.

## 6. Ejecución en GitHub Pages

Si deseas probar los tests contra la versión desplegada en GitHub Pages:

1.  Abre el archivo `.side` en Selenium IDE.
2.  Cambia la **Base URL** por la URL de tu repositorio (ej. `https://kampexiii.github.io/pacepal/pacepal_SinLaravel`).
3.  Ejecuta los tests normalmente.

## 7. Evidencias

Las capturas de pantalla de las ejecuciones exitosas se almacenan en:

- `tests/registro/capturas/`
- `tests/login/capturas/`

Estas imágenes sirven como prueba documental del correcto funcionamiento del sistema.

---

## 8. Pruebas Funcionales — Registro (Katalon Recorder)

### Objetivo de la prueba

Validar el correcto funcionamiento del flujo de registro de usuarios en la plataforma PacePal, asegurando que las validaciones de campos, la lógica condicional de la interfaz (campo de tarjeta) y la redirección final funcionan según los requisitos especificados.

### Herramientas usadas

- **IDE:** Katalon Recorder (Extension) / Selenium IDE
- **Navegador:** Chrome Version 142.0
- **Sistema Operativo:** Windows 10
- **Entorno:** Localhost (XAMPP)

### Descripción paso a paso del caso de prueba

1.  **Carga Inicial:** Abrir la página de registro (`/pages/auth/registro.html`).
2.  **Validación de Campos Vacíos:** Intentar enviar el formulario sin datos para verificar que saltan las alertas de "Requerido" o formato inválido.
3.  **Validación de Formato:** Introducir datos erróneos (contraseña débil, email inválido) y verificar los mensajes de error específicos.
4.  **Lógica Condicional (Tarjeta):**
    - Introducir una dirección y seleccionar un país.
    - Verificar que el campo "Tarjeta de Crédito" se hace visible.
5.  **Flujo Exitoso:**
    - Completar todos los campos con datos válidos (Nombre, Email, Password fuerte, Dirección, Tarjeta de 16 dígitos).
    - Enviar el formulario.
6.  **Verificación Final:** Confirmar la aparición del mensaje de éxito "Cuenta creada con éxito" y la redirección.

### Resultado esperado

El sistema debe bloquear el envío ante datos inválidos, mostrar/ocultar el campo de tarjeta dinámicamente según la dirección, y permitir el registro solo cuando todos los datos son correctos, mostrando un mensaje de confirmación.

### Resultado real obtenido

El test ha completado todos los pasos satisfactoriamente. Las validaciones bloquearon los intentos incorrectos, el campo de tarjeta respondió a la interacción del usuario y el registro final se procesó mostrando el mensaje de éxito esperado.

### Capturas generadas

Las evidencias visuales de la ejecución se han guardado automáticamente en `pacepal_SinLaravel/tests/registro/capturas/`:

- `01-formulario-vacio.png`: Muestra los errores al enviar el formulario vacío.
- `02-errores.png`: Muestra los errores de formato en email y contraseña.
- `03-tarjeta-visible.png`: Evidencia de que el campo tarjeta aparece al rellenar dirección y país.
- `04-registro-exitoso.png`: Muestra el mensaje final de éxito antes de la redirección.

### Log real de ejecución

```text
[info] Playing test case Default Suite / Registro
[info] Time: Wed Dec 10 2025 10:40:28 GMT+0100 (hora estándar de Europa central) Timestamp: 1765359628849
[info] OS: Windows Version: 10
[info] Browser: Chrome Version: 142.0
[info] If the test cannot start, please refresh the active browser tab
[info] Executing: | open | http://localhost/pacepal/pacepal_SinLaravel/pages/auth/registro.html | |
[info] Executing: | click | css=button[type='submit'] | |
[info] Executing: | captureEntirePageScreenshot | 01-formulario-vacio.png | |

[info] Executing: | assertText | id=error-nombre | Nombre no válido. Use máximo 2 palabras, solo letras. |
[info] Executing: | assertText | id=error-email | Formato de correo incorrecto. |
[info] Executing: | assertText | id=error-password | La contraseña no cumple los requisitos. |
[info] Executing: | assertText | id=error-confirm-password | Debes confirmar la contraseña. |
[info] Executing: | type | id=password | invalid |
[info] Executing: | click | css=button[type='submit'] | |
[info] Executing: | assertText | id=error-password | La contraseña no cumple los requisitos. |
[info] Executing: | type | id=email | invalid-email |
[info] Executing: | click | css=button[type='submit'] | |
[info] Executing: | assertText | id=error-email | Formato de correo incorrecto. |
[info] Executing: | captureEntirePageScreenshot | 02-errores.png | |

[info] Executing: | type | id=direccion | Calle Prueba 123 |
[info] Executing: | select | id=pais | label=España |
[info] Executing: | assertVisible | id=grupo-tarjeta | |
[info] Executing: | captureEntirePageScreenshot | 03-tarjeta-visible.png | |

[info] Executing: | pause | 1000 |
[info] Executing: | assertValue | id=tarjeta | |
[info] Executing: | type | id=nombre | Juan Perez |
[info] Executing: | type | id=email | juan.perez@example.com |
[info] Executing: | type | id=password | PacePal2025$ |
[info] Executing: | type | id=confirm-password | PacePal2025$ |
[info] Executing: | type | id=direccion | Calle Real 45 |
[info] Executing: | type | id=tarjeta | 1234567812345678 |
[info] Executing: | click | css=button[type='submit'] | |
[info] Executing: | assertText | id=registro-exito | Cuenta creada con éxito. Redirigiendo... |
[info] Executing: | captureEntirePageScreenshot | 04-registro-exitoso.png | |

[info] Time: Wed Dec 10 2025 10:40:34 GMT+0100 (hora estándar de Europa central) Timestamp: 1765359634805
[info] Test case passed
```

### Confirmación final

**✅ TEST PASSED:** El flujo de registro funciona correctamente, cumpliendo con todas las validaciones y comportamientos esperados definidos en la Historia de Usuario HU_CLIENTE_01.
