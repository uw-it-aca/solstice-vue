<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Containers</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Panel</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Panels are Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia repellendus sint veritatis assumenda facilis repudiandae vero
        natus unde voluptatum blanditiis nihil soluta, velit quaerat, corporis
        eos reprehenderit, rerum error earum?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";

export default {
  name: "DocsPatternsPanel",
  components: {
    Layout,
  },
  data() {
    return {};
  },
};
</script>
