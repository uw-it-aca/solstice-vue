import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SupportTools from "../_layouts/support-tools/index.vue";

export default {
  title: "Layouts/Support Tools",
};

export const Default = () => ({
  components: {
    'uw-support-tools': SupportTools,
   },
  template: `
  <uw-support-tools>
   lorem ipsum
  </uw-support-tools>
  `,
});
