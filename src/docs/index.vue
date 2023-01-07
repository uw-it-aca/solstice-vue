<template>
  <Layout>
    <template #content>
      <h1 class="fw-bold">Introduction</h1>

      <p class="p-0 col-md-8 lead text-muted">
        AXDD Components is a resource for building and documenting UI components
        using Bootstrap and Vue.js. It provides a set of organized guidelines,
        patterns and best practices that work as the foundation for application
        design and development at AXDD.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row mb-5">
        <div class="col">
          <h2>Goals</h2>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
            <li>Automated testing</li>
          </ul>
        </div>
        <div class="col">
          <h2>Principles</h2>
          <p>
            Get to know our foundational thinking and how we put it into action
            across our design system.
          </p>

          <p>
            <router-link to="/start/principles"
              >Learn about our design principles</router-link
            >
          </p>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Getting Started</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using AXDD Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col d-flex flex-column">
          <axdd-panel class="text-bg-light-beige flex-fill">
            <h3 class="card-title">Designers</h3>
            <p class="flex-fill">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nostrum beatae aperiam nesciunt voluptate. Placeat ipsum libero
              similique enim labore corrupti porro iure commodi laborum iste
              itaque, magnam voluptate esse.
            </p>
            <div class="text-end">
              <router-link to="/start/designers">View Designers</router-link>
            </div>
          </axdd-panel>
        </div>
        <div class="col d-flex flex-column">
          <axdd-panel class="text-bg-purple flex-fill">
            <h3 class="card-title">Developers</h3>
            <p>
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>

            <ul>
              <li>
                <router-link to="/sandbox/topbar/">Topbar</router-link>
                (generic)
              </li>
              <li>
                <router-link to="/sandbox/sidebar/">Sidebar</router-link>
                (generic)
              </li>
            </ul>
            <div class="text-end">
              <router-link to="/start/developers">View Developers</router-link>
            </div>
          </axdd-panel>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Guides</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using AXDD Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h3>Content</h3>
          <p>
            Learn how to use language to design a more thoughtful product
            experience.
          </p>

          <p>
            <router-link to="/content/">Read content guidelines</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Foundations</h3>
          <p>
            Use design foundations to ensure consistency across the application.
          </p>
          <p>
            <router-link to="/foundations/">Browse foundations</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Elements</h3>
          <p>
            Use elements as building blocks as you design and develop new
            products and features.
          </p>
          <p><router-link to="/elements/">Browse elements</router-link></p>
        </div>
        <div class="col">
          <h3>Patterns</h3>
          <p>Patterns consist of design tokens, elements, and patterns.</p>
          <p><router-link to="/patterns/">Browse patterns</router-link></p>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../layout.vue";
import PatternDescription from "../components/PatternDescription.vue";

export default {
  name: "DocsIndex",
  components: {
    Layout,
    PatternDescription,
  },
  data() {
    return {};
  },
};
</script>
