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
