import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";
//import AxddComponents from "../dist/axdd-components";
import AxddComponents from "./_components/"; // for dev
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap js + icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// custom axdd bootstrap css
import "../src/assets/css/styles.scss";

// axdd-component css
import "../dist/style.css";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// axdd-components
app.use(AxddComponents);

app.use(router);
app.mount("#app");
