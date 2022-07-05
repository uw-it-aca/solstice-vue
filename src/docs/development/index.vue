<template>
  <Layout>
    <template #content>
      <h1>Development Guide</h1>

      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
        quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
        ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
        autem molestias?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Code Style Guide</h2>
      <p>
        <a href="https://vuejs.org/style-guide/" target="_blank"
          >https://vuejs.org/style-guide/</a
        >
      </p>

      <h2>Priority Rule</h2>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-essential.html"
          target="_blank"
          >https://vuejs.org/style-guide/rules-essential.html</a
        >
      </p>
      <p>
        We currently use Priority A - Essential. This is the strictest and is
        enforced by ESLint.
      </p>
      <h2>Building components</h2>

      <h3>Filename Casing</h3>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing"
          target="_blank"
          >https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing</a
        >
      </p>
      <p>
        Filenames of Single-File Components should either be always PascalCase
        or always kebab-case.
      </p>

      <h3>Semantic HTML markup</h3>
      <h3>Utility-first CSS</h3>
      <p>
        Bootstrap and other CSS frameworks provide low-level utility classes
        that let you build completely custom designs without ever leaving your
        HTML.
      </p>

      <h2>Testing Components</h2>
      <p>
        <a
          href="https://vuejs.org/guide/scaling-up/testing.html#component-testing"
          target="_blank"
          >https://vuejs.org/guide/scaling-up/testing.html#component-testing</a
        >
      </p>

      <h2>AXDD Django Vue</h2>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsDevelopmentIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
