<template>
  <!-- layout.vue: this is where you override the layout -->
  <axdd-topbar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userName"
    :sign-out-url="signOutUrl"
  >
    <template #header></template>
    <template #bar></template>
    <template #main>
      <!-- main section override -->
      <h1>
        <slot name="title">{{ pageTitle }}</slot>
      </h1>
      <slot name="content"></slot>
    </template>
    <template #footer></template>
  </axdd-topbar>
</template>

<script>
import Topbar from "../../../_layouts/topbar.vue";

export default {
  components: {
    "axdd-topbar": Topbar,
  },
  data() {
    return {
      // minimum application setup overrides
      appName: "MyApp",
      appRootUrl: "/myapp",
      userName: "javerage",
      signOutUrl: "/signout",
      pageTitle: "Home",
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>

<style lang="scss" scoped></style>
