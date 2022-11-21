<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/start/">Getting Started</a></li>
          <li class="breadcrumb-item active" aria-current="page">Developers</li>
        </ol>
      </nav>
      <h1>Developers</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
        quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
        ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
        autem molestias?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <h2 class="fw-bold">Setup</h2>
          <h3>Template Repository <i class="bi bi-star-fill text-gold"></i></h3>
          <p>
            For any new AXDD applications, we recommend starting with the
            <a href="https://github.com/uw-it-aca/axdd-django-vue"
              >axdd-django-vue</a
            >
            template repository. Installation and the initial configuration is
            already done for you.
          </p>

          <h3>Manual Installation</h3>
          <p>
            If you wish to add AXDD Components to an existing Vue application,
            add the following dependency to your <code>package.json</code> and
            run <code>npm install</code>.
          </p>

          <CodeBlock>
            <template #script>
              <pre class="language-json rounded">
<code>"dependencies": {
  "axdd-components": "git+https://github.com/uw-it-aca/axdd-components.git#1.0.6",
}</code></pre>
            </template>
          </CodeBlock>

          <p>
            From the <code>main.js</code> file, import the AXDD Components
            library and install it as plugin using <code>app.use()</code>. You
            must also import the required component library
            <code>style.css</code> as well as the application's main Bootstrap
            entry <code>styles.scss</code> file.
          </p>

          <CodeBlock>
            <template #script>
              <pre class="language-js rounded">
<code>import { createApp } from "vue";
import App from "./app.vue";
import AxddComponents from "axdd-components";

// bootstrap js + bootstrap-icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// app bootstrap scss entry
import "../path/to/css/styles.scss";

// axdd-component css
import "axdd-components/dist/style.css";

const app = createApp(App);
app.use(AxddComponents);
</code></pre>
            </template>
          </CodeBlock>

          <p>
            The component library can now be used globally within the
            application. Refer to the specific component resource for usage and
            implementation documentation.
          </p>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Code Style Guide</h2>
      <p>
        <a href="https://vuejs.org/style-guide/" target="_blank"
          >https://vuejs.org/style-guide/</a
        >
      </p>

      <h2>Priority Rule</h2>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-essential.html"
          target="_blank"
          >https://vuejs.org/style-guide/rules-essential.html</a
        >
      </p>
      <p>
        We currently use Priority A - Essential. This is the strictest and is
        enforced by ESLint.
      </p>
      <h2>Building components</h2>

      <h3>Filename Casing</h3>
      <p>
        <a
          href="https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing"
          target="_blank"
          >https://vuejs.org/style-guide/rules-strongly-recommended.html#single-file-component-filename-casing</a
        >
      </p>
      <p>
        Filenames of Single-File Components should either be always PascalCase
        or always kebab-case.
      </p>

      <h3>Semantic HTML markup</h3>
      <h3>Utility-first CSS</h3>
      <p>
        Bootstrap and other CSS frameworks provide low-level utility classes
        that let you build completely custom designs without ever leaving your
        HTML.
      </p>

      <h2>Testing Components</h2>
      <p>
        <a
          href="https://vuejs.org/guide/scaling-up/testing.html#component-testing"
          target="_blank"
          >https://vuejs.org/guide/scaling-up/testing.html#component-testing</a
        >
      </p>

      <h2>AXDD Django Vue</h2>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  name: "DocsDevelopmentIndex",
  components: { Layout, CodeBlock },
  data() {
    return {};
  },
};
</script>
