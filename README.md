# PacePal — Proyecto Integrado (DIW + Cliente)

**PacePal** es una plataforma digital diseñada para revolucionar la experiencia del running, conectando a corredores para combatir el sedentarismo y fomentar hábitos saludables a través de la comunidad.

Este repositorio contiene el desarrollo progresivo de la aplicación web, abarcando desde el diseño de la interfaz (DIW) hasta la implementación de la lógica de cliente (DWEC) y la preparación para el entorno servidor (DWES).

---

## 🎯 Propósito del Proyecto

El objetivo principal es crear una solución web profesional que promueva:

- **Conexión Social:** Unir a personas con intereses similares.
- **Hábitos Saludables:** Fomentar el ejercicio regular.
- **Rutas Activas:** Descubrimiento de nuevos caminos seguros.
- **Sostenibilidad:** Integración de valores ecológicos en la práctica deportiva.

---

## 🚀 Módulos del Proyecto

Este repositorio integra el trabajo de varios módulos formativos:

### 1. Diseño de Interfaces Web (DIW)

Enfoque en la experiencia de usuario (UX) y la interfaz gráfica (UI).

- **Landing Page:** Diseño atractivo y funcional orientado a la conversión.
- **Responsive Design:** Adaptabilidad total a dispositivos móviles (Mobile First).
- **Estética:** Uso de paleta de colores corporativa, tipografía legible y animaciones suaves.

### 2. Desarrollo Web en Entorno Cliente (DWEC)

Implementación de la lógica de negocio en el navegador.

- **Validaciones:** Control exhaustivo de formularios (Registro y Login) antes del envío.
- **Interactividad:** Comportamiento dinámico de campos y feedback visual inmediato.
- **Modularidad:** Código JavaScript organizado y reutilizable.

### 3. Desarrollo Web en Entorno Servidor (DWES - Pre-integración)

- La carpeta `pacepal_Laravel/` contiene la estructura base para el futuro desarrollo del backend, base de datos y lógica de servidor.

---

## 🛠 Tecnologías Utilizadas

El stack tecnológico ha sido seleccionado por su robustez y estandarización:

- **Frontend:** HTML5 Semántico, CSS3 (Variables, Flexbox, Grid), Bootstrap 5.
- **Scripting:** JavaScript (ES6+) Modular.
- **Accesibilidad:** Cumplimiento de pautas WCAG 2.1 (AA).
- **Testing:** Selenium IDE, Katalon Recorder.

---

## ✨ Funcionalidades Implementadas

- **Landing Page Completa:** Secciones informativas con navegación fluida.
- **Gestión de Tema:** Modo Claro / Modo Oscuro persistente.
- **Formulario de Registro:**
  - Validación de complejidad de contraseña.
  - Validación de formato de email y nombres.
  - **Campo Dinámico:** Aparición de "Tarjeta de Crédito" solo al completar Dirección y País.
- **Formulario de Login:** Validación de credenciales y formato.
- **Feedback de Usuario:** Mensajes de error descriptivos y notificaciones de éxito sin recarga de página.
- **Tests Automatizados:** Scripts funcionales para asegurar la calidad del software.

---

## ♿ Accesibilidad (WCAG)

Se ha priorizado la inclusión siguiendo estándares internacionales:

- **Etiquetado:** Uso correcto de `<label>` asociado a controles.
- **ARIA:** Implementación de `aria-invalid` y `aria-live` para lectores de pantalla.
- **Contraste:** Colores verificados para legibilidad óptima.
- **Navegación:** Flujo lógico mediante tabulación (Keyboard Navigation).

---

## 📂 Estructura del Repositorio

La organización de archivos refleja una arquitectura limpia y escalable:

```text
pacepal_SinLaravel/
│   index.html                  # Página principal (Landing)
│
├───css/
│   │   animations.css          # Efectos visuales
│   │   styles.css              # Estilos globales
│   └───pages/auth/*.css        # Estilos específicos de autenticación
│
├───docs/
│   │   guion_video_presentacion.md
│   │   README.md
│   ├───cliente/                # Documentación DWEC (Historias, Validaciones, Tests)
│   ├───diw/                    # Documentación DIW (Bocetos, Análisis)
│   └───sostenibilidad/         # Documentación del proyecto sostenible
│
├───img/
│   ├───common/                 # Logos e iconos
│   └───landing/                # Imágenes de la landing page
│
├───js/
│   │   animations.js           # Lógica de animaciones
│   │   formulario.js           # Gestión del DOM de formularios
│   │   main.js                 # Scripts generales
│   │   theme.js                # Control de modo oscuro
│   │   validaciones.js         # Lógica pura de validación
│   └───pages/auth/*.js         # Scripts específicos por página
│
├───pages/auth/*.html           # Vistas de Login y Registro
│
└───tests/                      # Pruebas automatizadas
    ├───login/
    └───registro/
```

---

## 📚 Documentación Detallada

Toda la documentación técnica se encuentra en la carpeta `docs/`:

### Módulo Cliente (`/docs/cliente/`)

- **Historias de Usuario:** Definición formal de requisitos (Registro y Login).
- **Explicación de Formularios:** Detalle del comportamiento y campos.
- **Validaciones:** Reglas de negocio implementadas (Regex, lógica condicional).
- **Accesibilidad:** Informe de cumplimiento WCAG.
- **Preparación Back-End:** Guía de integración para DWES.
- **Guía de Tests:** Instrucciones para ejecutar Selenium/Katalon.

### Módulo DIW (`/docs/diw/`)

- Bocetos (Wireframes) y análisis de diseño de la interfaz.

---

## 🌐 Visualización Online

El proyecto se encuentra desplegado en GitHub Pages:

🔗 **[Acceder a PacePal](https://kampexiii.github.io/pacepal/pacepal_SinLaravel/)**

---

## 👥 Autores

Este proyecto ha sido desarrollado por:

- **Pablo Sevillano Aparicio** — Desarrollo Frontend, UX/UI, Lógica de Cliente y responsable de toda la parte de Servidor (arquitectura back-end, base de datos y desarrollo en Laravel u otras tecnologías).
- **Alejandro Pacheco** — Desarrollo Frontend, validaciones del módulo Cliente, arquitectura de formularios y documentación técnica.

---

## 📄 Licencia

Proyecto académico desarrollado para los módulos de Desarrollo de Aplicaciones Web (DAW).
