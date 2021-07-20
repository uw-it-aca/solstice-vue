import Vue from 'vue'
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Card from "../_base/card.vue";
import CardStatus from "../_base/card-status.vue";

export default {
  title: "Base/Card Status",
};

export const Default = () => ({
  components: {
    'uw-card': Card,
    'uw-card-status': CardStatus,
   },
  template: `
  <uw-card>
    <uw-card-status>
      <template #status-label>Student Husky Account</template>
      <template #status-value>$123</template>
    </uw-card-status>
    <uw-card-status>
      <template #status-label>Employee Husky Account</template>
      <template #status-value>
        <span class="text-danger">-$3</span>
      </template>
    </uw-card-status>
  </uw-card>
  `,
});
