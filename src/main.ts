import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./styles/index.scss";

// 根据环境变量决定是否要开启mockjs
if (import.meta.env.VITE_MOCK_OPEN == "true") {
  import("./mock/index.ts");
}

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
