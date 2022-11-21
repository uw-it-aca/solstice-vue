<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/navigation/">Navigation</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Tabs</li>
        </ol>
      </nav>

      <h1>Tabs</h1>

      <p class="p-0 col-md-8 lead text-muted">
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

      <h2>Standard (w/ variants)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem
        sunt, voluptas iure laborum est nesciunt perspiciatis corporis, ducimus
        perferendis nihil unde illum asperiores doloribus vitae velit quod,
        voluptate aperiam?
      </p>

      <CodeBlock>
        <template #preview>
          <axdd-tabs-list
            :tabs-id="'example'"
            class="mb-4"
            :variant="'pills'"
            style="max-width: 600px"
          >
            <template #items>
              <axdd-tabs-item
                :tabs-id="'example'"
                :panel-id="'first'"
                :active-tab="true"
                :variant="'pills'"
                >First</axdd-tabs-item
              >
              <axdd-tabs-item
                :tabs-id="'example'"
                :panel-id="'second'"
                :variant="'pills'"
                >Second</axdd-tabs-item
              >
              <axdd-tabs-item
                :tabs-id="'example'"
                :panel-id="'third'"
                :variant="'pills'"
                >Third</axdd-tabs-item
              >
            </template>
          </axdd-tabs-list>
          <axdd-tabs-list
            :tabs-id="'example'"
            class="mb-4"
            style="max-width: 600px"
          >
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
          </axdd-tabs-list>
          <axdd-tabs-display :tabs-id="'example'" style="max-width: 600px">
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
          </axdd-tabs-display>
        </template>
        <template #markup>
          <pre class="language-html rounded">
<code>&lt;axdd-tabs-list :tabs-id="'example'">
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
&lt;/axdd-tabs-list>

&lt;axdd-tabs-display :tabs-id="'example'"
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
&lt;/axdd-tabs-display></code></pre>
        </template>
      </CodeBlock>

      <h2>Disconnected</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate
        veniam doloremque repudiandae architecto impedit saepe quos facilis,
        beatae aperiam, fugit quidem itaque reprehenderit? Impedit harum fugiat
        dolorum error! Rerum.
      </p>
      <CodeBlock>
        <template #preview>
          <axdd-tabs-list
            :tabs-id="'example2'"
            class="mb-4"
            style="max-width: 600px"
          >
            <template #items>
              <axdd-tabs-item
                :tabs-id="'example2'"
                :panel-id="'first2'"
                :active-tab="true"
                >First</axdd-tabs-item
              >
              <axdd-tabs-item :tabs-id="'example2'" :panel-id="'second2'"
                >Second</axdd-tabs-item
              >
              <axdd-tabs-item :tabs-id="'example2'" :panel-id="'third2'"
                >Third</axdd-tabs-item
              >
            </template>
          </axdd-tabs-list>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nihil saepe nemo quas enim cum, nisi fuga modi eius dolor quae
            quibusdam dicta fugit, quia velit, similique magnam eaque tempora.
          </p>
          <axdd-tabs-display :tabs-id="'example2'" style="max-width: 600px">
            <template #panels>
              <axdd-tabs-panel :panel-id="'first2'" :active-panel="true">
                <p>
                  <strong>first</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
              <axdd-tabs-panel :panel-id="'second2'">
                <p>
                  <strong>second</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
              <axdd-tabs-panel :panel-id="'third2'">
                <p>
                  <strong>third</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </axdd-tabs-panel>
            </template>
          </axdd-tabs-display>
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
