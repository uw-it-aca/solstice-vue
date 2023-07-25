<template>
  <Layout>
    <template #content>
      <h1>Voice &amp; Tone</h1>

      <p class="p-0 col-md-8 lead">
        Through this guide you will learn how to apply AXDD Component's voice
        and choose the right tone. Using the right voice and tone is important
        as it allows us to better connect with our users.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Crisp and clear</h2>

      <h2>Empathetic</h2>

      <h2>Inclusive</h2>
      <p>
        Use of
        <a href="https://itconnect.uw.edu/work/inclusive-language-guide/"
          >UW-IT DEI approved words</a
        >. Also, optimized for a11y.
      </p>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsContentVoice",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
