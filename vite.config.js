import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ← MUST ADD THIS for correct asset paths
  build: {
    assetsDir: 'assets', // ← Explicit assets directory
    manifest: true, // ← Helps with production debugging
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  css: {
    postcss: './postcss.config.cjs'
  },
  server: { // ← Optional: For local testing
    host: true,
    port: 3000
  }
});