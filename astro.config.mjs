// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: "https://myastro-tutor.netlify.app",
  integrations: [preact(), svelte()],
});