import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Boilerplate from "../_layouts/boilerplate/boilerplate.vue";
import Card from "../_base/card.vue";

export default {
  title: "Layouts/Boilerplate",
};

export const Default = () => ({
  components: {
    'uw-boilerplate': Boilerplate,
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
