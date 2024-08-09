// home.vue

<template>
  <Layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>
    <template #content>
      <div class="row mb-5">
        <div class="col">
          <h2>Variants</h2>
          <div class="d-flex">
            <div class="w-100">
              <p>Default</p>
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
            <div class="w-100">
              <p>Dark</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestiae distinctio vel! Consectetur voluptatibus accusantium
              quas! Distinctio aperiam quidem saepe asperiores consectetur
              placeat quaerat repellat! Placeat nihil enim sequi quaerat.
            </div>
            <div class="w-100">
              <p>Light</p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              molestiae distinctio vel! Consectetur voluptatibus accusantium
              quas! Distinctio aperiam quidem saepe asperiores consectetur
              placeat quaerat repellat! Placeat nihil enim sequi quaerat.
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";

export default {
  name: "PagesLink",
  components: {
    Layout,
  },
  data() {
    return {
      pageTitle: "Link",
    };
  },
  methods: {},
};
</script>
