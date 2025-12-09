# Accesibilidad y Cumplimiento WCAG

PacePal se compromete a ofrecer una experiencia inclusiva. En el desarrollo de los formularios del módulo Cliente, se han seguido las pautas WCAG 2.1 (Web Content Accessibility Guidelines) Nivel AA.

---

## 1. Estructura Semántica y Etiquetas

- **Labels Asociadas:** Todos los campos de entrada (`<input>`, `<select>`, `<textarea>`) tienen una etiqueta `<label>` asociada explícitamente mediante el atributo `for` que coincide con el `id` del input. Esto garantiza que los lectores de pantalla anuncien correctamente el propósito del campo.
  ```html
  <label for="nombre">Nombre y apellidos</label> <input id="nombre" ... />
  ```

## 2. Gestión de Errores Accesible

- **ARIA Live Regions:** Los contenedores de mensajes de error (`<p class="form-error">`) incluyen el atributo `aria-live="polite"`. Esto asegura que cuando aparece un mensaje de error dinámicamente, el lector de pantalla lo anuncie al usuario sin interrumpir bruscamente su navegación.
- **Identificación de Errores:** Aunque visualmente usamos colores (rojo), no dependemos solo del color. El mensaje de texto es explícito sobre la naturaleza del error.

## 3. Contraste y Color

- **Ratio de Contraste:** Se ha verificado que el contraste entre el texto y el fondo cumpla con el ratio mínimo de 4.5:1 para texto normal.
  - Texto oscuro sobre fondo claro (Modo Día).
  - Texto claro sobre fondo oscuro (Modo Noche).
- **Validación Visual:** Los bordes de los inputs tienen suficiente contraste con el fondo para ser identificables por personas con baja visión.

## 4. Navegación por Teclado

- **Orden de Tabulación:** El flujo del formulario sigue un orden lógico en el DOM, permitiendo navegar secuencialmente con la tecla `Tab` sin saltos inesperados.
- **Foco Visible:** Se ha mantenido (y personalizado en CSS) el indicador de foco (`outline`) para que los usuarios que navegan por teclado sepan siempre dónde están ubicados.
- **Interactividad:** Los botones personalizados, como el "ojo" para mostrar contraseña, son accesibles vía teclado (`<button type="button">`) y tienen etiquetas `aria-label` descriptivas ("Mostrar contraseña").

## 5. Imágenes y Multimedia

- **Texto Alternativo:** Todas las imágenes decorativas o informativas (como el logo) incluyen el atributo `alt` descriptivo.
- **Iconos:** Los iconos de Bootstrap (`<i class="bi...">`) utilizados para decoración están ocultos para lectores de pantalla o tienen texto alternativo si transmiten significado.

## 6. Formularios Dinámicos

- Cuando el campo de "Tarjeta" aparece dinámicamente, se hace mediante manipulación de clases CSS, pero el HTML ya está presente en el DOM, asegurando que la tecnología de asistencia pueda detectarlo cuando se hace visible.
