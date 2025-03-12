import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import messages from "./texts/translations";

const i18n = createI18n({ legacy: false, locale: "hu", fallbackLocale: "en", messages });

const app = createApp(App);

import "bootstrap-icons/font/bootstrap-icons.css";

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
