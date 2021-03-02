<template>
  <!-- layout.vue: this is where you override the layout -->
  <layout :app-name="appName" :page-title="pageTitle">
    <template #header>
    </template>
    <template #navigation>
      <!-- navigation menu
      <ul class="list-unstyled">
        <li><a href="#">link</a></li>
        <li><a href="#">link</a></li>
        <li><a href="#">link</a></li>
        <li><a href="#">link</a></li>
      </ul> -->
    </template>
    <template #main>
      <!-- main content
      <h1>{{ pageTitle }}</h1>
      <div>askjdflkasjfd</div>
      <slot name="content"></slot>
      -->
    </template>
    <template #footer>
      <!-- footer
      <div class="text-white font-weight-light">
        this is my footer<br/>
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </div> -->
    </template>
  </layout>
</template>

<script>
import TopBar from '../../_layouts/topbar.vue';

export default {
  name: 'MyApp',
  components: {
    layout: TopBar,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      appName: 'PrereqMap',
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
