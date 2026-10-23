// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  session: false,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [svelte()],
  adapter: cloudflare()
});