<template>
  <Layout>
    <template #content>
      <h1 class="fw-bold">Patterns</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Patterns are the re-usable UI components that fall on the more complex
        side of the spectrum. Patterns utilize both elements and design tokens
        and are the design and building blocks of the visual design.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4 mb-3">
          <axdd-panel class="bg-black bg-opacity-10 flex-fill">
            <h3 class="card-title">Layout</h3>
            <p class="flex-fill">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nostrum beatae aperiam nesciunt voluptate.
            </p>
            <div class="text-end">
              <router-link to="/patterns/layout">View Layout</router-link>
            </div>
          </axdd-panel>
        </li>
        <li class="col-4">
          <axdd-panel class="bg-black bg-opacity-10 text-body flex-fill">
            <h3 class="card-title">Navigation</h3>
            <p class="flex-fill">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nostrum beatae aperiam nesciunt voluptate.
            </p>
            <div class="text-end">
              <router-link to="/patterns/navigation">View Navigation</router-link>
            </div>
          </axdd-panel>
        </li>
        <li class="col-4">
          <PatternDescription
            :name="'Containers'"
            :link="'/patterns/containers'"
            class="bg-light"
            >sdfgsdgsd</PatternDescription
          >
        </li>
        <li class="col-4">
          <PatternDescription
            :name="'Messaging'"
            :link="'/patterns/messaging'"
            class="bg-light"
            >sdfgsdgsd</PatternDescription
          >
        </li>
        <li class="col-4">
          <PatternDescription
            :name="'Feedback'"
            :link="'/patterns/feedback'"
            class="bg-light"
            >sdfgsdgsd</PatternDescription
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import PatternDescription from "../../components/PatternDescription.vue";

export default {
  name: "DocsPatternsIndex",
  components: {
    Layout,
    PatternDescription,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
