---
layout: 'layouts/Layout.astro'
page: About
---

# About

> Dashboard desarrollado por Andres Marulanda usando Astro como framework principal, implementando una arquitectura moderna y escalable.

## Arquitectura del Proyecto

- **Frontend Framework**: Astro como base principal por su rendimiento y flexibilidad
- **Componentes**: Implementación de Islands Architecture para optimizar la hidratación
- **Estilos**: Uso de Tailwind CSS para un diseño responsive y mantenible
- **Estado**: Gestión de estado con nanostores permitiendo comunicación entre componentes
- **Estructura**:
  - `/src/pages`: Rutas y páginas principales
  - `/src/components`: Componentes reutilizables
  - `/src/layouts`: Plantillas base
  - `/src/stores`: Manejo de estado global

## Comandos Principales

| Comando               | Acción                                           |
| :------------------- | :----------------------------------------------- |
| `bun install`        | Instala dependencias                             |
| `bun run dev`        | Inicia servidor local en `localhost:3000`        |
| `bun run build`      | Construye el sitio para producción en `./dist/`  |
| `bun run preview`    | Vista previa de la build local                   |

## Características

- Optimización de rendimiento con SSG
- Integración con múltiples frameworks
- Sistema de componentes modular
- SEO optimizado
- Despliegue automático

