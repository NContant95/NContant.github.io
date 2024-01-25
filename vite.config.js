import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default {
  build: {
    outDir: 'dist', // spécifie le répertoire de sortie du build
    assetsDir: 'assets', // spécifie le répertoire où seront placés les fichiers statiques
    rollupOptions: {
      input: {
        main: './src/main.js' // spécifie le chemin d'accès vers votre main.js
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
