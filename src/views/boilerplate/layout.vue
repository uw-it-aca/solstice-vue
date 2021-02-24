<template>
  <uw-boilerplate
    :app-name="appName"
    :page-title="pageTitle"
  >
    <template #header>

    </template>
    <template #navigation>
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
      <ul class="list-unstyled">
        <li>
          <a href="/support">Home</a>
        </li>
        <li>
          <a href="/support/pulse">Social Pulse</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
      </ul>
    </template>
    <template #content>
      <h1 class="">{{ pageTitle }}</h1>
      <slot></slot>
    </template>
    <template #footer>
      Copyright &copy; 2012-{{ currentYear }} UW Information Technology - AXDD
    </template>
  </uw-boilerplate>
</template>

<script>
import BoilerPlate from '../../_layouts/boilerplate/index.vue';

export default {
  name: 'MyApp',
  components: {
    'uw-boilerplate': BoilerPlate,
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    },
  },
  data: function () {
    return {
      appName: "MyApp",
      currentYear: new Date().getFullYear(),
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
