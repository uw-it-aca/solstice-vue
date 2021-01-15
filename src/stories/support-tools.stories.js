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
   <template>
    <h2>Section title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
    </template>
  </uw-support-tools>
  `,
});
