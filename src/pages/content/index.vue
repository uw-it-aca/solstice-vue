<template>
  <Layout>
    <template #content>
      <h1>Content</h1>

      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
        quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
        ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
        autem molestias?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Voice and Tone</h2>
      <h2>Grammar and mechanics</h2>
      <h2>Language and inclusivity</h2>
      <h2>Writing for errors</h2>
      <h2>Writing for onboarding</h2>

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
