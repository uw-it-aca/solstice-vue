// home.vue

<template>
  <Layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>
      {{ pageTitle }}
    </template>

    <template #description>
      <div class="p-0 col-md-8 lead">
        <p>
          <a
            href="https://github.com/uw-it-aca/solstice-vue"
            class="link-primary"
            >solstice-vue</a
          >
          is a VueJs component library. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius eaque placeat corrupti sequi eveniet aliquam
          dicta harum tempora sed nisi a voluptatem dolorum unde, corporis
          voluptate perspiciatis dignissimos praesentium. Et!
        </p>
      </div>
    </template>

    <template #content>
      <div class="row mb-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>

          <h2 class="fw-bold text-danger text-primary-hover">
            Building components
          </h2>
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
        </div>
      </div>
      <div class="row mb-5">
        <div class="col">
          <h2 class="fw-bold">Foundations</h2>
          <h3>Layout</h3>
          <ul>
            <li>
              <RouterLink to="/topbar">Topbar</RouterLink>
            </li>
            <li>
              <RouterLink to="/sidebar">Sidebar</RouterLink>
            </li>
          </ul>
          <h3>Color</h3>

          <h4>Swatches</h4>
          <div class="grid" style="--bs-columns: 6">
            <div>
              <div class="p-3 mb-2 position-relative bg-purple2-500 text-white">
                <strong class="d-block">$purple2</strong>
                #4b2e83
              </div>
              <div class="p-3 bg-purple2-100 text-dark">$purple2-100</div>
              <div class="p-3 bg-purple2-200 text-dark">$purple2-200</div>
              <div class="p-3 bg-purple2-300 text-dark">$purple2-300</div>
              <div class="p-3 bg-purple2-400 text-light">$purple2-400</div>
              <div class="p-3 bg-purple2-500 text-light">$purple2-500</div>
              <div class="p-3 bg-purple2-600 text-light">$purple2-600</div>
              <div class="p-3 bg-purple2-700 text-light">$purple2-700</div>
              <div class="p-3 bg-purple2-800 text-light">$purple2-800</div>
              <div class="p-3 bg-purple2-900 text-light">$purple2-900</div>
            </div>

            <div>
              <div class="p-3 mb-2 position-relative bg-red2-500 text-white">
                <strong class="d-block">$red2</strong>
                #cb444a
              </div>
              <div class="p-3 bg-red2-100 text-dark">$red2-100</div>
              <div class="p-3 bg-red2-200 text-dark">$red2-200</div>
              <div class="p-3 bg-red2-300 text-dark">$red2-300</div>
              <div class="p-3 bg-red2-400 text-light">$red2-400</div>
              <div class="p-3 bg-red2-500 text-white">$red2-500</div>
              <div class="p-3 bg-red2-600 text-white">$red2-600</div>
              <div class="p-3 bg-red2-700 text-white">$red2-700</div>
              <div class="p-3 bg-red2-800 text-white">$red2-800</div>
              <div class="p-3 bg-red2-900 text-white">$red2-900</div>
            </div>

            <div>
              <div class="p-3 mb-2 position-relative bg-blue2-500 text-white">
                <strong class="d-block">$blue2</strong>
                #2f68cb
              </div>
              <div class="p-3 bg-blue2-100 text-dark">$blue2-100</div>
              <div class="p-3 bg-blue2-200 text-dark">$blue2-200</div>
              <div class="p-3 bg-blue2-300 text-dark">$blue2-300</div>
              <div class="p-3 bg-blue2-400 text-light">$blue2-400</div>
              <div class="p-3 bg-blue2-500 text-light">$blue2-500</div>
              <div class="p-3 bg-blue2-600 text-light">$blue2-600</div>
              <div class="p-3 bg-blue2-700 text-light">$blue2-700</div>
              <div class="p-3 bg-blue2-800 text-light">$blue2-800</div>
              <div class="p-3 bg-blue2-900 text-light">$blue2-900</div>
            </div>

            <div>
              <div class="p-3 mb-2 position-relative bg-beige-500 text-white">
                <strong class="d-block">$beige</strong>
                #ab9765
              </div>
              <div class="p-3 bg-beige-100 text-dark">$beige-100</div>
              <div class="p-3 bg-beige-200 text-dark">$beige-200</div>
              <div class="p-3 bg-beige-300 text-dark">$beige-300</div>
              <div class="p-3 bg-beige-400 text-dark">$beige-400</div>
              <div class="p-3 bg-beige-500 text-dark">$beige-500</div>
              <div class="p-3 bg-beige-600 text-light">$beige-600</div>
              <div class="p-3 bg-beige-700 text-light">$beige-700</div>
              <div class="p-3 bg-beige-800 text-light">$beige-800</div>
              <div class="p-3 bg-beige-900 text-light">$beige-900</div>
            </div>

            <div>
              <div class="p-3 mb-2 position-relative bg-gold-500 text-white">
                <strong class="d-block">$gold</strong>
                #ffbc24
              </div>
              <div class="p-3 bg-gold-100 text-dark">$gold-100</div>
              <div class="p-3 bg-gold-200 text-dark">$gold-200</div>
              <div class="p-3 bg-gold-300 text-dark">$gold-300</div>
              <div class="p-3 bg-gold-400 text-dark">$gold-400</div>
              <div class="p-3 bg-gold-500 text-dark">$gold-500</div>
              <div class="p-3 bg-gold-600 text-light">$gold-600</div>
              <div class="p-3 bg-gold-700 text-light">$gold-700</div>
              <div class="p-3 bg-gold-800 text-light">$gold-800</div>
              <div class="p-3 bg-gold-900 text-light">$gold-900</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <h2 class="fw-bold">Elements</h2>

          <h2 class="fw-bold">Patterns</h2>

          <h3>Tabs</h3>
          <p>
            Customized from Bootstrap to meet
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/tabs/"
              >https://www.w3.org/WAI/ARIA/apg/patterns/tabs/</a
            >
            specs.
          </p>

          <h4>Underline (Default)</h4>
          <STabsList :tabs-id="'example2'">
            <STabsItem
              :tabs-id="'example2'"
              :panel-id="'first2'"
              active-tab="true"
            >
              First
            </STabsItem>
            <STabsItem :tabs-id="'example2'" :panel-id="'second2'">
              Second
            </STabsItem>
            <STabsItem :tabs-id="'example2'" :panel-id="'third2'">
              Third
            </STabsItem>
          </STabsList>

          <STabsDisplay :tabs-id="'example2'">
            <STabsPanel :panel-id="'first2'" :active-panel="true">
              <p>
                First... Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Voluptatum quaerat fuga ad quo facere, beatae odit at
                mollitia reiciendis harum nostrum dolorum eum dolor corporis
                doloremque architecto accusantium? Quibusdam, vitae?
              </p>
            </STabsPanel>
            <STabsPanel :panel-id="'second2'"
              ><p>
                Second... Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempore, provident quas molestias dicta exercitationem
                nihil odit. Itaque qui minima sequi, reprehenderit veritatis,
                cum perspiciatis ad neque architecto repellat consequuntur
                repudiandae!
              </p>
            </STabsPanel>
            <STabsPanel :panel-id="'third2'"
              ><p>
                Third... Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quidem quam, beatae perferendis dolore ratione doloremque,
                voluptates aut, ullam illum esse sequi blanditiis pariatur
                delectus saepe molestias necessitatibus cupiditate maxime
                voluptatem.
              </p></STabsPanel
            >
          </STabsDisplay>

          <h4>Pills</h4>

          <STabsList :tabs-id="'example'" variant="pills">
            <STabsItem
              :tabs-id="'example'"
              :panel-id="'first'"
              :active-tab="true"
            >
              First
            </STabsItem>
            <STabsItem :tabs-id="'example'" :panel-id="'second'">
              Second
            </STabsItem>
            <STabsItem :tabs-id="'example'" :panel-id="'third'">
              Third
            </STabsItem>
          </STabsList>

          <STabsDisplay :tabs-id="'example2'">
            <STabsPanel :panel-id="'first'" :active-panel="true">
              first... Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sint repudiandae dolorum, velit laborum doloremque distinctio eum
              dolores labore corrupti repellat adipisci minima eveniet
              exercitationem, praesentium expedita porro vero error omnis.
            </STabsPanel>
            <STabsPanel :panel-id="'second'">
              second... Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero deleniti, repellendus harum voluptatum necessitatibus
              mollitia facilis temporibus architecto, voluptatibus officiis
              error asperiores quo autem iure ex laboriosam ut totam!
              Sit.</STabsPanel
            >
            <STabsPanel :panel-id="'third'">
              third... Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sunt quibusdam culpa deleniti quo reiciendis nobis exercitationem
              sapiente! Dolore, provident, consequatur velit autem magnam
              nesciunt esse, laboriosam doloribus perferendis natus
              incidunt?</STabsPanel
            >
          </STabsDisplay>
        </div>
      </div>

      <h2 class="fw-bold">Custom Utilities (solstice.scss)</h2>

      <h3>Hover</h3>

      <h3>text-color-hover</h3>
      <h3>text-opacity-x-hover</h3>
      <h3>bg-color-hover</h3>
      <h3>bg-opacity-x-hover</h3>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import STabsList from "@/components/tabs/STabsList.vue";
import STabsItem from "@/components/tabs/STabsItem.vue";
import STabsDisplay from "@/components/tabs/STabsDisplay.vue";
import STabsPanel from "@/components/tabs/STabsPanel.vue";

export default {
  name: "PagesHome",
  components: {
    Layout,
    STabsList,
    STabsItem,
    STabsDisplay,
    STabsPanel,
  },
  data() {
    return {
      pageTitle: "Getting started",
    };
  },
  methods: {},
};
</script>
