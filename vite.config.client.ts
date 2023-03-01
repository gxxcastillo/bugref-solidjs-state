import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        generate: 'dom',
        hydratable: true,
      },
    }),
  ],

  build: {
    ssr: 'src/client.tsx',
    outDir: 'dist/public',
    emptyOutDir: true,
    rollupOptions: {
      external: [],
    },
  },

  ssr: {
    target: 'webworker',
    noExternal: true,
  },
});
