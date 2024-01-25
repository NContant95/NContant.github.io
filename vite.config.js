import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/site-corrales/', // Remplacez 'nom-de-votre-repository' par le nom de votre référentiel GitHub

  plugins: [vue()],

  build: {
    outDir: 'dist',
    assetsDir: '',
    rollupOptions: {
      input: {
        main: './main-GV8ptCoH.js'
      }
    }
  }
})
