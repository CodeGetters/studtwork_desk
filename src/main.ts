import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "@/router";
import "normalize.css";
import "@/assets/styles/normal.css";
import "virtual:uno.css";
import "@/assets/styles/markdown.css";

const app = createApp(App);
const head = createHead();
app.use(head);
app.use(router);

app.mount("#app");
