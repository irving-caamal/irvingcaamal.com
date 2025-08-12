import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'static',
  site: 'https://irvingcaamal.com',
  vite: {
    resolve: {
      alias: {
        '~': '/src',
        '~/app': '/src/app',
        '~/pages': '/src/pages',
        '~/widgets': '/src/widgets',
        '~/features': '/src/features',
        '~/entities': '/src/entities',
        '~/shared': '/src/shared',
      }
    }
  }
});
