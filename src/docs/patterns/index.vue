<template>
  <Layout>
    <template #content>
      <h1>Patterns</h1>

      <p class="p-0 col-md-8 lead">
        Patterns are UI Patterns that fall on the more complex side of the
        spectrum. Date pickers, data tables, and visualizations are good
        examples. Patterns utilize both elements and design rationale.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Page Layouts</h2>
      <p><router-link to="/patterns/layouts">Page Layouts</router-link></p>
      <h2>Navigation</h2>

      <h2>Footer</h2>

      <h2>Cards</h2>
      <p>this is an empty card</p>

      <CodeBlock>
        <template #preview>
          <div class="card rounded shadow-sm" style="max-width: 400px">
            <div class="card-body p-3">empty card</div>
          </div>
        </template>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;div class="card rounded-0 shadow-sm"&gt;
  &lt;div class="card-body p-3"&gt;empty card&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </template>
      </CodeBlock>

      <h2>Lists</h2>

      <h2>Summaries</h2>

      <h3>Quick Stats</h3>
      <CodeBlock>
        <template #preview>
          <div class="d-inline-block" style="max-width: 220px">
            <div class="p-3">
              <div class="text-muted small">Currently Registered</div>
              <div class="h1 m-0">
                19/20 <i class="bi bi-people-fill h3 text-primary"></i>
              </div>
            </div>
          </div>
          <div class="d-inline-block" style="max-width: 250px">
            <div class="p-3">
              <div class="text-muted small">
                Median Cumulative GPA
                <i class="bi bi-info-circle-fill text-primary small"></i>
              </div>
              <div class="h1 m-0">
                3.72 <i class="bi bi-bar-chart-line-fill h3 text-primary"></i>
              </div>
            </div>
          </div>
          <div class="d-inline-block" style="max-width: 250px">
            <div class="p-3">
              <div class="text-muted small">Employee Husky</div>
              <div class="m-0 fw-bold">$2.48</div>
            </div>
          </div>
        </template>
        <template #code>code goes here</template>
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
