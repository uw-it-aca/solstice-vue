<template>
  <div class="axdd-sidebar">
    <div class="d-sm-flex align-self-stretch">
      <div class="py-4 px-3 bg-light d-sm-flex flex-sm-column axdd-sidebar-container">
        <header class="sidebar-header">
          <slot name="header">
            <div class="h1 mb-3 text-uppercase text-muted">{{ appName }}</div>
          </slot>
        </header>
        <nav class="axdd-sidebar-navigation" role="navigation">
          <slot name="navigation">
            <div class="text-uppercase">Nav Heading</div>
            <ul class="list-unstyled">
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
            </ul>
          </slot>
        </nav>
        <footer class="mt-auto border-top pt-2 text-muted small axdd-sidebar-footer">
          <slot name="footer">
            Copyright &copy; 2021
          </slot>
        </footer>
      </div>
      <main class="p-4 axdd-sidebar-main">
        <slot name="content">
          <h1 class="text-uppercase text-muted">{{ pageTitle }}</h1>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
            laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut delectus quae,
            dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
          </p>
        </slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: "App"
    },
    pageTitle: {
      type: String,
      default: "Page Title"
    },
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + ' - ' + this.appName;
  },
};
</script>

<style lang="scss" scoped>
// storybook only
.sb-show-main {
  .sidebar {
    padding: 0 !important;
    border: dashed 1px lightgrey;
  }
  main {
    height: 500px;
  }
}
// sidebar global
.axdd-sidebar {
  min-width: 280px;
}

.axdd-sidebar-footer {
  min-height: 20px;
}
// main responsive tablet and desktop
@media (min-width: 576px) {
  .axdd-sidebar-container {
    min-width: 260px;
    max-width: 260px;
  }
  .axdd-sidebar-main {
    height: 100vh;
    overflow: scroll;
  }
}
</style>
