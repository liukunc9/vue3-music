import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string): any => {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";',
      }
    }
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    }
  },
  plugins: [vue()],
})
