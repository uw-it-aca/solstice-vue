import Vue from 'vue'
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

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
  faSquare as fasSquare,
  faTimes,
  faPencilAlt,
  faCheck,
  faPlus,
  faCheckCircle,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  faEdit,
  faCreditCard,
  faCalendarAlt,
  faCalendarCheck,
  faSquare,
  faCircle,
} from '@fortawesome/free-regular-svg-icons';

// fontawesome 5
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

library.add(faExclamationTriangle);

import Card from "../_base/card.vue";
import CardStatus from "../_base/card-status.vue";
import LinkButton from "../_base/link-button.vue";

export default {
  title: "Base/Card Property",
};

export const Default = () => ({
  components: {
    'uw-card': Card,
   },
  template: `
  <uw-card>
  &nbsp;
  </uw-card>
  `,
});


