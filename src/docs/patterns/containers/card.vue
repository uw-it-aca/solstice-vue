<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/containers">Containers</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Card</li>
        </ol>
      </nav>

      <h1>Card</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Cards is a container of content... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ea nemo nobis, eligendi sit ipsa mollitia
        necessitatibus possimus, veniam sapiente deleniti quo. Nemo error quos,
        eius facilis rem amet deserunt est!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Body</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #body
              >Lorem ipsum dolor sit amet consectetur adipisicing elit</template
            >
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card } from "axdd-components";

export default {
  components: {
    "axdd-card": Card,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
            </template>
            <template #body>card body</template>
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #heading>
    &lt;axdd-card-heading :level="3">Heading&lt;/axdd-card-heading>
  &lt;/template>
  &lt;template #body>card body&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading } from "axdd-components";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading Action</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
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
        <template #markup>
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
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading, CardAction } from "axdd-components";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
    "axdd-card-action": CardAction,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <p>this is a card w/ html as heading action</p>

      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
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
        <template #markup>
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
        <template #script>
          <pre class="language-js rounded">
<code>import { Card, CardHeading, CardAction } from "axdd-components";

export default {
  components: {
    "axdd-card": Card,
    "axdd-card-heading": CardHeadng,
    "axdd-card-action": CardAction,
  },
};</code></pre>
        </template>
      </CodeBlock>

      <h2>Body + Heading Tabs</h2>
      <p>asdkfjalskdj</p>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #heading-action>
              <axdd-card-heading :level="3">Heading</axdd-card-heading>
              <axdd-card-action>
                <axdd-tabs-list
                  :tabs-id="'example'"
                  :variant="'pills'"
                  class="small"
                >
                  <template #items>
                    <axdd-tabs-item
                      :tabs-id="'example'"
                      :panel-id="'first'"
                      :active-tab="true"
                      :variant="'pills'"
                    >
                      Firstsss
                    </axdd-tabs-item>
                    <axdd-tabs-item
                      :tabs-id="'example'"
                      :panel-id="'second'"
                      :variant="'pills'"
                    >
                      Second
                    </axdd-tabs-item>
                    <axdd-tabs-item
                      :tabs-id="'example'"
                      :panel-id="'third'"
                      :variant="'pills'"
                    >
                      Third
                    </axdd-tabs-item>
                  </template>
                </axdd-tabs-list>
              </axdd-card-action>
            </template>
            <template #body>
              <axdd-tabs-display :tabs-id="'example'">
                <template #panels>
                  <axdd-tabs-panel :panel-id="'first'" :active-panel="true">
                    first ...
                  </axdd-tabs-panel>
                  <axdd-tabs-panel :panel-id="'second'">
                    second ...
                  </axdd-tabs-panel>
                  <axdd-tabs-panel :panel-id="'third'">
                    third ...
                  </axdd-tabs-panel>
                </template>
              </axdd-tabs-display>
            </template>
          </axdd-card>
        </template>
      </CodeBlock>

      <h2>Body + Footer</h2>
      <CodeBlock>
        <template #preview>
          <axdd-card style="max-width: 600px">
            <template #body
              >Lorem ipsum dolor sit amet consectetur adipisicing elit</template
            >
            <template #footer>this is the footer</template>
          </axdd-card>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-card>
  &lt;template #body>card body&lt;/template>
  &lt;template #footer>this is the footer&lt;/template>
&lt;/axdd-card></code></pre>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CodeBlock from "../../../components/CodeBlock.vue";

export default {
  name: "DocsPatternsCard",
  components: {
    Layout,
    CodeBlock,
  },
  data() {
    return {};
  },
};
</script>
