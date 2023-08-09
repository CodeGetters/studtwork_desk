import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "@/router";
import lazyLoad from "vue-lazyload";
import loading from "@/assets/images/loading.gif";
import "@/assets/styles/normal.css";
import "@/assets/styles/markdown.css";
import "normalize.css";
import "virtual:uno.css";

const app = createApp(App);
const head = createHead();

app.use(head);
app.use(router);
app.use(lazyLoad, {
  preLoad: 1.3,
  loading: loading,
  attempt: 1,
});

app.mount("#app");
