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
          <sol-link href="https://github.com/uw-it-aca/axdd-components"
            >AXDD-Components</sol-link
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
              <router-link to="/topbar">Topbar</router-link>
            </li>
            <li>
              <router-link to="/sidebar">Sidebar</router-link>
            </li>
          </ul>

          <h3>Development</h3>
          <ol>
            <li>create a branch</li>
            <li>run the <code>npm run build</code> command</li>
          </ol>

          <h3>Sandbox</h3>

          <p>Color (default on light/dark mode backgrounds)</p>
          <ul class="list-unstyled text-secondary p-2 border">
            <li>
              default:
              <sol-link :href="'http://www.google.com'" :variant="'default'"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              quiet:
              <sol-link :href="'http://www.google.com'" :variant="'quiet'"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                :href="'http://www.google.com'"
                :variant="'icon'"
                :icon="'bi-android2'"
                >aksdfjaslkdfj</sol-link
              >
            </li>
          </ul>

          <p>Color (light - used on dark backgrounds)</p>
          <ul class="list-unstyled bg-purple text-secondary p-2">
            <li>
              default:
              <sol-link
                :href="'http://www.google.com'"
                :variant="'default'"
                :color="'link-light'"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              quiet:
              <sol-link
                href="http://www.google.com"
                variant="quiet"
                color="link-light"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                href="http://www.google.com"
                variant="icon"
                icon="bi-android2"
                color="link-light"
                >aksdfjaslkdfj</sol-link
              >
            </li>
          </ul>

          <p>Color (dark - used on light (non-white?) backgrounds)</p>
          <ul class="list-unstyled bg-warning text-secondary p-2">
            <li>
              default:
              <sol-link
                href="http://www.google.com"
                variant="default"
                color="link-dark"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              quiet:
              <sol-link
                href="http://www.google.com"
                variant="quiet"
                color="link-dark"
                >aksdfjaslkdfj</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                href="http://www.google.com"
                variant="icon"
                icon="bi-android2"
                color="link-dark"
                >aksdfjaslkdfj</sol-link
              >
            </li>
          </ul>
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
