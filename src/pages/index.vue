<template>
  <Layout>
    <template #content>
      Welcome to Solstice Design System. Here is where you can start building components.
    </template>
  </Layout>
</template>

<script>
import Layout from "../layout.vue";
import PatternDescription from "../components/PatternDescription.vue";

export default {
  name: "DocsIndex",
  components: {
    Layout,
    PatternDescription,
  },
  data() {
    return {};
  },
};
</script>
