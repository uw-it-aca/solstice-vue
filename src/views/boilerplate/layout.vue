<template>
  <!-- layout.vue: this is where you override the layout -->
  <layout :app-name="appName" :page-title="pageTitle">
    <template #header></template>
    <template #navigation>
      <!-- navigation menu override -->
      <b-nav vertical>
        <b-nav-item
          v-for="item in navItems"
          :key="item.title"
          class="mb-2"
          :href="item.href"
          :link-classes="'d-block px-2 py-1'"
        >
          {{ item.title }}
        </b-nav-item>
      </b-nav>
    </template>
    <template #main>
      <!-- main section override -->
      <h1>
        <slot name="title">
          {{ pageTitle }}
        </slot>
      </h1>
      <slot name="content"></slot>
    </template>
    <template #footer>
      <!-- footer section overrixe -->
      <div class="text-white font-weight-light">
        this is my custom footer<br/>
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </div>
    </template>
  </layout>
</template>

<script>
import TopBar from '../../_layouts/topbar.vue';

export default {
  name: 'MyApp',
  components: {
    'layout': TopBar,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      appName: 'PrereqMap v3',
      currentYear: new Date().getFullYear(),
      navItems: [
        {
          title: 'Home',
          href: '#',
        },
        {
          title: 'First',
          href: '#',
        },
        {
          title: 'Second',
          href: '#',
        },
        {
          title: 'Third',
          href: '#',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap');

.sidebar-heading {
  font-family: 'Open Sans Condensed', sans-serif;
}
</style>
