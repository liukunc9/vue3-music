/// <reference types="vite/client" />
/// <reference types="node_modules/element-plus/global.d.ts" />

// 在ts中获取智能提示
interface ImportMetaEnv {
  readonly VITE_MOCK_OPEN: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
