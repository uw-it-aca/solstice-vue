import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import VueMq from 'vue-mq';

// bootstrap js
import 'bootstrap';

// custom bootstrap theme
import '../src/assets/css/custom.scss';
import '../src/assets/css/global.scss';

Vue.config.productionTip = false;

// vue-mq (media queries)
Vue.use(VueMq, {
  breakpoints: {
    // breakpoints == min-widths of next size
    mobile: 768, // tablet begins 768px
    tablet: 992, // desktop begins 992px
    desktop: Infinity,
  },
});

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
