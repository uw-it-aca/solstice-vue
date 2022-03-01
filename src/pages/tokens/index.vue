<template>
  <Layout>
    <template #content>
      <h1>Design Tokens</h1>

      <p class="p-0 col-md-8 lead">
        Design tokens are the atoms of the system as Salesforce describes them.
        In Vue Design System they are used instead of hard coded values to
        ensure a better consistency across any platform.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Bootstrap</h2>
      <p>Bootstrap is the at the core of AXDD Components.</p>

      <h2>Color Pallete</h2>

      <h2>Font Sizes</h2>

      <h2>Typography</h2>
      <h2>Data Visualization</h2>
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
