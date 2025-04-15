// Importing the `App` type from Vue, which represents the main application instance.
import type { App } from 'vue';

// Importing the `createVuetify` function from Vuetify, which is used to set up Vuetify in the application.
import { createVuetify } from 'vuetify';

// Importing all Vuetify components and assigning them to the `components` object.
// This allows you to register and use Vuetify's pre-built UI components in your app.
import * as components from 'vuetify/components';

// Importing all Vuetify directives and assigning them to the `directives` object.
// Directives are special instructions in Vue templates (e.g., `v-model`, `v-show`) that enhance functionality.
import * as directives from 'vuetify/directives';

// Exporting a default function that takes the Vue application instance (`app`) as an argument.
// This function is used to configure and install Vuetify into the Vue app.
export default (app: App) => {
  // Creating a Vuetify instance with specific options.
  const vuetify = createVuetify({
    // Enabling server-side rendering (SSR) support for Vuetify.
    ssr: true,

    // Registering all Vuetify components so they can be used globally in the app.
    components,

    // Registering all Vuetify directives so they can be used globally in the app.
    directives,
  });

  // Installing the Vuetify plugin into the Vue app instance.
  // This makes Vuetify's components, directives, and other features available throughout the app.
  app.use(vuetify);
};