import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  prefetch: {
    defaultStrategy: 'hover',
  },
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
    plugins: [tailwindcss()],
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
