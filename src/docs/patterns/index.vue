<template>
  <Layout>
    <template #content>
      <h1>Patterns</h1>

      <p class="p-0 col-md-8 lead">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design rationale.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Page Layouts</h2>
      <p><router-link to="/patterns/layouts">Page Layouts</router-link></p>
      <h2>Navigation</h2>

      <h2>Cards</h2>

    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/home.vue";

export default {
  components: { Layout },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
