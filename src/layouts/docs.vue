<template>
  <div class="container-xl">
    <div class="px-3">
      <header
        class="d-flex justify-content-between align-items-center pb-3 my-4 border-bottom"
      >
        <div class="h4 flex-fill">
          <i class="bi bi-box me-2 text-purple"></i>
          <a href="/" class="text-reset text-decoration-none"
            >AXDD Components</a
          >
        </div>
        <div class="me-3">
          <nav class="nav">
            <router-link
              class="nav-link rounded me-1 bg-purple-hover text-white-hover"
              active-class="bg-dark-purple text-white"
              to="/content/"
              >Content</router-link
            >
            <router-link
              class="nav-link rounded me-1 bg-purple-hover text-white-hover"
              active-class="bg-dark-purple text-white"
              to="/tokens/"
              >Design Tokens</router-link
            >
            <router-link
              class="nav-link rounded me-1 bg-purple-hover text-white-hover"
              active-class="bg-dark-purple text-white"
              to="/elements/"
              >Elements</router-link
            >

            <router-link
              class="nav-link rounded bg-purple-hover text-white-hover"
              active-class="bg-dark-purple text-white"
              to="/components/"
              >Components</router-link
            >
          </nav>
        </div>
        <div class="text-muted">V.1.0.5</div>
      </header>

      <main>
        <slot name="content" />
      </main>

      <footer class="pt-2 mt-5 mb-3 text-muted border-top">
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
