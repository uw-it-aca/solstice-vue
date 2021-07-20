import Vue from 'vue'
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

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


