import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/janaki-portfolio/',
  plugins: [react()],
})
