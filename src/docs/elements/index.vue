<template>
  <Layout>
    <template #content>
      <h1>Elements</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Elements are the smallest basic structures of an user interface. They
        cannot be broken down any further. Buttons, links, and inputs are good
        examples. Elements utilize decisions made on the design token level.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Heading</h2>

      <h2>Paragraph</h2>

      <h2>Lists</h2>

      <h2>Button</h2>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsElementsIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
