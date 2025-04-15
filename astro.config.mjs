// Imports configuration utilities from Astro
import { defineConfig } from 'astro/config';

// Imports integrations for various frameworks
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

// Defines and exports the Astro config object
export default defineConfig({
  // Specifies the production site URL
  site: 'https://astro-dashboard.app',
  // Adds Tailwind, React, Vue, and Svelte integrations
  integrations: [
    tailwind(),
    react(),
    vue({ appEntrypoint: '/src/pages/_app' }),
    svelte(),
  ],
  // Customizes Vite SSR behavior
  vite: {
    ssr: {
      // Excludes specified packages from external bundling
      noExternal: ['vuetify', '@smui/**/*'],
    },
  },
});
