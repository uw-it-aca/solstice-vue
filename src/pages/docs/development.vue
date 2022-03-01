<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Development Principles</h1>

      <p class="p-0 col-md-8 lead">
        Principles are the foundation of the system. They form the basis of a
        good product and help the team with decision making. They are here to
        guide you and your team when working with the myriad parts of the system
        and help you do better and more informed decisions.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Example:
        <a href="https://betterprogramming.pub/7-software-development-principles-that-should-be-embraced-daily-c26a94ec4ecc"
          >https://betterprogramming.pub/7-software-development-principles-that-should-be-embraced-daily-c26a94ec4ecc</a
        >
      </p>

      <h2>You Aren’t Gonna Need It — YAGNI</h2>
      <h2>Don’t Repeat Yourself — DRY</h2>
      <h2>Keep It Simple, Stupid — KISS</h2>
      <h2>Big Design Up Front</h2>
      <h2>SOLID</h2>
      <h2>Avoid Premature Optimization</h2>
      <h2>Occam’s Razor</h2>

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
