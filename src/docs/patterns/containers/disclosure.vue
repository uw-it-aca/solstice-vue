<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item">
            <a href="/patterns/containers/">Containers</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Disclosure</li>
        </ol>
      </nav>

      <h1>Disclosure (Collapse)</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Disclosure Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Earum eos provident praesentium ipsum sed aperiam aliquam quibusdam
        voluptatem corrupti, reprehenderit illum. Nobis quia incidunt non
        officia nihil id perferendis molestiae?
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/</a
        >
      </p>

      <h2>Link Disclosure (inline)</h2>
      <CodeBlock>
        <template #preview>
          <p>
            This is a sentence with an
            <axdd-disclosure-action :disclosure-id="'blahWah'" is-link
              >inline disclosure</axdd-disclosure-action
            >
            and some more text.
          </p>
          <p>
            This is a sentence followed by an action.
            <axdd-disclosure-action :disclosure-id="'blahWah'" is-link
              >Show disclosure</axdd-disclosure-action
            >
          </p>
          <axdd-disclosure-panel :disclosure-id="'blahWah'">
            <p class="alert alert-beige p-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci expedita tenetur officiis voluptate, laborum
              error cum soluta. Beatae veniam commodi voluptas saepe facere a
              reiciendis, explicabo minima nobis? Fugit.
            </p>
          </axdd-disclosure-panel>
        </template>
      </CodeBlock>

      <h2>Button Disclosure</h2>
      <CodeBlock>
        <template #preview>
          <axdd-disclosure-action class="me-2" :disclosure-id="'blahWoo'">
            link button
          </axdd-disclosure-action>
          <axdd-disclosure-action
            class="me-2 btn-sm"
            :disclosure-id="'blahWoo'"
          >
            small link button
          </axdd-disclosure-action>
          <axdd-disclosure-action
            class="me-2 btn-sm"
            :disclosure-id="'blahWoo'"
            has-indicator
          >
            link button w/ indicator
          </axdd-disclosure-action>
          <axdd-disclosure-panel :disclosure-id="'blahWoo'">
            <div class="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci expedita tenetur officiis voluptate, laborum
              error cum soluta. Beatae veniam commodi voluptas saepe facere a
              reiciendis, explicabo minima nobis? Fugit.
            </div>
          </axdd-disclosure-panel>
        </template>
      </CodeBlock>

      <h2>Block Disclosure (Accordion)</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/accordion/</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <axdd-disclosure-block
            :block-id="'blah1'"
            :block-title="'Heading only'"
            class="border border-gray"
          >
            <template #body>
              <div class="mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium explicabo veritatis harum ab eum quos facilis nihil
                libero ratione voluptate a magni voluptatem deleniti,
                consequatur rerum minus. Dolore, reprehenderit dolor?
              </div>
            </template>
          </axdd-disclosure-block>
          <axdd-disclosure-block
            :block-id="'blah2'"
            :block-title="'Heading with content'"
            class="bg-gray text-dark"
          >
            <template #header>this is heading content</template>
            <template #body>
              <div class="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus sapiente reprehenderit, quos ex id magnam
                molestiae veniam commodi. Laborum, eos! Voluptatem, deleniti
                velit temporibus optio libero placeat quae architecto ipsam?
              </div>
            </template>
          </axdd-disclosure-block>
          <axdd-disclosure-block
            :block-id="'blah3'"
            :block-title="'Complete Example'"
            class="bg-purple text-white"
          >
            <template #header>
              <div class="row">
                <div class="col-7">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="State"
                    aria-label="State"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                </div>
              </div>
            </template>
            <template #body>
              <div class="mt-3 text-white">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </template>
          </axdd-disclosure-block>
        </template>
      </CodeBlock>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CodeBlock from "../../../components/CodeBlock.vue";

export default {
  name: "DocsPatternsDisclosure",
  components: {
    Layout,
    CodeBlock,
  },
  data() {
    return {};
  },
};
</script>
