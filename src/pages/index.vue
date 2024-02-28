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
      <div class="row mb-5">
        <div class="col">
          <h2 class="fw-bold">Building components</h2>
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
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <h2 class="fw-bold">Foundations</h2>
          <h3>Layout</h3>
          <ul>
            <li>
              <sol-link href="/topbar">Topbar</sol-link>
            </li>
            <li>
              <router-link to="/sidebar">Sidebar</router-link>
            </li>
          </ul>
          <h3>Color</h3>

          <h4>Swatches</h4>
          <div class="grid" style="--bs-columns: 6">
            <div>
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

            <div>
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

            <div>
              <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
                <strong class="d-block">$blue2</strong>
                #2f68cb
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

            <div>
              <div class="p-3 mb-2 position-relative bg-beige-500 text-white">
                <strong class="d-block">$beige</strong>
                #ab9765
              </div>
              <div class="p-3 bg-beige-100">$beige-100</div>
              <div class="p-3 bg-beige-200">$beige-200</div>
              <div class="p-3 bg-beige-300">$beige-300</div>
              <div class="p-3 bg-beige-400">$beige-400</div>
              <div class="p-3 bg-beige-500 text-white">$beige-500</div>
              <div class="p-3 bg-beige-600 text-white">$beige-600</div>
              <div class="p-3 bg-beige-700 text-white">$beige-700</div>
              <div class="p-3 bg-beige-800 text-white">$beige-800</div>
              <div class="p-3 bg-beige-900 text-white">$beige-900</div>
            </div>

            <div>
              <div class="p-3 mb-2 position-relative bg-gold-500 text-white">
                <strong class="d-block">$gold</strong>
                #ffbc24
              </div>
              <div class="p-3 bg-gold-100">$gold-100</div>
              <div class="p-3 bg-gold-200">$gold-200</div>
              <div class="p-3 bg-gold-300">$gold-300</div>
              <div class="p-3 bg-gold-400">$gold-400</div>
              <div class="p-3 bg-gold-500">$gold-500</div>
              <div class="p-3 bg-gold-600 text-white">$gold-600</div>
              <div class="p-3 bg-gold-700 text-white">$gold-700</div>
              <div class="p-3 bg-gold-800 text-white">$gold-800</div>
              <div class="p-3 bg-gold-900 text-white">$gold-900</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h2 class="fw-bold">Elements</h2>
          <h3>Link</h3>
          <ul>
            <li>a: <a href="/">hello anchor</a></li>
            <li>
              default:
              <sol-link :href="'/topbar'">hello world</sol-link>
            </li>
            <li>
              quiet:
              <sol-link :variant="'quiet'" :href="'/topbar'"
                >hello world</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                :variant="'icon'"
                :href="'/topbar'"
                :color="'link-danger'"
                :icon="'bi-globe-americas'"
                >hello world</sol-link
              >
            </li>
          </ul>
        </div>

        <h3>Alerts</h3>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <div class="alert alert-action" role="alert">
          A simple action alert—check it out!
        </div>

        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>

        <div class="alert alert-critical" role="alert">
          A simple critical alert—check it out!
        </div>

        <div class="alert alert-warning" role="alert">
          A simple warning alert—check it out!
        </div>

        <div class="alert alert-action" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <hr>
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>

      </div>
    </template>
  </layout>
</template>

<script>
import Layout from "@/layout.vue";
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
