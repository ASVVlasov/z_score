import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: { outDir: 'docs' },
  base: 'z_score',
  plugins: [react()],
})
