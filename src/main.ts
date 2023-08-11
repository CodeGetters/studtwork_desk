import "@/assets/styles/normal.css";
import "@/assets/styles/markdown.css";
import "normalize.css";
import "virtual:uno.css";

import { createApp } from "vue";
import { createHead } from "@unhead/vue";
import { setupI18n } from "@/locales/index";
import en from "@/locales/en.json";
import router from "@/router";
import lazyLoad from "vue-lazyload";
import loading from "@/assets/images/loading.gif";
import App from "./App.vue";

const i18n = setupI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
  },
});

const app = createApp(App);
const head = createHead();
app.use(i18n);
app.use(head);
app.use(router);
app.use(lazyLoad, {
  preLoad: 1.3,
  loading: loading,
  attempt: 1,
});

app.mount("#app");
