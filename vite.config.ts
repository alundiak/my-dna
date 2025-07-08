import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    outDir: 'build', // default value = 'dist
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (
              id.includes('bootstrap') ||
              id.includes('reactstrap') ||
              id.includes('@popperjs/core')
            ) {
              return 'bootstrap';
            }

            if (
              id.includes('prop-types') ||
              id.includes('react') ||
              id.includes('react-') ||
              id.includes('scheduler')
            ) {
              return 'react';
            }

            return 'other-vendors';
          }

          return undefined;
        },
      },
    },
  },
  base: '/my-dna',
  server: {
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/.git/**',
        '**/*.log',
        '**/temp/**',
      ],
    },
  },
});
