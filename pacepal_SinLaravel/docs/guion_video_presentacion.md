# Guion de Presentación de Proyecto: PacePal – Landing Page

**Presentadores:** Pablo Sevillano y Alejandro Pacheco
**Duración estimada:** 10-15 minutos
**Contexto:** Reunión de entrega de producto con el cliente (PacePal 2026)

---

## 1. Introducción y Presentación del Equipo (00:00 - 01:30)

**(En cámara: Pablo y Alejandro juntos o pantalla partida)**

**Pablo:**
"Hola a todos. Muchas gracias por recibirnos hoy.
Soy **Pablo Sevillano**, y junto a mi socio **Alejandro Pacheco**, formamos el equipo de desarrollo web encargado de dar vida a la visión digital de **PacePal**."

**Alejandro:**
"Exacto. Como consultora de soluciones digitales, nuestra misión no es solo escribir código, sino crear herramientas que conecten productos con personas.
Hoy estamos aquí para presentarles la **Landing Page oficial de lanzamiento** para la futura aplicación PacePal 2026."

**Pablo:**
"Sabemos que su objetivo es ambicioso: captar usuarios interesados en hábitos saludables, rutas verdes y sostenibilidad antes del lanzamiento de la app.
Por eso, hemos diseñado una experiencia web centrada en la conversión, la claridad y, sobre todo, en transmitir los valores de comunidad y ecología que definen a su marca."

---

## 2. Explicación del Boceto Final (01:30 - 03:30)

**(Acción: Mostrar en pantalla la carpeta `docs/` y abrir `boceto_desktop.png` y `boceto_mobile.png`)**

**Alejandro:**
"Antes de ver el resultado final, queremos mostrarles cómo consolidamos la idea.
Si vamos a la documentación del proyecto, aquí pueden ver los bocetos finales que aprobamos con ustedes."

**(Acción: Mostrar `boceto_desktop.png`)**

**Alejandro:**
"En la versión de escritorio, priorizamos una jerarquía visual muy limpia.
Revisamos varias iteraciones, pero elegimos esta estructura por tres razones:

1.  **Claridad:** El usuario sabe qué es PacePal en el primer vistazo.
2.  **Bloques diferenciados:** Separamos visualmente el 'Problema', la 'Solución' y la 'Sostenibilidad' para no saturar.
3.  **CTA Visible:** El botón de registro siempre destaca."

**(Acción: Mostrar `boceto_mobile.png`)**

**Alejandro:**
"Y aquí está la versión móvil. Como ven, diseñamos pensando en pantallas pequeñas desde el principio.
Todo el contenido se apila verticalmente, los textos son más grandes y los botones ocupan el ancho completo para ser fáciles de pulsar con el dedo.
Esta fase de bocetado fue crucial para garantizar que la implementación final fuera coherente y efectiva."

---

## 3. Presentación de la Landing Implementada y Necesidad del Cliente (03:30 - 05:00)

**(Acción: Abrir `index.html` en el navegador a pantalla completa)**

**Pablo:**
"Pasemos ahora a la solución real. Esta es la landing page de PacePal funcionando."

**Pablo:**
"PacePal nace para resolver una necesidad muy clara: combatir el sedentarismo y la falta de motivación. Mucha gente quiere correr, pero no sabe por dónde empezar o se aburre haciéndolo sola.
Además, detectamos un interés creciente por el cuidado del medio ambiente."

**Pablo:**
"Por eso, la web no vende solo una app de running. Vende un estilo de vida.
Desde el claim principal _'Corre acompañado, corre mejor'_, atacamos esa necesidad de socialización.
Y añadimos el valor diferencial: **Rutas verdes y recompensas sostenibles**.
Hemos integrado visualmente la colaboración con **Nike** para que el usuario sienta que, al correr, también gana beneficios tangibles y ayuda al planeta."

---

## 4. Recorrido Completo por la Landing (05:00 - 09:00)

**(Acción: Hacer scroll suave desde el inicio)**

