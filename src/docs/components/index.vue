<template>
  <Layout>
    <template #content>
      <h1>Components</h1>

      <p class="p-0 col-md-8 lead">
        Components are the re-usable UI patterns that fall on the more complex
        side of the spectrum. Components utilize both elements and design tokens
        and are the design and building blocks of the visual design.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Layouts (1.0.0)</h2>
      <p><router-link to="/components/layouts">View Layouts</router-link></p>

      <h2>Navigation</h2>

      <h2>Card (1.0.4)</h2>
      <p>this is an empty card</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>card body</axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>this is a card w/ header</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #heading>
                <axdd-card-heading :level="3">Heading</axdd-card-heading>
              </template>
              card body
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">asdflkj&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>this is a card w/ a header action</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #heading-action>
                <axdd-card-heading :level="3">asdflkj</axdd-card-heading>
                <axdd-card-action @click.prevent="greet"
                  >Card heading action</axdd-card-action
                >
              </template>
              card body
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading-action>
    &lt;axdd-card-heading :level="3">asdflkj&lt;/axdd-card-heading>
    &lt;axdd-card-action @click.prevent="greet">Card heading action&lt;/axdd-card-action>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>this is a card w/ footer</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #heading>
                <axdd-card-heading :level="9">asdflkj</axdd-card-heading>
              </template>
              card body
              <template #footer> this is the footer </template>
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">asdflkj&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
  &lt;template #footer>this is the footer&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2>Tabs (1.0.4)</h2>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-tabs :tabs-id="'schedule'">
              <template #items>
                <axdd-tab-item
                  :tabs-id="'schedule'"
                  :panel-id="'current'"
                  :active-tab="true"
                  >Current</axdd-tab-item
                >
                <axdd-tab-item :tabs-id="'schedule'" :panel-id="'next'"
                  >Next</axdd-tab-item
                >
                <axdd-tab-item :tabs-id="'schedule'" :panel-id="'after'"
                  >After</axdd-tab-item
                >
                <axdd-tab-item :tabs-id="'schedule'" :panel-id="'further'"
                  >Further</axdd-tab-item
                >
              </template>
              <template #panels>
                <axdd-tab-panel :panel-id="'current'" :active-panel="true">
                  <p>
                    <strong>current</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Id aperiam dolores harum
                    doloribus libero sapiente corrupti sint rerum incidunt. Qui
                    quia hic ipsam culpa laudantium delectus sapiente tempore,
                    eveniet modi.
                  </p>
                </axdd-tab-panel>
                <axdd-tab-panel :panel-id="'next'">
                  <p>
                    <strong>next</strong> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Repellendus iste, expedita, vitae
                    voluptatibus nobis amet eligendi consectetur repudiandae aut
                    ut vel? Amet nesciunt culpa non molestiae enim consequuntur
                    provident sit.
                  </p>
                </axdd-tab-panel>
                <axdd-tab-panel :panel-id="'after'">
                  <p>
                    <strong>after</strong>, ipsum dolor sit amet consectetur
                    adipisicing elit. Doloremque est totam, ipsa corporis
                    molestias, temporibus maiores ex enim error perferendis ad
                    veritatis tenetur dicta laboriosam nam eaque eum minus
                    distinctio.
                  </p>
                </axdd-tab-panel>
                <axdd-tab-panel :panel-id="'further'">
                  <p>
                    <strong>further</strong>, ipsum dolor sit amet consectetur
                    adipisicing elit. Doloremque est totam, ipsa corporis
                    molestias, temporibus maiores ex enim error perferendis ad
                    veritatis tenetur dicta laboriosam nam eaque eum minus
                    distinctio.
                  </p>
                </axdd-tab-panel>
              </template>
            </axdd-tabs>
          </template>
        </CodeBlock>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/docs.vue";
import CodeBlock from "../../components/CodeBlock.vue";

import Card from "../../_components/card/card.vue";
import CardHeading from "../../_components/card/heading.vue";
import CardAction from "../../_components/card/action.vue";

import Tabs from "../../_components/tabs/tabs.vue";
import TabItem from "../../_components/tabs/item.vue";
import TabPanel from "../../_components/tabs/panel.vue";

export default {
  components: {
    Layout,
    CodeBlock,
    "axdd-card": Card,
    "axdd-card-heading": CardHeading,
    "axdd-card-action": CardAction,
    "axdd-tabs": Tabs,
    "axdd-tab-item": TabItem,
    "axdd-tab-panel": TabPanel,
  },
  data() {
    return {};
  },
  methods: {
    greet() {
      alert("Hello...");
    },
  },
};
</script>

<style lang="scss" scoped></style>
