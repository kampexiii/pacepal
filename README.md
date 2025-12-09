# PacePal — Proyecto Integrado (DIW + Cliente)

**PacePal** es una plataforma digital diseñada para revolucionar la experiencia del running, conectando a corredores para combatir el sedentarismo y fomentar hábitos saludables a través de la comunidad.

Este repositorio contiene el desarrollo progresivo de la aplicación web, abarcando desde el diseño de la interfaz (DIW) hasta la implementación de la lógica de cliente (DWEC).

---

## 🎯 Objetivo del Proyecto

El objetivo es crear una **Landing Page y un sistema de autenticación** profesional, responsive y accesible.

- **DIW (Diseño de Interfaces Web):** Maquetación HTML5/CSS3, diseño responsive, animaciones y estética de marca.
- **DWEC (Desarrollo Web en Entorno Cliente):** Lógica JavaScript para validación de formularios, interactividad dinámica y gestión del DOM.

---

## 📂 Estructura del Repositorio

```text
pacepal/
│
├── pacepal_SinLaravel/       # PROYECTO PRINCIPAL (Front-End Puro)
│   ├── css/                  # Estilos (Bootstrap + Custom)
│   ├── js/                   # Lógica JS (Validaciones, DOM, Tema)
│   ├── pages/                # Páginas internas (Login, Registro)
│   ├── docs/                 # Documentación del proyecto
│   │   ├── cliente/          # Documentación específica DWEC
│   │   └── pacepalWireframe/ # Bocetos de diseño
│   ├── tests/                # Tests funcionales (Selenium/Katalon)
│   └── index.html            # Landing Page
│
├── pacepal_Laravel/          # (Futura implementación Back-End)
│
└── README.md                 # Este archivo
```

---

## 🚀 Módulos Desarrollados

### 1. Diseño de Interfaz (DIW)

La **Landing Page** presenta la propuesta de valor de PacePal.

- **Características:** Diseño Mobile-First, animaciones al hacer scroll, modo oscuro/claro, integración con Bootstrap 5.
- **Tecnologías:** HTML5, CSS3, Bootstrap Icons, Google Fonts (Inter).

### 2. Desarrollo Cliente (DWEC)

Implementación de los formularios de **Registro y Login** con validaciones robustas.

- **Validaciones:** Regex para email y contraseñas seguras, control de longitud de nombres.
- **Interactividad:** Campo de tarjeta de crédito que aparece dinámicamente según la dirección.
- **Feedback:** Mensajes de error en tiempo real y confirmaciones de éxito sin recarga (SPA feel).
- **Tests:** Pruebas funcionales automatizadas con Selenium IDE.

---

## 🌐 Visualización Online

El proyecto está desplegado y accesible en GitHub Pages:

🔗 **[Ver Proyecto PacePal](https://kampexiii.github.io/pacepal/pacepal_SinLaravel/)**

_(Nota: Si el enlace no está activo, verificar la configuración del repositorio)._

---

## 🧪 Ejecución de Tests

Para validar la funcionalidad de los formularios, se incluyen scripts de prueba en la carpeta `pacepal_SinLaravel/tests/`.

1.  Instalar la extensión **Selenium IDE** en Chrome/Firefox.
2.  Importar los archivos `.side` ubicados en `tests/registro/` o `tests/login/`.
3.  Ejecutar los tests para verificar validaciones y flujos de éxito.

---

## 👥 Autores

Este proyecto ha sido desarrollado por:

- **Pablo Sevillano Aparicio** — Desarrollo Frontend, UX/UI y Lógica de Cliente.
- **Alejandro Pacheco** — Desarrollo Frontend, Arquitectura y Documentación Técnica.

---

## 📄 Licencia

Proyecto académico desarrollado para los módulos de Desarrollo de Aplicaciones Web (DAW).
