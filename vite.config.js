import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // แก้เป็น Relative Path เพื่อป้องกันปัญหา 404 บน GitHub Pages
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
