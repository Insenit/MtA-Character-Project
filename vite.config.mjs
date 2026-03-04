import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM config file — ensures plugins that are ESM-only can be loaded correctly.
export default defineConfig({
  plugins: [react()]
})
