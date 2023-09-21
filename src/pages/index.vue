// home.vue

<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #description>
      <div class="p-0 col-md-8 lead">
        <p>
          <sol-link
            href="https://github.com/uw-it-aca/axdd-components"
            is-external
            >AXDD-Components</sol-link
          >
          is a VueJs component library. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius eaque placeat corrupti sequi eveniet aliquam
          dicta harum tempora sed nisi a voluptatem dolorum unde, corporis
          voluptate perspiciatis dignissimos praesentium. Et!
        </p>
      </div>
    </template>

    <template #content>
      <div class="row">
        <div class="col">
          <h2>Building components</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            numquam perspiciatis, laudantium suscipit corrupti atque ea officiis
            incidunt iusto, esse voluptatum animi nobis dolores modi earum
            magnam expedita eius repellat!
          </p>

          <h3>Development</h3>
          <ol>
            <li>create a branch</li>
            <li>run the <code>npm run build</code> command</li>
          </ol>

          <h3>Kitchen Sink</h3>

          <p>The core building blocks consists of:</p>
          <ul>
            <li>
              <strong>Layouts</strong> - where elements and containers live
            </li>
            <li><strong>Elements</strong> - single atom</li>
            <li>
              <strong>Containers</strong> - surfaces that encapsulates 1 or more
              elements
            </li>
            <li>
              <strong>Patterns</strong> - elements + containers and other
              complex ui interactions
            </li>
          </ul>

          <h4>Layouts</h4>
          <p>
            Layout defines the boilerplate container of the application. Most
            D&A applications fall into 2 types of layouts:
          </p>
          <ul>
            <li>
              <sol-link href="/topbar">Topbar</sol-link>
            </li>
            <li>
              <sol-link href="/sidebar">Sidebar</sol-link>
            </li>
          </ul>

          <h4>Elements</h4>
          <p>
            Elements are the atomic pieces of the Solstice Design System. They
            are the core building blocks of user interfaces.
          </p>

          <h5>Link</h5>
          <p>Color (default on light/dark mode backgrounds)</p>
          <ul class="list-unstyled text-secondary p-2 border">
            <li>
              default:
              <sol-link href="/topbar">topbar</sol-link>
            </li>
            <li>
              quiet:
              <sol-link href="/topbar" variant="quiet">topbar</sol-link>
            </li>
            <li>
              icon:
              <sol-link href="/topbar" variant="icon" icon="bi-android2"
                >topbar</sol-link
              >
            </li>
          </ul>

          <p>Color (light - used on dark backgrounds)</p>
          <ul class="list-unstyled bg-purple text-secondary p-2">
            <li>
              default:
              <sol-link href="/topbar" variant="default" color="link-light"
                >topbar</sol-link
              >
            </li>
            <li>
              quiet:
              <sol-link href="/topbar" variant="quiet" color="link-light"
                >topbar</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                href="/topbar"
                variant="icon"
                icon="bi-android2"
                color="link-light"
                >topbar</sol-link
              >
            </li>
          </ul>

          <p>Color (dark - used on light (non-white?) backgrounds)</p>
          <ul class="list-unstyled bg-warning text-secondary p-2">
            <li>
              default:
              <sol-link
                href="/topbar"
                variant="default"
                color="link-dark link-underline-dark"
                >topbar</sol-link
              >
            </li>
            <li>
              quiet:
              <sol-link href="/topbar" variant="quiet" color="link-dark"
                >topbar</sol-link
              >
            </li>
            <li>
              icon:
              <sol-link
                href="/topbar"
                variant="icon"
                icon="bi-android2"
                color="link-dark"
                >topbar</sol-link
              >
            </li>
          </ul>

          <p>External links - go outside of the page</p>
          <ul class="list-unstyled text-secondary p-2 border">
            <li>
              external default:
              <sol-link href="https://google.com" is-external>google</sol-link>
            </li>
            <li>
              external quiet:
              <sol-link href="https://google.com" variant="quiet" is-external
                >google</sol-link
              >
            </li>
            <li>
              external icon:
              <sol-link
                href="https://google.com"
                variant="icon"
                icon="bi-android2"
                is-external
                >google</sol-link
              >
            </li>
          </ul>

          <hr class="mb-5 w-25 d-inline-block" />

          <h5>Badge</h5>
          <ul class="list-unstyled">
            <li>default <span class="badge bg-primary">New</span></li>
            <li>
              pill
              <span class="badge rounded-pill text-bg-primary">Primary</span>
            </li>
            <li></li>
          </ul>

          <hr class="mb-5 w-25 d-inline-block" />

          <h5>Button</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <button type="button" class="btn btn-primary">Primary</button>
            </li>
            <li class="mb-2">
              <button type="button" class="btn btn-outline-primary">
                Primary Outline
              </button>
            </li>
            <li class="mb-2">
              <button type="button" class="btn btn-primary btn-sm">
                Small button
              </button>
            </li>
            <li class="mb-2">
              <button type="button" class="btn btn-outline-primary btn-sm">
                Small outline
              </button>
            </li>
          </ul>

          <hr class="mb-5 w-25 d-inline-block" />

          <h5>Heading</h5>
          <ul class="list-unstyled">
            <li><h1>h1</h1></li>
            <li><h2>h2</h2></li>
            <li><h3>h3</h3></li>
            <li><h4>h4</h4></li>
            <li><h5>h5</h5></li>
            <li><h6>h6</h6></li>
            <li><h1 class="text-dark-beige ff-encode-sans">Encode-sans</h1></li>
          </ul>

          <hr class="mb-5 w-25 d-inline-block" />

          <h5>Paragraph</h5>
          <p>
            System. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Neque similique consequuntur numquam assumenda nihil, error
            reiciendis sequi voluptas perferendis magnam expedita et, minus
            tenetur hic. Illum iste eaque officiis obcaecati.
          </p>
          <p class="ff-open-sans">
            Open Sans. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Neque similique consequuntur numquam assumenda nihil, error
            reiciendis sequi voluptas perferendis magnam expedita et, minus
            tenetur hic. Illum iste eaque officiis obcaecati.
          </p>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from "../layout.vue";
//import HelloWorld from "../components/hello-world.vue";

export default {
  name: "PagesHome",
  components: {
    layout: Layout,
    //HelloWorld,
  },
  data() {
    return {
      pageTitle: "Getting started",
    };
  },
  methods: {},
};
</script>
