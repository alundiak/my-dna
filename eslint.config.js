import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import tsESlint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tsESlint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
]);
