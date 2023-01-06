<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/layouts">Layouts</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Topbar</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Topbar</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design tokens.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2 class="fw-bold">Accessibility</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>
      <p>Other accessibility info...</p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2 class="fw-bold">Usage API</h2>

      <h3>Markup</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis minus
        tenetur cumque facere doloremque possimus quidem est repudiandae nam, a
        quaerat amet. Inventore ut eligendi id. Suscipit ab facilis earum?
      </p>
      <CodeBlock>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-topbar :app-name="'App Name'" :app-root-url="'/'">&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Props</h3>
      <table class="table table-bordered">
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
        </tbody>
      </table>

      <h3>Slots</h3>
      <table class="table table-bordered">
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
      <hr class="mb-5 w-25 d-inline-block" />

      <h2 class="fw-bold">Preview</h2>
      <h3>Basic structure</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar
            :app-name="'TopBar'"
            :is-preview="true"
            class="bg-white border"
          >
            <template #profile>profile here...</template>
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
            <template #footer>footer here...</template>
          </axdd-topbar>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-topbar :app-name="'TopBar'">
  &lt;template #profile>
    profile here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;/template>
  &lt;template #footer>
    footer here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
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
            <template #aside>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">aside here...</div>
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
<code>&lt;axdd-topbar>
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #aside>
    aside here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>With Banner Bar</h3>
      <CodeBlock>
        <template #preview>
          <axdd-topbar
            :app-name="'TopBar'"
            :is-preview="true"
            class="bg-white border"
          >
            <template #profile> profile here... </template>
            <template #bar>
              <div class="row">
                <div class="col">
                  <div class="bg-gray p-2 text-center">bar here...</div>
                </div>
              </div>
            </template>
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
<code>&lt;axdd-topbar>
  &lt;template #bar>
    bar here...
  &lt;/template>
&lt;/axdd-topbar>
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
