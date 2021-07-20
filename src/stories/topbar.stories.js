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
