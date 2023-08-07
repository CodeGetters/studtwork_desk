import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/normal.css";
import "virtual:uno.css";
import router from "@/router";
import "normalize.css";

const app = createApp(App);
app.use(router);

app.mount("#app");
