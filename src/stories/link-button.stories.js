import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import LinkButton from "../components/link-button.vue";

export default {
  title: "Components/LinkButton",
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
