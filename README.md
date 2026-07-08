<div align="center">

# PacePal

Plataforma web para rutas deportivas, actividades en grupo, comunidad y catálogo relacionado con vida activa.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![PHP](https://img.shields.io/badge/PHP-API-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-MariaDB-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://mariadb.org/)
[![Status](https://img.shields.io/badge/status-caso%20de%20estudio-2ea44f?style=for-the-badge)](#estado)

</div>

## Tabla de contenidos

- [Sobre el proyecto](#sobre-el-proyecto)
- [Características](#caracteristicas)
- [Stack](#stack)
- [Inicio rápido](#inicio-rapido)
- [Estructura](#estructura)
- [Roadmap](#roadmap)
- [Seguridad](#seguridad)
- [Estado](#estado)

## Sobre el proyecto

PacePal es una aplicación web orientada a descubrir rutas, crear actividades deportivas, gestionar usuarios y consultar productos relacionados con deporte y bienestar.

El proyecto combina una interfaz React/Vite con una API PHP y base de datos MySQL/MariaDB. Conserva además un modo demo estático para poder enseñar el frontend sin depender del backend local.

Demo histórica:

- https://pacepal.github.io/pacepalAgile/

Repositorio:

- https://github.com/kampexiii/pacepal

## Caracteristicas

- Rutas deportivas con detalle.
- Actividades asociadas a rutas.
- Catálogo de productos.
- Carrito básico.
- Registro, login y perfil.
- Secciones privadas y administración.
- API REST en PHP.
- Base de datos MySQL/MariaDB.
- Demo estática compatible con GitHub Pages.

## Stack

| Área | Tecnología |
| --- | --- |
| Frontend | React 18, Vite 5, JavaScript, CSS |
| Backend | PHP, API REST |
| Datos | MySQL/MariaDB |
| Entorno local | XAMPP |
| Pruebas | Postman, Selenium, pruebas funcionales |

## Inicio rapido

```bash
cd "C:\xampp\htdocs\Proyectos-Pablo-Sevillano"
git clone "https://github.com/kampexiii/pacepal.git" "PacePal"
cd "PacePal"
git checkout sprint3Definitivo
npm install
```

Configura el entorno local:

```powershell
Copy-Item ".env.local.example" ".env.local"
```

Valor recomendado en XAMPP:

```env
VITE_PACEPAL_API_BASE_URL=http://localhost/Proyectos-Pablo-Sevillano/PacePal/src/api/index.php/api
VITE_PACEPAL_ENABLE_STATIC_FALLBACK=false
```

Importa la base de datos desde `db/pacepal.sql` usando phpMyAdmin o MySQL CLI.

```bash
npm run dev
```

## Estructura

```text
PacePal/
  db/          SQL de esquema y datos demo
  docs/        documentación y evidencias
  js/          cliente React histórico
  src/         API PHP, controladores y modelos
  tests/       pruebas y evidencias
```

## Roadmap

El plan de mejora está en [`ROADMAP.md`](ROADMAP.md).

Prioridades:

- Limpiar arquitectura React/API.
- Separar claramente demo estática y modo backend real.
- Mejorar UX responsive.
- Crear caso de estudio para portfolio.

## Seguridad

- No versionar `.env.local`.
- Revisar SQL antes de publicar nuevas versiones.
- Mantener datos demo sin información personal real.

## Estado

Rama de referencia: `sprint3Definitivo`.

Proyecto académico/técnico consolidado, pendiente de pulido para presentación profesional.
