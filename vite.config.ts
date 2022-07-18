import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactVitePlugin from '@vitejs/plugin-react';
import legacyVitePlugin from '@vitejs/plugin-legacy';

const root = resolve(__dirname, 'src');
const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  root,
  publicDir,
  build: {
    outDir,
    rollupOptions: {
      input: {
        homepage: resolve(root, 'index.html'),
        loginpage: resolve(root, 'pages/login/index.html'),
        contactpage: resolve(root, 'pages/contact/index.html'),
      },
    },
  },
  plugins: [
    reactVitePlugin(),
    legacyVitePlugin({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
});
