<template>
  <Layout>
    <template #content>
      <h1 class="fw-bold">Introduction</h1>

      <p class="p-0 col-md-8 lead mb-5">
        AXDD Components is a resource for building and documenting UI components
        using Bootstrap and Vue.js. It provides a set of organized guidelines,
        patterns and best practices that work as the foundation for application
        design and development at AXDD.
      </p>

      <div class="row">
        <div class="col">
          <h2>Goals</h2>
          <ul>
            <li>Faster design and development workflow</li>
            <li>Living documentation</li>
            <li>Automated testing</li>
          </ul>
        </div>
        <div class="col">
          <h2>Principles</h2>
          <p>
            Get to know our foundational thinking and how we put it into action
            across our design system.
          </p>

          <p>
            <router-link to="/start/principles"
              >Learn about our design principles</router-link
            >
          </p>
        </div>
      </div>

      <hr class="mb-5 w-25 d-inline-block" />

      <div class="row">
        <div class="col">
          <h2 class="fw-bold">Getting started</h2>
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

      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Guides</h2>
          <p>
            Check out these guides to help you understand how to design
            applications using AXDD Components.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h3>Content</h3>
          <p>
            Learn how to use language to design a more thoughtful product
            experience.
          </p>

          <p>
            <router-link to="/content/">Read content guidelines</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Foundations</h3>
          <p>
            Use design foundations to ensure consistency across the application.
          </p>
          <p>
            <router-link to="/foundations/">Browse foundations</router-link>
          </p>
        </div>
        <div class="col">
          <h3>Elements</h3>
          <p>
            Use elements as building blocks as you design and develop new
            products and features.
          </p>
          <p><router-link to="/elements/">Browse elements</router-link></p>
        </div>
        <div class="col">
          <h3>Patterns</h3>
          <p>Patterns consist of design tokens, elements, and patterns.</p>
          <p><router-link to="/patterns/">Browse patterns</router-link></p>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex flex-column">
          <PatternDescription
            :name="'Designers'"
            :link="'/start/designers'"
            class="alert-purple"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              nostrum beatae aperiam nesciunt voluptate. Placeat ipsum libero
              similique enim labore corrupti porro iure commodi laborum iste
              itaque, magnam voluptate esse.
            </p>
          </PatternDescription>
        </div>
        <div class="col d-flex flex-column">
          <PatternDescription
            :name="'Developers'"
            :link="'/start/developers'"
            class="alert-purple"
          >
            <p>
              Learn how to create global components that can be used by other
              applications as well as creating brand new applications.
            </p>

            <ul>
              <li>
                <router-link to="/sandbox/topbar/">Topbar</router-link>
                (generic)
              </li>
              <li>
                <router-link to="/sandbox/sidebar/">Sidebar</router-link>
                (generic)
              </li>
            </ul>
          </PatternDescription>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../layout.vue";
import CodeBlock from "../components/CodeBlock.vue";
import PatternDescription from "../components/PatternDescription.vue";

export default {
  name: "DocsIndex",
  components: {
    Layout,
    CodeBlock,
    PatternDescription,
  },
  data() {
    return {};
  },
};
</script>
