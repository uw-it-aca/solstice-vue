<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Layouts</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Layouts</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design tokens.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Topbar'"
            :link="'/patterns/layouts/topbar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Sidebar'"
            :link="'/patterns/layouts/sidebar'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
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
