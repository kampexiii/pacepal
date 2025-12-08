
# PacePal — Landing Page (Entrega DI6)

**PacePal** es una plataforma digital diseñada para revolucionar la experiencia del running, conectando a corredores para combatir el sedentarismo y fomentar hábitos saludables a través de la comunidad.

Esta **Landing Page** ha sido desarrollada como la pieza central de la estrategia de lanzamiento para la futura aplicación **PacePal 2026**. Su función principal es presentar la propuesta de valor, generar interés y captar los primeros usuarios ("early adopters") interesados en rutas verdes, seguridad al correr y recompensas sostenibles.

---

## 🎯 Objetivo del Proyecto

El objetivo principal de este desarrollo ha sido crear una **landing page profesional, responsive y orientada a la conversión**. Siguiendo los requisitos del cliente, hemos diseñado una interfaz que no solo informa, sino que persuade.

La solución respeta fielmente el boceto consolidado, garantizando una experiencia de usuario (UX) fluida tanto en dispositivos móviles como en escritorio. Se ha priorizado la claridad visual, la jerarquía de la información y la integración de la identidad de marca (colores neón, sostenibilidad y dinamismo) para maximizar el impacto comercial y ecosocial del proyecto.

---

## 🎨 Boceto Final y Justificación

El diseño final es el resultado de un proceso de iteración donde se consolidaron las mejores ideas para cumplir con los objetivos de negocio.

### Vista Desktop
![Boceto Desktop](./docs/pacepalWireframe/desktop/4.png)

### Vista Mobile
![Boceto Mobile](./docs/pacepalWireframe/mobile/4.png)

### Justificación del Diseño
La estructura elegida se basa en bloques de contenido claramente diferenciados para facilitar el escaneo visual:
*   **Jerarquía Visual:** Se da protagonismo a la fotografía de estilo de vida y al color verde corporativo (`#90FD25`) para transmitir energía.
*   **Navegación Intuitiva:** Un header fijo permite al usuario moverse rápidamente entre las secciones clave.
*   **Enfoque en Conversión:** Los botones de llamada a la acción (CTA) están estratégicamente ubicados y diseñados para destacar.
*   **Adaptabilidad:** El diseño mobile-first asegura que la experiencia sea óptima en pantallas pequeñas, donde se espera la mayor parte del tráfico.

*(Nota: La justificación detallada se encuentra incluida en los archivos de imagen `4.png` mostrados arriba).*

---

## 🚀 Descripción de la Landing Page

La página guía al usuario a través de una narrativa lógica ("Storytelling") diseñada para convertir visitantes en registros:

1.  **Hero Section:** Impacto inmediato con el claim *"Corre acompañado, corre mejor"*. Presenta la propuesta de valor y ofrece dos caminos claros: registrarse o saber más.
2.  **El Problema:** Aborda los puntos de dolor del usuario (falta de motivación, inseguridad) mediante tarjetas visuales, generando empatía.
3.  **Cómo Funciona:** Simplifica la barrera de entrada explicando el proceso en tres pasos sencillos: Perfil, Match y Correr.
4.  **Sostenibilidad (PacePal × Nike):** Diferenciador clave. Explica la alianza estratégica para ofrecer ropa reciclada y recompensas, conectando el ejercicio con el cuidado del planeta.
5.  **Comunidad:** Prueba social mediante testimonios reales que generan confianza y credibilidad en el servicio.
6.  **CTA Final:** Un último empujón persuasivo invitando al usuario a unirse al lanzamiento de 2026.
7.  **Footer:** Cierre profesional con enlaces rápidos, redes sociales y refuerzo de marca.

---

## 🛠 Tecnologías Utilizadas

Hemos seleccionado un stack tecnológico robusto, estándar y ligero para garantizar rendimiento y mantenibilidad:

*   **HTML5 Semántico:** Para una estructura accesible y optimizada para SEO.
*   **CSS3 (Mobile First):** Estilos modernos con variables CSS para una gestión eficiente del tema visual.
*   **Bootstrap 5:** Utilizado por su sistema de rejilla (Grid) flexible y componentes responsive probados.
*   **JavaScript Vanilla:** Lógica ligera sin dependencias pesadas para una carga instantánea.
*   **IntersectionObserver API:** Para implementar animaciones de entrada ("reveal on scroll") de alto rendimiento, mejorando la experiencia visual sin afectar la velocidad.

### Archivos Clave
*   `css/styles.css`: Contiene los estilos globales, variables de color y personalizaciones sobre Bootstrap.
*   `css/animations.css`: Aísla las clases y keyframes responsables de las transiciones y efectos visuales.
*   `js/main.js`: Gestiona la interactividad general, como el menú móvil y el scroll suave.
*   `js/animations.js`: Implementa el observador de intersección para disparar las animaciones cuando los elementos entran en el viewport.

---

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura modular y organizada:

```text
pacepal_SinLaravel/
│
├── index.html              # Punto de entrada principal (Landing Page)
├── README.md               # Documentación del proyecto
│
├── css/                    # Estilos
│    ├── styles.css         # Hoja de estilos principal
│    ├── animations.css     # Estilos específicos para animaciones
│    └── components/        # (Reservado para futuros componentes)
│
├── js/                     # Lógica
│    ├── main.js            # Scripts principales
│    ├── animations.js      # Lógica de IntersectionObserver
│    └── components/        # (Reservado para futuros scripts)
│
├── img/                    # Recursos gráficos
│    ├── pacepal.png        # Logo
│    ├── pacepalHero.png    # Mockup sección Hero
│    └── pacepalNike.png    # Imagen sección Sostenibilidad
│
└── docs/                   # Documentación y Bocetos
     ├── pacepalWireframe/  # Imágenes de los bocetos (Desktop/Mobile)
     └── guion_video_presentacion.md
```

---

## 💻 Cómo Visualizar el Proyecto

Existen dos formas sencillas de visualizar la landing page:

### Opción 1: Apertura Directa
Simplemente abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Edge, etc.).

### Opción 2: Servidor Local (XAMPP/Apache)
Si tienes el proyecto alojado en `htdocs`, puedes acceder a través de la siguiente URL:
`http://localhost/pacepal/pacepal_SinLaravel/`

---

## 🎥 Vídeo de Presentación

A continuación, presentamos el vídeo explicativo del proyecto, donde recorremos la solución y explicamos las decisiones de diseño y desarrollo.

🔗 **Enlace al vídeo:** *Pendiente de añadir*

---

## 👥 Equipo de Desarrollo

Este proyecto ha sido diseñado y desarrollado por:

*   **Pablo Sevillano** — Desarrollo Frontend, Diseño UX/UI y Estructura Visual.
*   **Alejandro Pacheco** — Desarrollo Frontend, Maquetación y Estructura Técnica.

---

## 📄 Licencia

Proyecto académico desarrollado para el módulo DI6. Todos los derechos reservados.  