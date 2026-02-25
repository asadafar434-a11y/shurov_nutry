import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  server: {
    host: true,
    allowedHosts: 'all',
  },
=======
>>>>>>> d19f48c2027632490b3220c479497c3892c669a9
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