**Alejandro:**
"Vamos a recorrer la página sección por sección para que vean cómo hemos plasmado todo esto."

**(Acción: Parar en el Hero)**

**Alejandro:**
"**1. Sección Hero (`#hero`):**
Lo primero que vemos es impacto. Tenemos el título principal y dos llamadas a la acción claras.
A la derecha, la imagen del móvil (`pacepalHero.png`) tangibiliza el producto: el usuario ve que la app ya es una realidad.
Fíjense en el menú superior fijo: hemos cambiado el botón a **'Ingresar en PacePal'** para usuarios recurrentes."

**(Acción: Scroll a #problema)**

**Alejandro:**
"**2. El Problema (`#problema`):**
Aquí empatizamos con el usuario. Usamos tarjetas limpias para exponer los frenos habituales: 'Falta de motivación' o 'Seguridad'.
Las animaciones de entrada que ven (ese efecto de aparecer suavemente) están hechas para guiar la lectura sin distraer."

**(Acción: Scroll a #como-funciona)**

**Alejandro:**
"**3. Cómo Funciona (`#como-funciona`):**
Simplificamos la barrera de entrada en 3 pasos: Perfil, Match, Correr.
Es vital que el usuario sienta que usar PacePal es fácil."

**(Acción: Scroll a #sostenible)**

**Pablo:**
"**4. Sostenibilidad y Nike (`#sostenible`):**
Esta es mi sección favorita y un pilar de su marca.
Aquí destacamos la colaboración **PacePal × Nike**.
Explicamos el programa de ropa reciclada y las recompensas.
Visualmente, usamos la imagen `pacepalNike.png` y mantenemos el verde corporativo para reforzar el mensaje ecológico."

**(Acción: Scroll a #comunidad)**

**Pablo:**
"**5. Comunidad (`#comunidad`):**
La prueba social. Testimonios reales de Laura, Carlos y Ana.
Esto genera confianza inmediata en el usuario nuevo que está dudando si registrarse."

**(Acción: Scroll a #cta-final y Footer)**

**Pablo:**
"**6. CTA Final y Footer (`#cta-final`, `#contacto`):**
Cerramos con el objetivo de negocio: **'Registrarte en PacePal Gratis'**.
Y en el footer, hemos cuidado el detalle de la marca: el logo 'PacePal' ahora luce vuestro color verde corporativo (`--color-primary`), destacando sobre el fondo oscuro, junto a los enlaces legales y redes sociales."

---

## 5. Demostración de la Estructura del Repositorio (09:00 - 11:00)

**(Acción: Mostrar VS Code con el árbol de carpetas abierto)**

**Alejandro:**
"Ahora, pongámonos el sombrero técnico. Queremos entregarles un proyecto robusto y profesional.
En GitHub, hemos organizado el repositorio de la siguiente manera:"

**(Acción: Ir señalando las carpetas)**

**Alejandro:**

- "**Raíz:** Tenemos el `index.html`, limpio y semántico. Es el corazón de la web.
- **`css/`:** Aquí está la magia visual. Tenemos `styles.css` para el diseño base y `animations.css` separado para optimizar el rendimiento de los efectos.
- **`js/`:** Igual de ordenado. `main.js` controla la navegación y `animations.js` gestiona los observadores de intersección.
- **`img/`:** Todas las imágenes optimizadas, incluyendo los mockups del Hero y Nike.
- **`docs/`:** Y aquí guardamos la documentación y los bocetos que vimos al principio.

Esta estructura modular facilita que cualquier desarrollador pueda escalar el proyecto en el futuro sin romper nada."

---

## 6. Demostración de la Vista Responsive (11:00 - 13:00)

**(Acción: Volver al navegador, abrir DevTools (F12) y activar modo móvil)**

**Pablo:**
"Sabemos que en 2026 el tráfico móvil será mayoritario. Por eso hemos trabajado con metodología **Mobile First**.
Veamos cómo se comporta la web en un dispositivo móvil."

**(Acción: Simular un iPhone o Pixel)**

**Pablo:**
"Fíjense en los cambios automáticos:

1.  **Navegación:** El menú se colapsa en un icono de hamburguesa totalmente funcional.
2.  **Hero:** La disposición cambia a una sola columna. El texto y la imagen se reordenan verticalmente para aprovechar el espacio.
3.  **Tarjetas:** En las secciones de 'Problema' y 'Cómo funciona', las columnas se apilan. Ya no están una al lado de la otra, sino una debajo de otra, facilitando el scroll.
4.  **Imágenes:** Se adaptan al ancho de la pantalla sin perder calidad ni deformarse.

La experiencia de usuario es fluida y nativa, sin importar el dispositivo."

---

## 7. Tecnologías Utilizadas y Justificación (13:00 - 14:00)

**(En cámara: Pablo y Alejandro)**

**Alejandro:**
"Para cerrar, queremos justificar la elección tecnológica.
Hemos construido esto sobre **HTML5, CSS3 y JavaScript Vanilla**, apoyándonos en **Bootstrap 5** para la rejilla."

**Pablo:**
"¿Por qué esta elección?

1.  **Rendimiento:** Al no usar frameworks pesados como React para una landing informativa, la web carga instantáneamente.
2.  **Accesibilidad:** HTML semántico garantiza que sea legible para todos.
3.  **Mantenimiento:** Es código estándar. Cualquier desarrollador web puede entenderlo y modificarlo fácilmente.
4.  **Animaciones:** Usamos `IntersectionObserver` nativo, que es mucho más eficiente que las librerías antiguas de scroll."

---

## 8. MÓDULO CLIENTE — AMPLIACIÓN DEL VÍDEO (14:00 - Fin)

**(Acción: Navegar desde la Landing Page al formulario de Registro)**

**Pablo:**
"Pero esto no es solo una cara bonita. Hemos implementado toda la lógica de cliente necesaria para captar usuarios reales.
Si hacemos clic en 'Regístrate', vamos al nuevo **Formulario de Registro**."

**(Acción: Mostrar formulario vacío e intentar enviar)**

**Alejandro:**
"Aquí entra en juego la seguridad y la validación.
Si intento crear una cuenta sin datos, el sistema me detiene.
Fíjense en los mensajes rojos bajo cada campo: 'Nombre no válido', 'Formato de correo incorrecto'.
No esperamos a que el servidor responda; validamos aquí y ahora para una mejor experiencia."

**(Acción: Escribir una contraseña débil)**

**Alejandro:**
"Incluso con la contraseña. Si escribo '1234', me avisa de que necesito mayúsculas, números y símbolos.
Esto garantiza que su base de datos solo reciba usuarios de calidad."

**(Acción: Rellenar Dirección y País)**

**Pablo:**
"Y atención a este detalle de UX.
PacePal es una app premium. Si el usuario indica su dirección y país, el sistema entiende que quiere ir en serio y **automáticamente despliega el campo de Tarjeta**.
Si borro la dirección, el campo desaparece. Es una interfaz viva que reacciona al usuario."

**(Acción: Completar registro exitoso)**

**Pablo:**
"Al completar todo correctamente, no recargamos la página bruscamente.
Mostramos un mensaje de éxito suave y redirigimos al Login. Todo se siente como una aplicación moderna (SPA)."

**(Acción: Mostrar Login rápido)**

**Alejandro:**
"El Login sigue la misma filosofía: rápido, seguro y con validaciones instantáneas.
Además, todo el código JavaScript es modular. Hemos separado la lógica de validación de la manipulación del DOM, lo que significa que conectar esto con su Back-End en Laravel será cuestión de minutos."

**(Acción: Mostrar Selenium IDE brevemente)**

**Alejandro:**
"Para garantizar que nada falle, hemos creado una suite de tests automatizados con Selenium.
Podemos simular cientos de registros en segundos para asegurar la estabilidad antes de cada lanzamiento."

**Pablo:**
"En resumen, PacePal ya no es solo un diseño. Es una plataforma funcional, segura y lista para empezar a crecer.
Muchas gracias."
