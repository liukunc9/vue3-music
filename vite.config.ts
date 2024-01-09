import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string): any => {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      '@utils': pathResolve('./src/utils'),
      '@views': pathResolve('./src/views'),
      '@components': pathResolve('./src/components'),
      '@router': pathResolve('./src/router'),
    }
  },
  plugins: [vue()],
})
