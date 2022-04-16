<template>
  <Layout>
    <template #content>
      <h1>Getting started</h1>

      <p class="p-0 col-md-8 lead">
        AXDD Components is a resource for building and documenting UI components
        with Bootstrap and Vue.js. It provides a set of organized tools,
        patterns & practices that work as the foundation for application design
        and development at AXDD.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
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
            <router-link to="/principles"
              >Learn about our principles</router-link
            >
          </p>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <h2>Guides</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using AXDD Components.
          </p>
        </div>
      </div>
      <div class="row">
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
          <h3>Design Tokens</h3>
          <p>Use design tokens to ensure consistency across the application.</p>
          <p><router-link to="/tokens/">Browse tokens</router-link></p>
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
          <h3>Components</h3>
          <p>Patterns consist of design tokens, elements, and patterns.</p>
          <p><router-link to="/components/">Browse components</router-link></p>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <div class="bg-light-beige p-4 rounded-3">
            <h3>What's New? v1.0.5</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nostrum beatae aperiam nesciunt voluptate. Placeat ipsum libero
              similique enim labore corrupti porro iure commodi laborum iste
              itaque, magnam voluptate esse.
            </p>
            <p>Read updates</p>
          </div>
        </div>
        <div class="col">
          <div class="bg-light-beige p-4 rounded-3">
            <h3>Development</h3>
            <p>
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>
            <p>
              <router-link to="/development/"
                >Read development guidelines</router-link
              >
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
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../layouts/docs.vue";

export default {
  components: { Layout },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
