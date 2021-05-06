import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SideBar from "../_layouts/sidebar.vue";

export default {
  title: "Layouts/Sidebar",
};

export const Default = () => ({
  components: {
    'layout': SideBar,
  },
  template: `
  <layout></layout>
  `,
});

export const Header = () => ({
  components: {
    'layout': SideBar,
  },
  template: `
  <layout
    :app-name="appName"
  >
    <template #header>
      <div class="p-0 mb-3 h2 text-center text-uppercase sidebar-heading">
        <span class="text-purple font-weight-bold">{{ appName }}</span>
      </div>
      <div class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor laudantium</div>
    </template>
  </layout>
  `,
  data: function () {
    return {
      appName: "MyApp",
    };
  },
});

export const Navigation = () => ({
  components: {
    'layout': SideBar,
  },
  template: `
  <layoutebar>
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
  </layout>
  `,
});

export const Footer = () => ({
  components: {
    'layout': SideBar,
  },
  template: `
  <layout>
    <template #footer>
      Copyright &copy; 2012-{{currentYear}} UW Information Technology - AXDD
    </template>
  </layout>
  `,
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
});

export const Content = () => ({
  components: {
    'layout': SideBar,
  },
  template: `
  <layout
    :page-title="pageTitle"
  >
    <template #content>
      <h1 class="text-uppercase">{{ pageTitle }}</h1>
      <h2>Section title</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
    </template>
  </layout>
  `,
  data: function () {
    return {
      pageTitle: "My New Page Title",
    };
  },
});
