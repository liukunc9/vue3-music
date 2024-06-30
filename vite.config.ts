import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathResolve = (dir: string): any => {
  return path.resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": pathResolve("./src"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Element Plus 相关函数，如: ElMessage，导入到 auto-imports.ts
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 自动导入 Element Plus 组件,导入到 components.d.ts
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
