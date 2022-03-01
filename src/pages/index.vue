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
        <div class="col">
          <h2>Goals</h2>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
          </ul>
        </div>
        <div class="col">
          <h2>Principles</h2>
          <ul>
            <li>
              <router-link to="/docs/principles">Design Principles</router-link>
            </li>
            <li>
              <router-link to="/docs/development"
                >Development Principles</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <h2>Style Guide</h2>
          <ul>
            <li>Bootstrap 5</li>
            <li>Bootstrap Icons</li>

            <li>
              <router-link to="/docs/voice">Voice &amp; Tone</router-link>
            </li>
            <li>
              <router-link to="/docs/tokens">Design Tokens</router-link>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2>Component Guide</h2>
          <ul>
            <li>Vue 3 (Options API)</li>
            <li>Vuex (state management)</li>

            <li><router-link to="/docs/elements">Elements</router-link></li>
            <li><router-link to="/docs/patterns">Patterns</router-link></li>
            <li><router-link to="/docs/templates">Templates</router-link></li>
          </ul>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <h3>Implementations</h3>
          <p>There is 3 types of documentation...</p>

          <ol>
            <li>research - studies and rationale (gdocs, wiki)</li>
            <li>
              build - communicates what is being created (Figma,Jira,gdocs)
            </li>
            <li>
              deploy - what was released(screenshot),
              elements/patterns/templates (this?)
            </li>
          </ol>

          <ul>
            <li>
              <router-link to="/dev/topbar/">MyUW</router-link>
            </li>
            <li><router-link to="/dev/sidebar/">DawgPath</router-link></li>
          </ul>
        </div>
        <div class="col">
          <h3>Dev Sandbox</h3>
          <ul>
            <li>
              <router-link to="/dev/topbar/">Topbar</router-link>
            </li>
            <li><router-link to="/dev/sidebar/">Sidebar</router-link></li>
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
