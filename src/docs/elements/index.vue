<template>
  <Layout>
    <template #content>
      <h1>Elements</h1>

      <p class="p-0 col-md-8 lead">
        Elements are the smallest basic structures of an user interface. They
        cannot be broken down any further. Buttons, links, and inputs are good
        examples. Elements utilize decisions made on the design token level.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Bootstrap</h2>
      <p>Bootstrap is the at the core of AXDD Components.</p>

      <h2>Button</h2>

      <h2>Heading</h2>

      <h2>Paragraph</h2>

    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/docs.vue";

export default {
  components: { Layout },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
