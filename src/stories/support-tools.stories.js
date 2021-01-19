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
  <uw-support-tools
    appName="MyApp"
    userID="mynetid"
    logoutURL="https://uw.edu"
  >
  </uw-support-tools>
  `,
});

export const Navigation = () => ({
  components: {
    'uw-support-tools': SupportTools,
  },
  template: `
  <uw-support-tools appName="MyApp">
    <template #navigation>
      <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
      <ul class="list-unstyled">
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
      </ul>
      <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
      <ul class="list-unstyled">
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
      </ul>
    </template>
  </uw-support-tools>
  `,
});

export const Content = () => ({
  components: {
    'uw-support-tools': SupportTools,
  },
  template: `
  <uw-support-tools
    appName="MyApp"
    pageTitle="My Page Title"
  >
    <template #content>
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
