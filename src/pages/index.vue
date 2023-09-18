// home.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #description>
      <div class="p-0 col-md-8 lead">
        <p>
          <a
            href="https://github.com/uw-it-aca/axdd-components"
            class="link-primary"
            >AXDD-Components</a
          >
          is a VueJs component library. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius eaque placeat corrupti sequi eveniet aliquam
          dicta harum tempora sed nisi a voluptatem dolorum unde, corporis
          voluptate perspiciatis dignissimos praesentium. Et!
        </p>
      </div>
    </template>

    <template #content>
      <div class="row">
        <div class="col">
          <h2>Building components</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            numquam perspiciatis, laudantium suscipit corrupti atque ea officiis
            incidunt iusto, esse voluptatum animi nobis dolores modi earum
            magnam expedita eius repellat!
          </p>

          <h3>Start with a layout</h3>
          <ul>
            <li>
              <router-link :to="'/topbar'" class="link-primary"
                >Topbar</router-link
              >
            </li>
            <li>
              <router-link :to="'/sidebar'" class="link-primary"
                >Sidebar</router-link
              >
            </li>
          </ul>

          <h3>Development</h3>
          <ol>
            <li>create a branch</li>
            <li>run the <code>npm run build</code> command</li>
          </ol>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from "../layout.vue";
//import HelloWorld from "../components/hello-world.vue";

export default {
  name: "PagesHome",
  components: {
    layout: Layout,
    //HelloWorld,
  },
  data() {
    return {
      pageTitle: "Getting started",
    };
  },
  methods: {},
};
</script>
