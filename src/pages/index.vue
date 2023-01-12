<template>
  <Layout>
    <template #content>
      Welcome to Solstice Design System. Here is where you can start building components.


      <axdd-card>
        <template #body>card body</template>
      </axdd-card>

    </template>
  </Layout>
</template>

<script>
import Layout from "../layout.vue";

export default {
  name: "DocsIndex",
  components: {
    Layout,
  },
  data() {
    return {};
  },
};
</script>
