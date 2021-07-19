import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import VueMq from 'vue-mq';

// bootstrap js
import 'bootstrap';

// custom bootstrap theme
import '../src/assets/css/custom.scss';
import '../src/assets/css/global.scss';

// fontaweome
import {
  faUser,
  faLink,
  faEnvelope,
  faSearch,
  faSignOutAlt,
  faHome,
  faPaw,
  faBookmark,
  faExclamationTriangle,
  faGraduationCap,
  faBars,
  faLocationArrow,
  faClone,
  faSquareFull,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faSquare as fasSquare,
  faTimes,
  faPencilAlt,
  faCheck,
  faPlus,
  faCheckCircle,
  faChevronRight,
  faChevronUp,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  faEdit,
  faCreditCard,
  faCalendarAlt,
  faCalendarCheck,
  faSquare,
  faCircle,
} from '@fortawesome/free-regular-svg-icons';

library.add(faUser);
library.add(faLink);
library.add(faClone);
library.add(faEnvelope);
library.add(faSearch);
library.add(faSignOutAlt);
library.add(faHome);
library.add(faPaw);
library.add(faGraduationCap);
library.add(faEdit);
library.add(faCreditCard);
library.add(faCalendarAlt);
library.add(faCalendarCheck);
library.add(faBookmark);
library.add(faExclamationTriangle);
library.add(faInfoCircle);
library.add(faSquare);
library.add(faSquareFull);
library.add(fasSquare);
library.add(faBars);
library.add(faLocationArrow);
library.add(faCaretRight);
library.add(faCaretDown);
library.add(faCaretUp);
library.add(faTimes);
library.add(faPencilAlt);
library.add(faCheck);
library.add(faPlus);
library.add(faCheckCircle);
library.add(faCircle);
library.add(faChevronRight);
library.add(faChevronUp);

// fontawesome 5
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

// bootstrap vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

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
