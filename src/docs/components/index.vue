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

      <h2>
        Layouts
        <VersionBadge>1.0.0</VersionBadge>
      </h2>
      <p>
        <router-link to="/components/layouts">View Layouts</router-link>
      </p>

      <h2>Navigation</h2>

      <h2>
        Card
        <VersionBadge>1.0.4</VersionBadge>
      </h2>
      <p>this is an empty card</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #body>card body</template>
            </axdd-card>
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
              <template #body>card body</template>
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>this is a card w/ a button as header action</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #heading-action>
                <axdd-card-heading :level="3">Heading</axdd-card-heading>
                <axdd-card-action>
                  <a
                    href="#"
                    class="btn btn-dark-beige btn-sm"
                    @click.prevent="greet"
                    >Card heading action</a
                  >
                </axdd-card-action>
              </template>
              <template #body>card body</template>
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading-action>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
    &lt;axdd-card-action>
      &lt;a href="#" @click.prevent="greet">Card heading action&lt;/a>
    &lt;/axdd-card-action>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <p>this is a card w/ html as header action</p>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-card>
              <template #heading-action>
                <axdd-card-heading :level="3">Heading</axdd-card-heading>
                <axdd-card-action>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Search all students..."
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-sm btn-dark-beige"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                </axdd-card-action>
              </template>
              <template #body>card body</template>
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading-action>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
    &lt;axdd-card-action>
      &lt;div class="input-group">... html markup&lt;/div>
    &lt;/axdd-card-action>
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
                <axdd-card-heading :level="9">Heading</axdd-card-heading>
              </template>
              <template #body>card body</template>
              <template #footer>this is the footer</template>
            </axdd-card>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
  &lt;template #footer>this is the footer&lt;/template>
&lt;/axdd-card></code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2>
        Tabs
        <VersionBadge>1.0.4</VersionBadge>
      </h2>
      <div class="axdd-font-open-sans" style="max-width: 75%">
        <CodeBlock>
          <template #preview>
            <axdd-tabs :tabs-id="'example'">
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
                    <strong>first</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'second'">
                  <p>
                    <strong>second</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'third'">
                  <p>
                    <strong>third</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>
                </axdd-tabs-panel>
              </template>
            </axdd-tabs>
          </template>
          <template #code>
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
&lt;/axdd-tabs></code>
            </pre>
          </template>
        </CodeBlock>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../layouts/docs.vue";
import CodeBlock from "../../components/CodeBlock.vue";
import VersionBadge from "../../components/VersionBadge.vue";

import Card from "../../_components/card/card.vue";
import CardHeading from "../../_components/card/heading.vue";
import CardAction from "../../_components/card/action.vue";

import Tabs from "../../_components/tabs/tabs.vue";
import TabsItem from "../../_components/tabs/item.vue";
import TabsPanel from "../../_components/tabs/panel.vue";

export default {
  name: "DocsComponentsIndex",
  components: {
    Layout,
    CodeBlock,
    VersionBadge,
    "axdd-card": Card,
    "axdd-card-heading": CardHeading,
    "axdd-card-action": CardAction,
    "axdd-tabs": Tabs,
    "axdd-tabs-item": TabsItem,
    "axdd-tabs-panel": TabsPanel,
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
