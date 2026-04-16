import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry: {
        main: resolve(__dirname, 'electron/main.cjs'),
        preload: resolve(__dirname, 'electron/preload.cjs')
      },
      formats: ['cjs']
    },
    outDir: 'dist-electron',
    rollupOptions: {
      external: ['electron']
    },
    emptyOutDir: true
  },
  ssr: {
    noExternal: true
  }
});
