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
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'X-XSS-Protection': '1; mode=block',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    }
  },
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
