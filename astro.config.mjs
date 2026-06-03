import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://curryguinncspb.github.io',
  base: '/cspb-info-session',
  vite: {
    plugins: [tailwindcss()]
  }
});