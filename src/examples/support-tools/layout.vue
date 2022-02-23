<template>
  <uw-sidebar :app-name="appName" :page-title="pageTitle">
    <template #navigation>
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold">
        Heading
      </div>
      <ul class="list-unstyled mb-5">
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
    <template #main>
      <div class="row justify-content-center pt-4">
        <div class="col-sm-12 col-lg-9">
          <h1 class="text-uppercase sidebar-heading">{{ pageTitle }}</h1>
          <slot></slot>
        </div>
      </div>
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
      appName: "MyApp",
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
