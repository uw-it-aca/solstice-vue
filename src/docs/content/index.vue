<template>
  <Layout>
    <template #content>
      <h1>Content</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
        quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
        ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
        autem molestias?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Voice and Tone</h2>
      <p>Go read about <a href="/content/voice">voice and tone</a></p>
      <h2>Grammar and mechanics</h2>
      <h2>Language and inclusivity</h2>
      <p>
        <a href="https://itconnect.uw.edu/work/inclusive-language-guide/"
          >https://itconnect.uw.edu/work/inclusive-language-guide/</a
        >
      </p>
      <p>Common guiding principles:</p>
      <h2>Writing for errors</h2>
      <p>Error states</p>
      <ul>
        <li>404</li>
        <li>500</li>
        <li>Form validation</li>
      </ul>
      <h2>Writing for page state</h2>
      <p>Empty lists</p>
      <h2>Writing for onboarding</h2>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsContentIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
