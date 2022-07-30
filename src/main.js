import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap js
import "bootstrap";
// custom bootstrap theme
import "../src/assets/css/custom.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);
app.use(router);
app.mount("#app");
