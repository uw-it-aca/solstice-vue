import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import TopBar from "../_layouts/topbar.vue";
import Card from "../_base/card.vue";

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import Vue from 'vue'
import VueMq from 'vue-mq';

// fontaweome
import {
  faUser,
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


// bootstrap vue plugins
import {
  AlertPlugin,
  BadgePlugin,
  ButtonPlugin,
  CardPlugin,
  CollapsePlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormSelectPlugin,
  FormCheckboxPlugin ,
  InputGroupPlugin,
  ModalPlugin,
  LayoutPlugin,
  LinkPlugin,
  NavPlugin,
  PopoverPlugin ,
  SpinnerPlugin,
  TablePlugin ,
  TabsPlugin,
  VBTogglePlugin,
  TooltipPlugin,
} from 'bootstrap-vue';

// bootstrap-vue components as plugins
Vue.use(AlertPlugin);
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(CollapsePlugin);
Vue.use(FormCheckboxPlugin );
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormSelectPlugin);
Vue.use(InputGroupPlugin);
Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(NavPlugin);
Vue.use(PopoverPlugin)
Vue.use(SpinnerPlugin);
Vue.use(TabsPlugin);
Vue.use(VBTogglePlugin);
Vue.use(ModalPlugin);
Vue.use(TablePlugin);
Vue.use(TooltipPlugin);

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

export default {
  title: "Layouts/Topbar",
};

export const Default = () => ({
  components: {
    'uw-boilerplate': TopBar,
   },
  template: `
  <uw-boilerplate>
   lorem ipsum
  </uw-boilerplate>
  `,
});

export const Navigation = () => ({
  components: {
    'uw-card': Card,
  },
  template: `
  <uw-card>
    lorem ipsum
  </uw-card>
  `,
});

export const Messaging = () => ({
  components: {
    'uw-card': Card,
  },
  template: `
  <uw-card>
    lorem ipsum
  </uw-card>
  `,
});
