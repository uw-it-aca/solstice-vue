<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
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

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>

      <h2>Topbar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aut tempore
        quidem molestiae dolore iusto dolorum voluptate architecto impedit
        possimus velit voluptatum eaque veritatis praesentium, nemo saepe nisi
        tempora corrupti.
      </p>
      <h3>Without Navigation</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar
            :app-name="'TopBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="bg-white border shadow-sm"
          >
            <template #profile> profile here... </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-topbar :app-name="'App Name'" :user-name="'javerage'">
  &lt;template #main>
    content here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Topbar } from "axdd-components";

export default {
  components: {
    "axdd-topbar": Topbar
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h3>With Navigation</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar
            :app-name="'TopBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="bg-white border shadow-sm"
          >
            <template #profile> profile here... </template>
            <template #navigation>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">nav here...</div>
                </div>
              </div>
            </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-topbar :app-name="'App Name'" :user-name="'javerage'">
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h2 class="mt-5">Sidebar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aut tempore
        quidem molestiae dolore iusto dolorum voluptate architecto impedit
        possimus velit voluptatum eaque veritatis praesentium, nemo saepe nisi
        tempora corrupti.
      </p>

      <CodeBlock>
        <template #preview>
          <axdd-sidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="bg-white border shadow-sm"
          >
            <template #profile> profile here... </template>
            <template #navigation> nav here... </template>
            <template #main>
              <div class="row">
                <div class="col mt-3">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </axdd-sidebar>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-sidebar :app-name="'App Name'" :user-name="'javerage'">
  &lt;template #profile> profile here... &lt;/template>
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;template>
&lt;/axdd-sidebar>
</code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Sidebar } from "axdd-components";

export default {
  components: {
    "axdd-sidebar": Sidebar
  },
};
</code></pre>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
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
