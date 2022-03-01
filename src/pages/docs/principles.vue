<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Design Principles</h1>

      <p class="p-0 col-md-8 lead">
        Principles are the foundation of the system. They form the basis of a
        good product and help the team with decision making. They are here to
        guide you and your team when working with the myriad parts of the system
        and help you do better and more informed decisions.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Example:
        <a href="https://designsystem.digital.gov/design-principles/"
          >https://designsystem.digital.gov/design-principles/</a
        >
      </p>

      <h2>Design is how it works</h2>
      <h2>Reduce concepts to increase confidence</h2>
      <h2>Design with real data</h2>
      <h2>Design systems, not pages</h2>
      <h2>Involve code early</h2>
      <h2>Fast is better than slow</h2>
      <h2>Let content determine breakpoints</h2>
      <h2>Strive for universality</h2>

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
