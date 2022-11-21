<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/layouts">Layouts</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Sidebar</li>
        </ol>
      </nav>

      <h1>Sidebar</h1>

      <p class="p-0 col-md-8 lead text-muted">
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

      <h3>Usage</h3>
      <CodeBlock>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-sidebar :app-name="'App Name'" :app-root-url="'/'">&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Props</h3>
      <table class="table small">
        <thead>
          <tr>
            <th scope="col" class="w-25">Prop</th>
            <th scope="col">Required</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>:app-name</code></th>
            <td>true</td>
            <td>String</td>
            <td>appName</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:app-root-url</code></th>
            <td>true</td>
            <td>String</td>
            <td>#</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:variant</code></th>
            <td>false</td>
            <td>String</td>
            <td>dark</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Slots</h3>
      <table class="table small">
        <thead>
          <tr>
            <th scope="col" class="w-25">Slot</th>
            <th scope="col">Required</th>
            <th scope="col">Fallback</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>#profile</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#bar</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#navigation</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#logo</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#main</code></th>
            <td>true</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#aside</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#footer</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Default</h3>

      <CodeBlock>
        <template #preview>
          <axdd-sidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border shadow-sm"
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
      </CodeBlock>

      <h3>Color Theming</h3>

      <CodeBlock>
        <template #preview>
          <axdd-sidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border shadow-sm bg-primary"
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
<code>&lt;axdd-sidebar :app-name="'App Name'" :variant="'dark'" class="bg-primary">
&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Logo Branding</h3>

      <CodeBlock>
        <template #preview>
          <axdd-sidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border shadow-sm bg-success"
          >
            <template #profile> profile here... </template>
            <template #logo><i class="bi bi-emoji-smile"></i></template>
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
<code>&lt;axdd-sidebar :app-name="'App Name'" :variant="'dark'" class="bg-primary">
  &lt;template #logo>
    &lt;i class="bi bi-emoji-smile">&lt;/i>
  &lt;/template>
&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CodeBlock from "../../../components/CodeBlock.vue";

export default {
  name: "DocsPatternsLayouts",
  components: {
    Layout,
    CodeBlock,
  },
  data() {
    return {};
  },
};
</script>
