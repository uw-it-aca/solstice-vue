<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Getting started</h1>

      <p class="p-0 col-md-8 lead">
        AXDD Components is a resource for building and documenting UI components
        with Bootstrap and Vue.js. It provides a set of organized tools,
        patterns & practices that work as the foundation for application design
        and development at AXDD.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col-md-6">
          <h2>Development</h2>
          <ul>
            <li>Vue 3 (Options API)</li>
            <li>Vuex (state management)</li>
          </ul>

          <h2>Design</h2>
          <ul>
            <li>Bootstrap 5</li>
            <li>Bootstrap Icons</li>
          </ul>

          <h2>Goals</h2>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
          </ul>
        </div>
        <div class="col-md-6">

          <h2>Docs</h2>
          <ul>
            <li>Overview</li>
            <li>Design Principles</li>
            <li>Layouts</li>
            <li>Components</li>
          </ul>

          <h2>Sandbox</h2>
          <ul>
            <li>
              <router-link to="/myapp">MyApp</router-link>
            </li>
            <li><router-link to="/support">Support Tools</router-link></li>
          </ul>
        </div>
      </div>

      <footer class="pt-5 my-5 text-muted border-top">
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
