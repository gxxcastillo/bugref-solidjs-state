import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        generate: 'ssr',
        hydratable: true,
      },
    })
  ],

  build: {
    ssr: 'src/server.tsx',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: [],
    },
  },
});
