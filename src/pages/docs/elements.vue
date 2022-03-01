<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Elements</h1>

      <p class="p-0 col-md-8 lead">
        Elements are the smallest basic structures of an user interface. They
        cannot be broken down any further. Buttons, links, and inputs are good
        examples. Elements utilize decisions made on the design token level.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Button</h2>

      <h2>Heading</h2>

      <h2>Paragraph</h2>

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
