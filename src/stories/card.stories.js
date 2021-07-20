import Vue from 'vue'
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import Card from "../_base/card.vue";
import CardStatus from "../_base/card-status.vue";
import LinkButton from "../_base/link-button.vue";

export default {
  title: "Base/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
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

export const Loading = () => ({
  components: {
    'uw-card': Card,
  },
  template: `
  <uw-card>
    <template>
      Loading...
    </template>
  </uw-card>
  `,
});

export const Heading = () => ({
  components: {
    'uw-card': Card,
  },
  template: `
  <uw-card>
    <template>
    <h3 class="h4 mb-3 text-dark-beige myuw-font-encode-sans">Card Heading</h3>
    </template>
  </uw-card>
  `,
});

export const Error = () => ({
  components: {
    'uw-card': Card,
    'font-awesome-icon': FontAwesomeIcon,
  },
  data() {
    return {
      faExclamationTriangle,
    };
  },
  template: `
  <uw-card>
    <template>
      <h3 class="h4 mb-3 text-dark-beige myuw-font-encode-sans">Card Heading</h3>
      <p class="text-danger myuw-text-md">
        <font-awesome-icon :icon="faExclamationTriangle" />
        An error occurred and MyUW cannot load your notices right now. Please
        try again later.
      </p>
    </template>
  </uw-card>
  `,
});

export const Disclosure = () => ({
  components: {
    'uw-card': Card,
  },
  template: `
  <uw-card>
    lorem ipsum
  </uw-card>
  `,
});


