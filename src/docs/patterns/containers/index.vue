<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Containers</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Containers</h1>

      <p class="p-0 col-md-8 lead">
        Containers are Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia repellendus sint veritatis assumenda facilis repudiandae vero
        natus unde voluptatum blanditiis nihil soluta, velit quaerat, corporis
        eos reprehenderit, rerum error earum?
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
            :name="'Cards'"
            :link="'/patterns/containers/cards'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'basdf'"
            :link="'/patterns/containers/cards'"
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
  name: "DocsPatternsContainer",
  components: {
    Layout,
    CompDescription,
  },
  data() {
    return {};
  },
};
</script>
