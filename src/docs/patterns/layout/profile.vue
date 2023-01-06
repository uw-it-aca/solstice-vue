<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/layout/">Layout</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>

      <h1>Profile</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Profile Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        eos provident praesentium ipsum sed aperiam aliquam quibusdam voluptatem
        corrupti, reprehenderit illum. Nobis quia incidunt non officia nihil id
        perferendis molestiae?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Standard</h2>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <axdd-profile
              :user-netid="'javerage'"
              :signout-url="'/signout/url'"
            >
            </axdd-profile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <axdd-profile :user-netid="'javerage'" :user-override="'jbothell'">
              <button class="btn btn-link btn-sm text-danger m-0 p-0 border-0">
                clear action
              </button>
            </axdd-profile>
          </div>
        </template>
      </CodeBlock>

      <h2>Flyout</h2>

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <axdd-profile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-official-name="'John C. Average'"
              :user-preferred-name="'John Average'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
              :signout-url="'/signout/url'"
            >
            </axdd-profile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="w-50 px-3 py-1 bg-dark-purple small">
            <axdd-profile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-override="'jbothell'"
              :user-official-name="'John B. Bothell'"
              :user-preferred-name="'John Bothell'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
            >
              <button class="btn btn-link btn-sm text-danger m-0 p-0 border-0">
                clear action
              </button>
            </axdd-profile>
          </div>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CodeBlock from "../../../components/CodeBlock.vue";

export default {
  name: "DocsPatternsTabs",
  components: {
    Layout,
    CodeBlock,
  },
  data() {
    return {};
  },
};
</script>
