<template>
  <div class="sidebar">
    <div class="d-md-flex align-self-stretch">
      <div class="py-4 px-3 bg-light d-md-flex flex-md-column sidebar-container">
        <div class="sidebar-header">
          <slot name="header">
            <div class="h1 mb-3 text-uppercase text-muted">{{ appName }}</div>
          </slot>
        </div>
        <nav class="sidebar-navigation" role="navigation">
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
        <div class="mt-auto border-top pt-2 text-muted small sidebar-footer">
          <slot name="footer">
            Copyright &copy; 2021
          </slot>
        </div>
      </div>
      <main class="p-4 sidebar-main">
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
.sidebar {
  min-width: 280px;
}

.sidebar-footer {
  min-height: 20px;
}
// main responsive tablet and desktop
@media (min-width: 768px) {
  .sidebar-container {
    min-width: 260px;
    max-width: 260px;
  }
  .sidebar-main {
    height: 100vh;
    overflow: scroll;
  }
}
</style>
