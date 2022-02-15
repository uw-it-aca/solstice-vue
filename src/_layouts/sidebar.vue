<template>
  <div class="d-sm-flex align-self-stretch">
    <div
      class="bg-purple d-sm-flex flex-sm-column overflow-auto"
      style="width: 200px; min-height: 100vh"
    >
      <header class="bg-dark-purple">
        <slot name="header">
          <div class="h1 mb-3 text-uppercase text-white">{{ appName }}</div>
        </slot>
      </header>
      <nav class="" role="navigation">
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
    </div>
    <div>
      <main class="p-4">
        <slot name="content">
          <h1 class="text-uppercase text-muted">{{ pageTitle }}</h1>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            rerum dolor laudantium cum consectetur nihil, cumque ipsam
            accusantium asperiores ut delectus quae, dolores saepe sunt
            doloribus iusto dolore, doloremque aperiam.
          </p>
        </slot>
      </main>
      <footer class="mt-auto border-top my-2 mx-4 py-3 text-muted small">
        <slot name="footer">
          Copyright &copy; {{ new Date().getFullYear() }} University of
          Washington
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: "App",
    },
    pageTitle: {
      type: String,
      default: "Page Title",
    },
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>

<style lang="scss" scoped>
// sidebar global
</style>
