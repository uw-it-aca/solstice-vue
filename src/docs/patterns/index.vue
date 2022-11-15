<template>
  <Layout>
    <template #content>
      <h1 class="fw-bold">Patterns</h1>

      <p class="p-0 col-md-8 lead">
        Patterns are the re-usable UI components that fall on the more complex
        side of the spectrum. Patterns utilize both elements and design tokens
        and are the design and building blocks of the visual design.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <PatternDescription
            :name="'Layout'"
            :link="'/patterns/layout'"
            class="alert-beige"
          >
            <p>aasdflkjasdlkfj lksadjf alsfdkj</p>
          </PatternDescription>
        </li>
        <li class="col-4">
          <CompDescription :name="'Navigation'"></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Card'"
            :link="'/patterns/card'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Tabs'"
            :link="'/patterns/tabs'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Disclosure'"
            :link="'/patterns/disclosure'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Profile'"
            :link="'/patterns/profile'"
            :accessibility="true"
            :version="'1.0.5'"
          ></CompDescription>
        </li>
      </ul>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CompDescription from "../../components/CompDescription.vue";
import PatternDescription from "../../components/PatternDescription.vue";

export default {
  name: "DocsPatternsIndex",
  components: {
    Layout,
    CompDescription,
    PatternDescription,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
