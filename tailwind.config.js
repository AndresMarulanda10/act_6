/** 
 * This import helps with TypeScript type checking for Tailwind CSS config files.
 */
module.exports = {
  // Files in these paths are scanned for Tailwind classes.
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Default theme settings, can be extended with custom values.
  theme: {
    extend: {},
  },

  // Adds the official Tailwind Typography plugin for rich text formatting.
  plugins: [require('@tailwindcss/typography')],

  // Prefixes generated classes with "tw-" to avoid naming conflicts.
  prefix: 'tw-',
};
