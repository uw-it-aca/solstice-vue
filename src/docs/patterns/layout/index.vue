<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Layout</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Layout</h1>

      <p class="p-0 col-md-8 lead">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design tokens.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Topbar'"
            :link="'/patterns/layout/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Sidebar'"
            :link="'/patterns/layout/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CompDescription from "../../../components/CompDescription.vue";

export default {
  name: "DocsPatternsLayouts",
  components: {
    Layout,
    CompDescription,
  },
  data() {
    return {};
  },
};
</script>
