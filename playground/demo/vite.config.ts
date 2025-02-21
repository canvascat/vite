import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import SvgSprite from './plugins/vite-plugin-svg-sprite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    /* react(), */
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
