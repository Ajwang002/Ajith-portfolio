import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Ajith-portfolio/', // Add your repository name here
  resolve: {
    alias: {
      '@': '/src',
      'vue-unicons': 'vue-unicons/dist/icons'
    }
  },
  build: {
    rollupOptions: {
      external: ['vue-unicons']
    }
  },
  optimizeDeps: {
    include: ['vue-unicons/dist/icons']
  },
  server:{
    port: 3500
  }
})
