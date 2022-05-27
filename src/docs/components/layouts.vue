<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/components/">Components</a></li>
          <li class="breadcrumb-item active" aria-current="page">Layouts</li>
        </ol>
      </nav>

      <h1>Layouts</h1>

      <p class="p-0 col-md-8 lead">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design tokens.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Topbar</h2>
      <div class="sg-render border p-0 mb-5 bg-white">
        <axdd-topbar :app-name="'TopBar'" :user-name="'javerage'">
          <template #bar>
            <div class="bg-teal">
              <div class="container-xl">
                <div class="col-12 py-2 text-center">custom teal bar</div>
              </div>
            </div>
          </template>
          <template #navigation>
            <div class="row mt-4">
              <div class="col">
                <div class="bg-gray p-4 text-center">nav</div>
              </div>
            </div>
          </template>
          <template #main>
            <div class="row mt-4">
              <div class="col">
                <div class="bg-gray p-4 text-center">content</div>
              </div>
            </div>
          </template>
          <template #footer></template>
        </axdd-topbar>
      </div>

      <h3>Implementation</h3>
      <CodeBlock>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;axdd-topbar :app-name="'App Name'" :user-name="'javerage'">
  asdf
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <CodeBlock>
        <template #code>
          <pre class="language-js rounded">
<code>import Topbar from "../component-location";

export default {
  components: { Topbar },
};
</code></pre>
        </template>
      </CodeBlock>

      <h2>Sidebar</h2>

      <div class="sg-render border p-0 mb-5 bg-white">
        <axdd-sidebar :app-name="'SideBar'" :user-name="'javerage'">
          <template #navigation>
            <ul class="nav flex-column">
              <li class="nav-item mb-1 bg-dark-purple rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-house-door-fill me-2"></i>Home</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-mortarboard-fill me-2"></i>Academics</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-pencil-square me-2"></i>Teaching</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-credit-card me-2"></i>Accounts</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-person-fill me-2"></i>Profile</a
                >
              </li>
              <li aria-hidden="true" class="nav-item mb-1">
                <a
                  href="#"
                  class="nav-link disabled text-gray d-block p-0 internal-link"
                  ><hr class="m-0 bg-gray" />
                  <span class="visually-hidden"> Navigation separator</span></a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-calendar-check me-2"></i>Calendar</a
                >
              </li>
              <li class="nav-item mb-4 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-bookmark-fill me-2"></i>UW Resources</a
                >
              </li>
            </ul>
          </template>
          <template #bar>
            <div class="col mt-3">
              <div class="bg-teal py-2 text-center">custom teal bar</div>
            </div>
          </template>
          <template #main>
            <div class="row">
              <div class="col mt-3">
                <div class="bg-gray p-4 text-center">content</div>
              </div>
            </div>
          </template>
          <template #footer></template>
        </axdd-sidebar>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/docs.vue";
import Topbar from "../../_layouts/topbar.vue";
import Sidebar from "../../_layouts/sidebar.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  name: "DocsComponentsLayouts",
  components: {
    Layout,
    CodeBlock,
    "axdd-topbar": Topbar,
    "axdd-sidebar": Sidebar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// global styleguide

.sg-render {
  // reset container padding for render display
  .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  // reset vh-100 to something more manageable for display
  .vh-100 {
    min-height: 30vh !important;
    max-height: 60vh !important;
  }
}
</style>
