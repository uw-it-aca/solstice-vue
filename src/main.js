import { createApp } from "vue";
import App from "./app.vue";
import router from "./router";

import VueMq from "vue3-mq";

// bootstrap js
import "bootstrap";

// custom bootstrap theme
import "../src/assets/css/custom_bootstrap.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(VueMq, {
  breakpoints: {
    // breakpoints == min-widths of next size
    mobile: 768, // tablet begins 768px
    tablet: 992, // desktop begins 992px
    desktop: Infinity,
  },
});
app.use(router);

app.mount("#app");
