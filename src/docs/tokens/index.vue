<template>
  <Layout>
    <template #content>
      <h1>Design Tokens</h1>

      <p class="p-0 col-md-8 lead">
        Design tokens are the atoms of the system as Salesforce describes them.
        In Vue Design System they are used instead of hard coded values to
        ensure a better consistency across any platform.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Color Palette</h2>
      <p class="col-md-8">
        These are the default colors supported by AXDD Components. For each
        color, Bootstrap creates three classes: bg-xxxxx, text-xxxxx, and
        border-xxxxx
      </p>

      <CodeBlock>
        <template #preview>
          <ul class="list-inline m-0">
            <li class="list-inline-item">
              <div
                class="bg-dark-purple rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small
                >dark-purple<br />
                #452a78</small
              >
            </li>
            <li class="list-inline-item">
              <div class="bg-purple rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small
                >purple<br />
                #4d307f</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="bg-dark-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small
                >dark-beige<br />
                #85754d</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="bg-mid-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small
                >mid-beige<br />
                #ab9765</small
              >
            </li>
            <li class="list-inline-item">
              <div class="bg-beige rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small
                >beige<br />
                #e8e3d3</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="bg-light-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small
                >light-beige<br />
                #faf8f4</small
              >
            </li>
            <li class="list-inline-item">
              <div class="bg-gold rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small
                >gold<br />
                #ffbc24</small
              >
            </li>
            <li class="list-inline-item">
              <div class="bg-teal rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small
                >teal<br />
                #4c7286</small
              >
            </li>
            <li class="list-inline-item">
              <div
                class="bg-light-gray rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small
                >light-gray<br />
                #e8e8e8</small
              >
            </li>
          </ul>
        </template>
        <template #code>
          <pre class="language-html rounded">
<code class="html rounded">&lt;div class="bg-dark-purple"&gt;
&lt;div class="bg-purple"&gt;
&lt;div class="bg-dark-beige"&gt;
...</code></pre>
        </template>
      </CodeBlock>

      <h2>Font Sizes (1.0.5)</h2>
      <CodeBlock>
        <template #preview>
          <h3>Bootstrap default</h3>
          <p class="fs-1">.fs-1 text (40px)</p>
          <p class="fs-2">.fs-2 text (32px)</p>
          <p class="fs-3">.fs-3 text (28px)</p>
          <p class="fs-4">.fs-4 text (24px)</p>
          <p class="fs-5">.fs-5 text (20px)</p>
          <p class="fs-6">.fs-6 text (16px)</p>

          <h3>AXDD-Components</h3>
          <p class="fs-7">.fs-7 text (14px)</p>
          <p class="fs-8">.fs-8 text (13px)</p>
          <p class="fs-9">.fs-9 text (12px)</p>
          <p class="fs-10">.fs-10 text (11px)</p>
          <p class="fs-11">.fs-11 text (10px)</p>
        </template>
        <template #code>
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
        Open Sans is the default font-family used by MyUW. It is typically set
        at the page body level.
      </p>
      <CodeBlock>
        <template #preview>
          <div class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans</div>
        </template>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;body class="axdd-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/docs.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  components: { Layout, CodeBlock },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
