<template>
  <uw-sidebar :app-name="appName" :page-title="pageTitle">
    <template #header>
      <div class="p-0 mb-3 h1 text-center text-uppercase sidebar-heading">
        <span class="text-purple font-weight-bold">{{ appName }}</span>
        <span class="ms-1 text-muted font-weight-light">Support</span>
      </div>
      <div class="text-center mb-4">
        <div class="d-inline">mynetid</div>
        <div class="d-inline ms-2">
          <a
            class="btn btn-sm btn-outline-danger text-uppercase font-weight-light"
            >Logout</a
          >
        </div>
      </div>
    </template>
    <template #navigation>
      <div
        class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading"
      >
        Heading
      </div>
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
      <div
        class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading"
      >
        Heading
      </div>
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
      <div
        class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading"
      >
        Heading
      </div>
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
      <div
        class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading"
      >
        Heading
      </div>
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
      <div
        class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading"
      >
        Heading
      </div>
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
    <template #content>
      <h1 class="text-uppercase sidebar-heading">{{ pageTitle }}</h1>
      <slot></slot>
    </template>
    <template #footer>
      Copyright &copy; 2012-{{ currentYear }} UW Information Technology - AXDD
    </template>
  </uw-sidebar>
</template>

<script>
import SideBar from "../../_layouts/sidebar.vue";

export default {
  name: "Support",
  components: {
    "uw-sidebar": SideBar,
  },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      appName: "AXDD",
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap");

.sidebar-heading {
  font-family: "Open Sans Condensed", sans-serif;
}
</style>
