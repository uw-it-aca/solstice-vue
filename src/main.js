import { createApp } from "vue";
import { createBootstrap } from "bootstrap-vue-next";
import { Vue3Mq, MqResponsive } from "vue3-mq";

import App from "@/app.vue";
import router from "@/router";

// bootstrap js + icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice bootstrap theme (version release)
// import "solstice-theme/dist/solstice.scss";

// -OR-

// solstice bootstrap theme (local development for 'custom.scss' file on solstice-theme)
import "@/assets/css/solstice.scss";

// solstice-vue comps
import "solstice-vue/dist/style.css";

// bootstrap-vue-next css
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

const app = createApp(App);

app.config.productionTip = false;

// bootstrap-vue-next
app.use(createBootstrap());

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});
app.component("mq-responsive", MqResponsive);

app.use(router);
app.mount("#app");
