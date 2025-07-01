import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build', // ✅ Firebase ke liye output folder
    emptyOutDir: true, // Optional: purani build clean kar deta hai
  },
});
