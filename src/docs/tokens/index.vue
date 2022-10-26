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
