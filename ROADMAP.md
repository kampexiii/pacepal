# Roadmap de mejora - PacePal

Plan para convertir PacePal de entrega académica consolidada en un caso de estudio técnico más limpio, mantenible y presentable.

## Objetivo

Mantener el valor del proyecto original, pero ordenar la arquitectura, reforzar la seguridad, mejorar la experiencia y preparar una demo estable que pueda enseñarse en portfolio sin depender de explicaciones largas.

## Fase 0 - Rescate y cierre técnico

- Confirmar que `sprint3Definitivo` es la rama de referencia.
- Corregir referencias antiguas al remoto `Pacepal/pacepalAgile`.
- Revisar `.env.local.example`, rutas de API y documentación de XAMPP.
- Separar claramente modo demo estático y modo completo con PHP/MySQL.
- Crear checklist de instalación desde cero.

## Fase 1 - Limpieza de arquitectura

- Revisar componentes React y eliminar duplicidades.
- Agrupar servicios API, modelos de datos y utilidades.
- Normalizar nombres de carpetas y rutas.
- Documentar el contrato entre frontend y API PHP.
- Decidir si se mantiene PHP plano o si se migra a Laravel como evolución futura.

## Fase 2 - Producto y UX

- Simplificar navegación principal.
- Mejorar rutas, actividades y fichas de producto como flujos principales.
- Añadir estados vacíos, errores y carga.
- Revisar responsive móvil.
- Preparar capturas reales para portfolio.

## Fase 3 - Backend y datos

- Revisar endpoints PHP y validaciones.
- Evitar credenciales hardcodeadas.
- Normalizar respuestas JSON.
- Documentar importación de `db/pacepal.sql`.
- Añadir datos demo seguros y reproducibles.

## Fase 4 - Calidad

- Añadir pruebas mínimas de servicios y componentes críticos.
- Mantener colección Postman actualizada.
- Revisar accesibilidad básica: foco, contraste, labels y navegación por teclado.
- Ejecutar build limpio antes de publicar cambios.

## Fase 5 - Presentación profesional

- Crear caso de estudio breve: problema, solución, stack, capturas, aprendizaje.
- Añadir enlace de demo si sigue disponible.
- Documentar limitaciones conocidas con honestidad.
- Preparar una lista corta de mejoras futuras sin prometer funcionalidades no construidas.

## Riesgos

- El proyecto mezcla demo estática y backend real; conviene no romper ninguna de las dos formas de ejecución.
- La API PHP depende de rutas locales de XAMPP; cualquier renombrado debe actualizar `.env.local.example`.
- Los SQL de ejemplo deben revisarse antes de publicar nuevas versiones.
