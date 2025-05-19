import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Update the base path if you deploy to a subdirectory on GitHub Pages
  base: '/my-portfolio/'
});
