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

      <h2>Bootstrap</h2>
      <p>Bootstrap is the at the core of AXDD Components.</p>

      <h2>Color Palette</h2>
      <p>These are the default colors supported by AXDD Components. For each color, Bootstrap creates three classes: bg-xxxxx, text-xxxxx, and border-xxxxx</p>

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
              <small>dark-purple<br />
              #452a78</small>
            </li>
            <li class="list-inline-item">
              <div class="bg-purple rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small>purple<br />
              #4d307f</small>
            </li>
            <li class="list-inline-item">
              <div
                class="bg-dark-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small>dark-beige<br />
              #85754d</small>
            </li>
            <li class="list-inline-item">
              <div
                class="bg-mid-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small>mid-beige<br />
              #ab9765</small>
            </li>
            <li class="list-inline-item">
              <div class="bg-beige rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small>beige<br />
              #e8e3d3</small>
            </li>
            <li class="list-inline-item">
              <div
                class="bg-light-beige rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small>light-beige<br />
              #faf8f4</small>
            </li>
            <li class="list-inline-item">
              <div class="bg-gold rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small>gold<br />
              #ffbc24</small>
            </li>
            <li class="list-inline-item">
              <div class="bg-teal rounded" style="width: 85px; height: 60px">
                &nbsp;
              </div>
              <small>teal<br />
              #4c7286</small>
            </li>
            <li class="list-inline-item">
              <div
                class="bg-light-gray rounded"
                style="width: 85px; height: 60px"
              >
                &nbsp;
              </div>
              <small>light-gray<br />
              #e8e8e8</small>
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

      <h2>Font Sizes</h2>
      <CodeBlock>
        <template #preview>
          <div class="myuw-text-lg">Lorem ipsum dolor... 18px</div>
          <div>Lorem ipsum dolor... 16px (Bootstrap 5 default)</div>
          <div class="myuw-text-md">
            Lorem ipsum dolor... 14px (MyUW default)
          </div>
          <div class="myuw-text-sm">Lorem ipsum dolor... 13px</div>
          <div class="myuw-text-xs">Lorem ipsum dolor... 12px</div>
          <div class="myuw-text-xxs">Lorem ipsum dolor... 11px</div>
          <div class="myuw-text-tiny">Lorem ipsum dolor... 10px</div>
        </template>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;div class="myuw-text-lg">Lorem ipsum dolor&lt;/div>
&lt;div>Lorem ipsum dolor&lt;/div>
&lt;div class="myuw-text-md">Lorem ipsum dolor&lt;/div>
&lt;div class="myuw-text-sm">Lorem ipsum dolor&lt;/div>
&lt;div class="myuw-text-xs">Lorem ipsum dolor&lt;/div>
&lt;div class="myuw-text-xxs">Lorem ipsum dolor&lt;/div>
&lt;div class="myuw-text-tiny">Lorem ipsum dolor&lt;/div>
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
          <div class="myuw-font-open-sans">Lorem ipsum dolor... Open Sans</div>
        </template>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;body class="myuw-font-open-sans">Lorem ipsum dolor... Open Sans&lt;/body>
</code></pre>
        </template>
      </CodeBlock>

      <h2>Data Visualization</h2>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/home.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  components: { Layout, CodeBlock },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
