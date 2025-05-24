import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: ['4174-iqcipwwqaoqe7701hz53e-88ed6276.manus.computer', '.manus.computer']
  }
})
