import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@shared': '/src/shared'
    }
  }
})
