/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      exclude: ['src/index.tsx', 'src/types', 'src/vite-env.d.ts', 'src/mocks'],
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});
