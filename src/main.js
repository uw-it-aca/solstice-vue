import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";

import App from "@/app.vue";
import router from "@/router";

//import SolsticeVue from "@/components";
import { Vue3Mq, MqResponsive } from "vue3-mq";

// bootstrap js + icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice bootstrap theme (version release) -OR-
// import "solstice-theme/dist/solstice.scss";
// solstice bootstrap theme (local development)
import "@/assets/css/solstice.scss";

// solstice-vue comps
import "solstice-vue/dist/style.css";

// bootstrap-vue-next css
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

const app = createApp(App);

app.config.productionTip = false;

app.use(createBootstrap()); // Important

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

// solstice-vue
//app.use(SolsticeVue);

app.use(router);
app.mount("#app");
