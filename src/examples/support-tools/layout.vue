<template>
  <uw-sidebar :app-name="appName" :page-title="pageTitle">
    <template #navigation>
      <ul class="nav flex-column">
        <li class="nav-item mb-2 bg-dark-purple rounded">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-house-door-fill me-2"></i>Home</a
          >
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-mortarboard-fill me-2"></i>Academics</a
          >
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-pencil-square me-2"></i>Teaching</a
          >
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-credit-card me-2"></i>Accounts</a
          >
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-person-fill me-2"></i>Profile</a
          >
        </li>
        <li aria-hidden="true" class="nav-item mb-2">
          <a
            href="#"
            class="nav-link disabled text-gray d-block p-0 internal-link"
            ><hr class="m-0 bg-gray" />
            <span class="visually-hidden"> Navigation separator</span></a
          >
        </li>
        <li class="nav-item mb-2">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-calendar-check me-2"></i>Calendar</a
          >
        </li>
        <li class="nav-item mb-4">
          <a href="#" class="nav-link text-gray d-block px-2 py-1"
            ><i class="bi bi-bookmark-fill me-2"></i>UW Resources</a
          >
        </li>
      </ul>
    </template>
    <template #bar></template>
    <template #main>
      <div class="row">
        <div class="col">
          <h1 class="text-uppercase sidebar-heading">{{ pageTitle }}</h1>
          <slot></slot>
        </div>
      </div>
    </template>
    <template #footer></template>
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
