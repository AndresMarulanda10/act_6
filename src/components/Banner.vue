<template>
  <!-- A Vuetify banner component with a specific color and conditional rendering -->
  <v-banner color="deep-purple-accent-4" v-if="visible">
    <!-- The text content of the banner -->
    <v-banner-text>
      <!-- A heading welcoming the user -->
      <h1>Welcome to Astro 👋</h1>

      <!-- Description of the dashboard and its multi-framework nature -->
      This dashboard has been built using 3 different frameworks (Vue, React and
      Svelte), on top of Astro of course. You can preview which component
      belongs to a specific framework by clicking on the 👁 button located at the
      bottom of the page!
    </v-banner-text>

    <!-- Action buttons for the banner -->
    <v-banner-actions>
      <!-- A button to hide the banner, triggering the `hide` function -->
      <v-btn @click="hide">Hide</v-btn>
    </v-banner-actions>
  </v-banner>
</template>
