<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <b-icon-front class="mr-2 text-purple"></b-icon-front>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Getting started</h1>

      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget pulvinar est. Sed
        gravida neque justo, pellentesque finibus velit scelerisque eu. Curabitur et dolor luctus,
        convallis magna at, mollis purus. Nunc tincidunt risus quis nisl bibendum volutpat. Praesent
        ut tincidunt ex.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col-md-6">
          <h2>Development</h2>
          <ul>
            <li>
              <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
            </li>
            <li>
              <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
            </li>
            <li>
              <a href="https://bootstrap-vue.org/" target="_blank" rel="noopener">bootstrap-vue</a>
            </li>
            <li>
              <a
                href="https://github.com/FortAwesome/vue-fontawesome"
                target="_blank"
                rel="noopener"
                >vue-fontawesome</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Examples</h2>
          <ul>
            <li>
              <router-link to="/myapp">MyApp</router-link>
            </li>
            <li><router-link to="/support">Support Tools</router-link></li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Storybook</h2>
          <p>Run the following command to start the Storybook server.</p>
          <p>
            URL:
            <a href="http://localhost:6006/" target="_blank" rel="noopener"
              >http://localhost:6006</a
            >
          </p>
        </div>
      </div>

      <footer class="pt-5 my-5 text-muted border-top">
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
