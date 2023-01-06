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

      <p class="p-0 col-md-8 lead text-muted">
        Containers are Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Mollitia repellendus sint veritatis assumenda facilis repudiandae vero
        natus unde voluptatum blanditiis nihil soluta, velit quaerat, corporis
        eos reprehenderit, rerum error earum?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Card'"
            :link="'/patterns/containers/card'"
            :accessibility="true"
            :version="'1.0.5'"
            >Cards have a raised profile and has shadow. Meant to visually
            display prominence over flat items.</CompDescription
          >
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Panel'"
            :link="'/patterns/containers/panel'"
            :accessibility="true"
            :version="'1.1.0'"
            >Panels remain on the flat surface of the page. Bounding container
            can have background color applied to show slight prominence. Still
            not a card.</CompDescription
          >
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Disclosure'"
            :link="'/patterns/containers/disclosure'"
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
