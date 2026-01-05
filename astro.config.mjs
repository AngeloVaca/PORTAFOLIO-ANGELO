import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';




import tailwindcss from '@tailwindcss/vite';




import react from '@astrojs/react';




// Esto carga tu archivo .env sin necesitar librerías extra
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN, // Aquí lee tu clave segura
    components: {
      page: 'storyblok/Page',
    },
  }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});