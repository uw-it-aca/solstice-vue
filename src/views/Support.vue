<template>
  <uw-sidebar
    :app-name="appName"
    :page-title="pageTitle"
  >
    <template #header>
      <div class="p-0 mb-3 h1 text-center text-uppercase sidebar-heading">
        <span class="text-purple font-weight-bold">{{ appName }}</span>
        <span class="ml-1 text-muted font-weight-light">Support</span>
      </div>
      <div class="text-center mb-4">
        <div class="d-inline">mynetid</div>
        <div class="d-inline ml-2">
          <a
            :href="logoutUrl"
            class="btn btn-sm btn-outline-danger text-uppercase font-weight-light"
            >Logout</a
          >
        </div>
      </div>
    </template>
    <template #navigation>
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
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
      <div class="mb-1 text-secondary text-uppercase font-weight-bold sidebar-heading">Heading</div>
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
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
    </template>
    <template #footer>
      Copyright &copy; 2012-{{ currentYear }} UW Information Technology - AXDD
    </template>
  </uw-sidebar>
</template>

<script>
import SideBar from '../_layouts/sidebar/index.vue';

export default {
  name: 'Support',
  components: {
    'uw-sidebar': SideBar,
  },
  data: function () {
    return {
      appName: "MYUW",
      pageTitle: "Home",
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
