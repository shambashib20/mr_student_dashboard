import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['fs', 'path', 'os'],
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'os'],
    },
  },
})
