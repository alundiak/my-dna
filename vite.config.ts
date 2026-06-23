import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactPlugin()],
  build: {
    minify: true,
    outDir: 'build', // default value = 'dist
    rolldownOptions: {
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
        }
      }
    }
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
        '**/temp/**'
      ]
    }
  }
});
