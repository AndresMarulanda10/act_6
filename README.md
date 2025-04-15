## Project Architecture

The project follows Astro's "islands architecture" with:

1. **[Astro Pages](src/pages/)**: Core routes defined in pages
   - index.astro: Main dashboard that imports and renders components from different frameworks
   - about.md: Markdown page with project information

2. **Components**: Framework-specific components
   - **React**: CategoryChart.tsx and Highlighter.tsx
   - **Vue**: Banner.vue and Overview.vue
   - **Svelte**: Tags.svelte and ProductTable.svelte
   - **Astro**: Header.astro and Footer.astro

3. **Utilities**: Helper functions
   - state.ts: Shared state management with nanostores
   - product.ts: Product data manipulation
   - string.ts: String formatting utilities

4. **Layouts**: Page templates
   - Layout.astro: Main layout template with header and footer

## Data Flow Architecture

The application demonstrates an effective data flow pattern:

1. Data fetching happens in index.astro from a dummy API
2. Product data is passed to framework-specific components as props
3. Shared state (hiddenCategories) is maintained across frameworks using nanostores
4. Each framework uses its own adapter to interact with the shared store:
   - React: `useStore` from [@nanostores/react](https://github.com/nanostores/react)
   - Vue: `useStore` from [@nanostores/vue](https://github.com/nanostores/vue)
   - Svelte: Direct reactivity with `$hiddenCategories` syntax

## Framework-Specific Implementations

1. **React Components**:
   - CategoryChart.tsx: Uses Recharts for data visualization
   - Highlighter.tsx: Toggle UI to show framework boundaries

2. **Vue Components**:
   - Banner.vue: Welcome banner with Vuetify styling
   - Overview.vue: Statistics cards using Vue's composition API

3. **Svelte Components**:
   - Tags.svelte: Category filtering with SMUI chips
   - ProductTable.svelte: Data table with reactive filtering

## Astro Configuration

The astro.config.mjs file demonstrates how to integrate multiple frameworks:

```javascript
integrations: [
  tailwind(),
  react(),
  vue({ appEntrypoint: '/src/pages/_app' }),
  svelte(),
]
```

## Simplified README

```markdown
# Astro Multi-Framework Dashboard

A demonstration of multiple JavaScript frameworks (React, Vue, and Svelte) working together in a single Astro application.

## Project Structure

```
src/
  ├── components/      # Framework-specific components
  │   ├── React (.tsx) # Charts, UI toggles and framework highlighting
  │   ├── Vue (.vue)   # Overview statistics and welcome banner
  │   └── Svelte (.svelte) # Category filtering and data tables
  ├── layouts/         # Page templates
  ├── pages/           # Routes and data fetching
  └── utils/           # Shared utilities
      └── state.ts     # Cross-framework state management
```

## Key Features

- **Multi-Framework Integration**: React, Vue, and Svelte components in one app
- **Cross-Framework State**: Using nanostores for shared state management
- **Framework Visualization**: Toggle to highlight which framework renders which component
- **Responsive Dashboard**: Product filtering, statistics, and data visualization

## Setup with Bun

Bun is a fast JavaScript runtime and package manager. To set up the project with Bun:

```bash
# Install bun if you haven't already
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Configuration

To use Bun instead of npm, update your package.json scripts:

```json
"scripts": {
  "dev": "bunx --bun astro dev",
  "start": "bunx --bun astro dev",
  "test": "bunx --bun astro check",
  "prebuild": "cp ./node_modules/vuetify/dist/vuetify.min.css ./public/vuetify.min.css",
  "build": "bunx --bun astro build",
  "preview": "bunx --bun astro preview"
}
```

## Architecture Highlights

1. **Islands Architecture**: Each UI component can be rendered with its preferred framework
2. **Shared State Management**: The `hiddenCategories` atom is shared across all frameworks
3. **Framework-Specific Adapters**: Each framework uses its own nanostores adapter
4. **Centralized Data Fetching**: Data is fetched once at the Astro page level and distributed to components
```
