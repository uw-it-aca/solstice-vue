<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Getting started</h1>

      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        pulvinar est. Sed gravida neque justo, pellentesque finibus velit
        scelerisque eu. Curabitur et dolor luctus, convallis magna at, mollis
        purus. Nunc tincidunt risus quis nisl bibendum volutpat. Praesent ut
        tincidunt ex.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col-md-6">
          <h2>Design</h2>
          <ul>
            <li>
              <a
                href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
                target="_blank"
                rel="noopener"
                >bootstrap 5</a
              >
            </li>
            <li>
              <a
                href="https://icons.getbootstrap.com/"
                target="_blank"
                rel="noopener"
                >bootstrap icons</a
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

        <div class="row">
          <div class="col">
            <h2>Styleguides</h2>
            <ul>
              <li>Global Components</li>
              <li>MyUW Components</li>
            </ul>
          </div>
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
