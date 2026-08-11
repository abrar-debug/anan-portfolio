import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  build: {
    target: 'es2020',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        project: fileURLToPath(new URL('./project.html', import.meta.url)),
      },
    },
  },
});
