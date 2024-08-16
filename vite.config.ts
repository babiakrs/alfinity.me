/// <reference types='vitest' />
import { networkInterfaces, NetworkInterfaceInfo } from 'node:os';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

function getLocalIP(): string {
  const localInterface = (Object.values(networkInterfaces()) as NetworkInterfaceInfo[][])
    .flat()
    .find(({ family, internal }) => family === 'IPv4' && !internal);

  return localInterface?.address ?? 'localhost';
}

export default defineConfig({
  root: __dirname,
  cacheDir: './node_modules/.vite/alfinity.me',

  server: {
    port: 4200,
    host: getLocalIP()
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [ react(), nxViteTsPaths() ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: './dist/alfinity.me',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },

  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },

  test: {
    watch: false,
    globals: true,
    cache: {
      dir: './node_modules/.vitest/alfinity.me'
    },
    environment: 'jsdom',
    include: [ 'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}' ],

    reporters: [ 'default' ],
    coverage: {
      reportsDirectory: './coverage/alfinity.me',
      provider: 'v8'
    }
  }
});
