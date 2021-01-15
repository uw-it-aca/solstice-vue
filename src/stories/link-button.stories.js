import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import LinkButton from "../_base/link-button.vue";

export default {
  title: "Base/LinkButton",
};

export const Default = () => ({
  components: {
    'uw-link-button': LinkButton,
   },
  template: `
  <uw-link-button
    href="#"
    target="_blank"
  >
   lorem ipsum
  </uw-link-button>
  `,
});