import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TopBar from '../_layouts/topbar.vue';
import Card from '../_base/card.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import VueMq from 'vue-mq';

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
  title: 'Layouts/Topbar',
};

export const Default = () => ({
  components: {
    layout: TopBar,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      appName: 'MyTestApp',
      currentYear: new Date().getFullYear(),
    };
  },
  template: `
  <layout :app-name="appName" :page-title="pageTitle">
  </layout>
  `,
});

export const Navigation = () => ({
  components: {
    layout: TopBar,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      appName: 'MyTestApp',
      currentYear: new Date().getFullYear(),
       // example: dynamic navigation menu
       navItems: [
        {
          title: 'Home',
          href: '#',
        },
        {
          title: 'First',
          href: '#',
        },
        {
          title: 'Second',
          href: '#',
        },
        {
          title: 'Third',
          href: '#',
        },
      ],
    };
  },
  template: `
  <layout
    :app-name="appName"
    :page-title="pageTitle"
    :user-name="userName"
    :sign-out-url="signOutUrl">

    <template #navigation>
      <ul class="nav flex-column">
        <li v-for="item in navItems" :key="item.title" class="nav-item mb-2">
          <a class="nav-link d-block px-2 py-1" :href="item.href">{{ item.title }}</a>
        </li>
      </ul>
    </template>

  </layout>
  `,
});
