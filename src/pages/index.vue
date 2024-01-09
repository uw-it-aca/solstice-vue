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
            href="https://github.com/uw-it-aca/solstice-vue"
            class="link-primary"
            >solstice-vue</a
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
          <h3>Development</h3>
          <ol>
            <li>create a branch</li>
            <li>run the <code>npm run build</code> command</li>
          </ol>

          <hr />

          <h2>Foundations</h2>
          <h3>Layout</h3>
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
          <h3>Color</h3>

          <h4>Swatches</h4>
          <div class="d-flex w-50">
            <div style="width: 150px" class="col mb-3">
              <div class="p-3 mb-2 position-relative bg-purple2-500 text-white">
                <strong class="d-block">$purple2</strong>
                #4b2e83
              </div>
              <div class="p-3 bg-purple2-100">$purple2-100</div>
              <div class="p-3 bg-purple2-200">$purple2-200</div>
              <div class="p-3 bg-purple2-300">$purple2-300</div>
              <div class="p-3 bg-purple2-400 text-light">$purple2-400</div>
              <div class="p-3 bg-purple2-500 text-white">$purple2-500</div>
              <div class="p-3 bg-purple2-600 text-white">$purple2-600</div>
              <div class="p-3 bg-purple2-700 text-white">$purple2-700</div>
              <div class="p-3 bg-purple2-800 text-white">$purple2-800</div>
              <div class="p-3 bg-purple2-900 text-white">$purple2-900</div>
            </div>

            <div style="width: 150px" class="col mb-3">
              <div class="p-3 mb-2 position-relative bg-red2-500 text-white">
                <strong class="d-block">$red2</strong>
                #cb444a
              </div>
              <div class="p-3 bg-red2-100">$red2-100</div>
              <div class="p-3 bg-red2-200">$red2-200</div>
              <div class="p-3 bg-red2-300">$red2-300</div>
              <div class="p-3 bg-red2-400 text-light">$red2-400</div>
              <div class="p-3 bg-red2-500 text-white">$red2-500</div>
              <div class="p-3 bg-red2-600 text-white">$red2-600</div>
              <div class="p-3 bg-red2-700 text-white">$red2-700</div>
              <div class="p-3 bg-red2-800 text-white">$red2-800</div>
              <div class="p-3 bg-red2-900 text-white">$red2-900</div>
            </div>

            <div style="width: 150px" class="col mb-3">
              <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
                <strong class="d-block">$blue2</strong>
                #2F68CB
              </div>
              <div class="p-3 bg-blue2-100">$blue2-100</div>
              <div class="p-3 bg-blue2-200">$blue2-200</div>
              <div class="p-3 bg-blue2-300">$blue2-300</div>
              <div class="p-3 bg-blue2-400 text-light">$blue2-400</div>
              <div class="p-3 bg-blue2-500 text-white">$blue2-500</div>
              <div class="p-3 bg-blue2-600 text-white">$blue2-600</div>
              <div class="p-3 bg-blue2-700 text-white">$blue2-700</div>
              <div class="p-3 bg-blue2-800 text-white">$blue2-800</div>
              <div class="p-3 bg-blue2-900 text-white">$blue2-900</div>
            </div>

          </div>
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
