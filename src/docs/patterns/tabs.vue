<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Tabs</li>
        </ol>
      </nav>

      <h1>Tabs</h1>

      <p class="p-0 col-md-8 lead">
        Tabs Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos
        provident praesentium ipsum sed aperiam aliquam quibusdam voluptatem
        corrupti, reprehenderit illum. Nobis quia incidunt non officia nihil id
        perferendis molestiae?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/</a
        >
      </p>

      <h2>Standard</h2>

      <CodeBlock>
        <template #preview>
          <axdd-tabs :tabs-id="'example'" style="max-width: 600px">
            <template #items>
              <axdd-tabs-item
                :tabs-id="'example'"
                :panel-id="'first'"
                :active-tab="true"
                >First</axdd-tabs-item
              >
              <axdd-tabs-item :tabs-id="'example'" :panel-id="'second'"
                >Second</axdd-tabs-item
              >
              <axdd-tabs-item :tabs-id="'example'" :panel-id="'third'"
                >Third</axdd-tabs-item
              >
            </template>
            <template #panels>
              <axdd-tabs-panel :panel-id="'first'" :active-panel="true">
                <p>
                  <strong>first</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
              <axdd-tabs-panel :panel-id="'second'">
                <p>
                  <strong>second</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
              <axdd-tabs-panel :panel-id="'third'">
                <p>
                  <strong>third</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
            </template>
          </axdd-tabs>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-tabs :tabs-id="'example'">
  &lt;template #items>
    &lt;axdd-tabs-item :tabs-id="'example'" :panel-id="'first'" :active-tab="true">
      First
    &lt;/axdd-tabs-item>
    &lt;axdd-tabs-item :tabs-id="'example'" :panel-id="'second'">
    Second
    &lt;/axdd-tabs-item>
    &lt;axdd-tabs-item :tabs-id="'example'" :panel-id="'third'">
    Third
    &lt;/axdd-tabs-item>
  &lt;/template>
  &lt;template #panels>
    &lt;axdd-tabs-panel :panel-id="'first'" :active-panel="true">
      first ...
    &lt;/axdd-tabs-panel>
    &lt;axdd-tabs-panel :panel-id="'second'">
      second ...
    &lt;/axdd-tabs-panel>
    &lt;axdd-tabs-panel :panel-id="'third'">
      third ...
    &lt;/axdd-tabs-panel>
  &lt;/template>
&lt;/axdd-tabs></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Tabs, TabsItem, TabsPanel } from "axdd-components";

export default {
  components: {
    "axdd-tabs": Tabs,
    "axdd-tabs-item": TabsItem,
    "axdd-tabs-panel": TabsPanel,
  },
};</code></pre>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";
import CodeBlock from "../../components/CodeBlock.vue";

import Tabs from "../../_components/tabs/tabs.vue";
import TabsItem from "../../_components/tabs/item.vue";
import TabsPanel from "../../_components/tabs/panel.vue";

export default {
  name: "DocsComponentsTabs",
  components: {
    Layout,
    CodeBlock,
    "axdd-tabs": Tabs,
    "axdd-tabs-item": TabsItem,
    "axdd-tabs-panel": TabsPanel,
  },
  data() {
    return {};
  },
};
</script>
