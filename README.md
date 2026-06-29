<p align="center">
  <img src="img/logo/logo.png" alt="PacePal Logo" width="120">
</p>

<h1 align="center">PacePal</h1>

<p align="center">
  Plataforma web deportiva para rutas, actividades, comunidad y gestión de productos.
</p>

<p align="center">
  Proyecto desarrollado como <strong>Trabajo de Fin de Grado de Desarrollo de Aplicaciones Web</strong>, con frontend en React, API en PHP y base de datos MySQL/MariaDB.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TFG-Desarrollo%20de%20Aplicaciones%20Web-0E75B6?style=for-the-badge" alt="TFG Desarrollo de Aplicaciones Web">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 5">
  <img src="https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript ES Modules">
  <img src="https://img.shields.io/badge/PHP-API%20REST-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP API REST">
  <img src="https://img.shields.io/badge/MySQL-MariaDB-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL MariaDB">
  <img src="https://img.shields.io/badge/XAMPP-Local%20Stack-FB7A24?style=for-the-badge&logo=xampp&logoColor=white" alt="XAMPP">
</p>

---

## Índice

- [Descripción](#descripción)
- [Objetivo del proyecto](#objetivo-del-proyecto)
- [Funcionalidades principales](#funcionalidades-principales)
- [Stack técnico](#stack-técnico)
- [Arquitectura general](#arquitectura-general)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Ramas principales](#ramas-principales)
- [Instalación local](#instalación-local)
- [Pruebas y evidencias](#pruebas-y-evidencias)
- [Documentación](#documentación)
- [Evolución del proyecto](#evolución-del-proyecto)
- [Estado actual](#estado-actual)
- [Autoría](#autoría)

---

## Descripción

**PacePal** es una aplicación web orientada a la actividad física, la organización de rutas deportivas, la participación en actividades en grupo y la consulta de productos relacionados con el deporte y el bienestar.

El proyecto combina un cliente desarrollado con **React 18 y Vite**, una **API REST en PHP** y una base de datos **MySQL/MariaDB**. Está preparado para ejecutarse en entorno local con XAMPP y también para generar una versión estática de demostración mediante build del frontend.

El repositorio conserva el desarrollo completo del proyecto, documentación de seguimiento, evidencias técnicas, pruebas y materiales de entrega asociados al TFG.

---

## Objetivo del proyecto

El objetivo de PacePal es ofrecer una plataforma clara y funcional donde una persona pueda descubrir rutas, consultar actividades deportivas, crear actividades asociadas a rutas, navegar por productos y utilizar funcionalidades básicas de usuario.

A nivel técnico, el proyecto sirve para demostrar competencias de desarrollo web completo:

- Construcción de interfaces con React.
- Organización de componentes y páginas.
- Consumo de API mediante `fetch` y JSON.
- Desarrollo de endpoints en PHP.
- Modelado y uso de base de datos relacional.
- Gestión de formularios, rutas, productos, usuarios y carrito.
- Documentación técnica y funcional.
- Pruebas manuales, Postman y Selenium.
- Control de versiones mediante Git y GitHub.

---

## Funcionalidades principales

PacePal incluye las siguientes áreas funcionales:

- Página principal con presentación del proyecto.
- Navegación responsive por secciones.
- Listado y detalle de rutas deportivas.
- Listado y detalle de actividades.
- Creación de actividades asociadas a rutas.
- Catálogo de productos deportivos.
- Detalle de producto con información ampliada.
- Carrito de compra con gestión básica de productos.
- Registro e inicio de sesión de usuarios.
- Perfil de usuario.
- Secciones de administración y reportes.
- Integración con API PHP y base de datos MySQL/MariaDB.
- Fallback estático para facilitar navegación sin backend activo.

---

## Stack técnico

### Frontend

- React 18.
- Vite 5.
- JavaScript con ES Modules.
- JSX.
- CSS organizado por secciones.
- Navegación mediante rutas hash para compatibilidad con despliegues estáticos.

### Backend

- PHP.
- API REST.
- Controladores y modelos propios.
- Respuestas JSON.
- Configuración local mediante archivos de ejemplo.

### Base de datos

- MySQL/MariaDB.
- Scripts SQL para estructura y datos de ejemplo.
- Tablas orientadas a usuarios, rutas, actividades, productos y operaciones relacionadas.

### Herramientas

- XAMPP para entorno local.
- Git y GitHub para control de versiones.
- Postman para pruebas de API.
- Selenium para pruebas funcionales.
- GitHub Pages/build estático como soporte de demo frontend.

---

## Arquitectura general

```text
Cliente React + Vite
        |
        | Fetch / JSON
        v
API REST en PHP
        |
        | Consultas y operaciones
        v
Base de datos MySQL/MariaDB
```

La aplicación puede ejecutarse de dos formas:

1. **Modo completo local**: usa Apache, PHP y MySQL/MariaDB con XAMPP.
2. **Modo frontend estático**: usa el build generado por React/Vite y fallback de datos para navegación demostrativa.

El modo completo permite probar el flujo real con API y base de datos. El modo estático permite enseñar el frontend cuando no hay backend activo.

---

## Estructura del proyecto

```text
pacepal/
├── assets/
├── audio/
├── css/
│   ├── actividades/
│   ├── admin/
│   ├── comun/
│   ├── formulario/
│   ├── landing/
│   ├── rutas/
│   ├── sobrenosotros/
│   ├── tienda/
│   └── usuario/
├── db/
│   ├── pacepal.sql
│   ├── schema.sql
│   └── seed.sql
├── docs/
│   ├── 00-material/
│   ├── 01-bitacora/
│   ├── 09-entrega-final/
│   ├── _archivo-historico-no-entregable/
│   └── evidencias/
├── img/
├── js/
│   ├── actividades/
│   ├── admin/
│   ├── components/
│   ├── data/
│   ├── formulario/
│   ├── hooks/
│   ├── landing/
│   ├── rutas/
│   ├── services/
│   ├── tienda/
│   ├── usuario/
│   └── utils/
├── pages/
├── scripts/
├── src/
│   ├── api/
│   ├── config/
│   ├── controllers/
│   └── models/
├── tests/
│   ├── funcionales/
│   ├── postman/
│   ├── react-sprint-3/
│   └── selenium/
└── dist/
```

---

## Ramas principales

La rama de referencia del proyecto es:

```text
sprint3Definitivo
```

| Rama | Estado | Uso |
| --- | --- | --- |
| `sprint3Definitivo` | Rama principal actual | Base de revisión, mantenimiento y presentación del proyecto. |
| `main` | Rama histórica | Conserva una fase previa del proyecto. No se usa como base actual. |
| `PacepalGithubPages` | Rama histórica de demo | Conserva ajustes antiguos relacionados con GitHub Pages. |

Pueden existir ramas adicionales usadas durante sprints, pruebas o tareas de documentación.

---

## Instalación local

La forma recomendada de ejecutar PacePal en local es mediante XAMPP, usando Apache, MySQL/MariaDB, PHP y el cliente React con Vite.

### 1. Clonar el repositorio

Se recomienda clonar el proyecto dentro de `htdocs` para que Apache pueda resolver correctamente la API PHP.

```bash
cd "C:\xampp\htdocs"
git clone "https://github.com/kampexiii/pacepal.git" "pacepal"
cd "pacepal"
git checkout sprint3Definitivo
```

Ruta recomendada:

```text
C:\xampp\htdocs\pacepal
```

### 2. Arrancar XAMPP

Desde XAMPP Control Panel:

- Iniciar Apache.
- Iniciar MySQL.

### 3. Crear e importar la base de datos

Abrir phpMyAdmin:

```text
http://localhost/phpmyadmin
```

Crear o seleccionar la base de datos:

```text
pacepal
```

Importar el archivo principal:

```text
db/pacepal.sql
```

También existen archivos complementarios:

```text
db/schema.sql
db/seed.sql
```

### 4. Configurar PHP

La configuración por defecto espera los siguientes valores en entorno local:

```text
Host: 127.0.0.1
Base de datos: pacepal
Usuario: root
Password: vacío
Puertos probados: 3306, 3307, 3308
```

Si el entorno local utiliza otra configuración, crear un archivo local a partir del ejemplo:

```powershell
Copy-Item "src\config\config.example.php" "src\config\config.local.php"
```

Después se ajustan los valores necesarios dentro del archivo local.

### 5. Instalar dependencias del cliente

Desde la raíz del proyecto:

```bash
npm install
```

Crear el archivo de entorno local del frontend:

```powershell
Copy-Item ".env.local.example" ".env.local"
```

Contenido recomendado si el proyecto está clonado como `pacepal`:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/pacepal/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Si se usa otra carpeta dentro de `htdocs`, hay que adaptar la URL de `VITE_PACEPAL_API_BASE_URL`.

### 6. Ejecutar la aplicación

Modo desarrollo:

```bash
npm run dev
```

Build de producción:

```bash
npm run build
```

El build generado queda en:

```text
dist/
```

---

## Pruebas y evidencias

El repositorio incluye recursos para comprobar el funcionamiento y documentar el cierre del proyecto:

- Casos funcionales manuales: [`tests/funcionales`](tests/funcionales)
- Colección Postman: [`tests/postman`](tests/postman)
- Validaciones del cliente React: [`tests/react-sprint-3`](tests/react-sprint-3)
- Automatización Selenium: [`tests/selenium`](tests/selenium)
- Evidencias de despliegue: [`docs/evidencias/despliegue`](docs/evidencias/despliegue)

---

## Documentación

La documentación está organizada dentro de la carpeta `docs`:

- Material base: [`docs/00-material`](docs/00-material)
- Bitácora y seguimiento: [`docs/01-bitacora`](docs/01-bitacora)
- Entrega final y materiales principales: [`docs/09-entrega-final`](docs/09-entrega-final)
- Evidencias técnicas: [`docs/evidencias`](docs/evidencias)
- Archivo histórico no entregable: [`docs/_archivo-historico-no-entregable`](docs/_archivo-historico-no-entregable)

---

## Evolución del proyecto

| Fase | Resumen |
| --- | --- |
| Sprint 0 | Organización inicial, definición de alcance, backlog y estructura base. |
| Sprint 1 | Diseño visual, identidad, landing, formularios y primeras validaciones de interfaz. |
| Sprint 2 | Desarrollo backend PHP, endpoints REST, base de datos, carrito, rutas, actividades y pruebas funcionales. |
| Sprint 3 | Integración React, reorganización de componentes, fallback estático, accesibilidad, validaciones finales, despliegue y documentación de cierre. |

---

## Estado actual

PacePal se conserva como proyecto académico y técnico completo, con el objetivo de mostrar el proceso de desarrollo de una aplicación web Full Stack realizada como TFG.

El repositorio está orientado a:

- Presentación profesional en GitHub.
- Consulta del código y documentación.
- Revisión técnica del flujo frontend/backend.
- Evidencia de desarrollo, pruebas y evolución por sprints.

---

## Autoría

Proyecto desarrollado como Trabajo de Fin de Grado por:

- **Pablo Sevillano Aparicio**

Colaboración académica durante el desarrollo:

- **Alejandro Pacheco**

---

## Licencia y uso

Este repositorio forma parte de un proyecto académico y técnico de desarrollo web.

Su contenido se conserva como evidencia de desarrollo, documentación, pruebas, despliegue y evolución funcional del proyecto PacePal.
