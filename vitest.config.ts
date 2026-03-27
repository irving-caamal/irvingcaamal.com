import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/__tests__/**/*.test.{js,ts,tsx}', 'src/**/*.{spec,test}.{js,ts,tsx}'],
    setupFiles: ['./src/__tests__/setup.ts'],
    passWithNoTests: true,
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.d.ts', 'src/**/*.astro', 'src/pages/**'],
    },
  },
  resolve: {
    alias: {
      '~': '/src',
      '~/app': '/src/app',
      '~/pages': '/src/pages',
      '~/widgets': '/src/widgets',
      '~/features': '/src/features',
      '~/entities': '/src/entities',
      '~/shared': '/src/shared',
    },
  },
});
