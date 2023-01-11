<template>
  <Layout>
    <template #content>
      <h1>Foundations</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Foundations are Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Autem dicta error temporibus inventore sapiente debitis, non
        minima excepturi quasi, cumque explicabo, esse illo impedit. Veniam
        velit quia consectetur nisi cumque?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Color</h2>
      <p>
        <a
          href="https://getbootstrap.com/docs/5.1/customize/color/"
          target="_blank"
          >https://getbootstrap.com/docs/5.1/customize/color/</a
        >
      </p>

      <p>
        Color is automatically applied to the following utilities and
        components.
      </p>
      <ul>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/background/"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/background/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/borders/#border-color"
            target="_blank"
          >
            https://getbootstrap.com/docs/5.1/utilities/borders/#border-color</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/utilities/colors/"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/utilities/colors/</a
          >
        </li>
        <li>
          <a
            href="https://getbootstrap.com/docs/5.1/components/alerts/"
            target="_blank"
            >https://getbootstrap.com/docs/5.1/components/alerts/</a
          >
        </li>
      </ul>

      <p>Example: bg-xxxxx and text-xxxxx</p>

      <CodeBlock>
        <template #preview>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
              <div
                class="text-bg-dark-purple rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >dark-purple<br />
                #452a78</small
              >
            </li>
            <li class="list-inline-item">
              <div class="text-bg-purple rounded p-2" style="width: 85px; height: 60px">
                hello
              </div>
              <small
                >purple<br />
                #4d307f</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-dark-beige rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >dark-beige<br />
                #85754d</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-mid-beige rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >mid-beige<br />
                #ab9765</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-beige rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >beige<br />
                #e8e3d3</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-light-beige rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >light-beige<br />
                #faf8f4</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-gold rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >gold<br />
                #ffbc24</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-teal rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >teal<br />
                #4c7286</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-light-gray rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >light-gray<br />
                #e8e8e8</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-gray rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >gray<br />
                #e9ecef</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="text-bg-dark bg-opacity-10 rounded p-2"
                style="width: 85px; height: 60px"
              >
                hello
              </div>
              <small
                >bg-opacity-10<br />
                90% black</small
              >
            </li>
          </ul>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code class="html rounded">&lt;div class="bg-dark-purple"&gt;
&lt;div class="bg-purple"&gt;
&lt;div class="bg-dark-beige"&gt;
...</code></pre>
        </template>
      </CodeBlock>

      <h2>Font Sizes <VersionBadge>1.0.5</VersionBadge></h2>
      <p>The base font-size for our apps is 16px.</p>
      <p>
        <a
          href="https://getbootstrap.com/docs/5.1/utilities/text/#font-size"
          target="_blank"
          >https://getbootstrap.com/docs/5.1/utilities/text/#font-size</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <p class="fs-1">.fs-1 text (40px)</p>
          <p class="fs-2">.fs-2 text (32px)</p>
          <p class="fs-3">.fs-3 text (28px)</p>
          <p class="fs-4">.fs-4 text (24px)</p>
          <p class="fs-5">.fs-5 text (20px)</p>
          <p class="fs-6">.fs-6 text (16px)</p>
          <p class="fs-7">.fs-7 text (14px)</p>
          <p class="fs-8">.fs-8 text (13px)</p>
          <p class="fs-9">.fs-9 text (12px)</p>
          <p class="fs-10">.fs-10 text (11px)</p>
          <p class="fs-11">.fs-11 text (10px)</p>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;div class="fs-7">Lorem ipsum dolor&lt;/div>
&lt;div class="fs-8">Lorem ipsum dolor&lt;/div>
&lt;div class="fs-9">Lorem ipsum dolor&lt;/div>
&lt;div class="fs-10">Lorem ipsum dolor&lt;/div>
&lt;div class="fs-11">Lorem ipsum dolor&lt;/div>
</code></pre>
        </template>
      </CodeBlock>

      <h2>Typography</h2>
      <p>
        <a
          href="https://www.washington.edu/brand/graphic-elements/font-download/"
          target="_blank"
          >https://www.washington.edu/brand/graphic-elements/font-download/</a
        >
      </p>

      <p>Typography is defined by the UW Brand guidelines.</p>

      <h3>Open Sans</h3>
      <p>
        Open Sans is the default font-family used by UW. It is typically set at
        the page body level.
      </p>
      <CodeBlock>
        <template #preview>
          <div class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans</div>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;body class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Encode Sans Condensed</h3>
      <p>
        Encode Sans Condensed is the heading font-family used by UW. It is
        typically set at the page body level.
      </p>
      <CodeBlock>
        <template #preview>
          <div class="axdd-font-encode-sans">
            Lorem ipsum dolor... Encode Sans Condensed
          </div>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;body class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";
import VersionBadge from "../../components/VersionBadge.vue";

export default {
  name: "DocsTokensIndex",
  components: {
    Layout,
    CodeBlock,
    VersionBadge,
  },
  data() {
    return {};
  },
};
</script>
