<template>
  <Layout>
    <template #content>
      <h1>Design Principles</h1>

      <p class="p-0 col-md-8 lead">
        Principles are the foundation of the system. They form the basis of a
        good product and help the team with decision making. They are here to
        guide you and your team when working with the myriad parts of the system
        and help you do better and more informed decisions.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        Example:
        <a href="https://designsystem.digital.gov/design-principles/"
          >https://designsystem.digital.gov/design-principles/</a
        >
      </p>

      <h2>Design is how it works</h2>
      <h2>Reduce concepts to increase confidence</h2>
      <h2>Design with real data</h2>
      <h2>Design systems, not pages</h2>
      <h2>Involve code early</h2>
      <h2>Fast is better than slow</h2>
      <h2>Let content determine breakpoints</h2>
      <h2>Strive for universality</h2>
    </template>
  </Layout>
</template>

<script>
import Layout from "../layouts/docs.vue";

export default {
  name: "DocsPrinciples",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
