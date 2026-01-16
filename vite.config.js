import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'docs',
  },
  server: {
    port: 5771,
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.16.1.156:3000', // ← ИЗМЕНИЛ localhost вместо IP
        changeOrigin: true,
        secure: false,
        // Для отладки
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('❌ Proxy error:', err.message);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('🔄 Proxy:', req.method, req.url, '→', proxyReq.path);
          });
        }
      },
      '/rest': {
        target: 'http://10.16.1.156:3000', // ← тоже localhost
        changeOrigin: true,
        secure: false,
      },
      '/policy': {
        target: 'http://10.16.1.156:3000', // ← тоже localhost
        changeOrigin: true,
        secure: false,
      },
    },
  },
});