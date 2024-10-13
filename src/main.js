import { createApp } from "vue";

import App from "@/app.vue";
import router from "@/router";

//import SolsticeVue from "@/components";
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap js + icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice bootstrap theming
//import "@/assets/css/custom.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// solstice-vue
//app.use(SolsticeVue);

app.use(router);
app.mount("#app");
