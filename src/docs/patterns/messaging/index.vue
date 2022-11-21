<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/patterns/">Patterns</a></li>
          <li class="breadcrumb-item active" aria-current="page">Messaging</li>
        </ol>
      </nav>

      <h1 class="fw-bold">Messaging</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto tempore
        omnis esse quasi assumenda quae voluptatem, dolores perspiciatis
        facilis. Iste cupiditate similique quis nam amet officiis? Accusantium
        ducimus vel sit!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <ul class="row list-unstyled">
        <li class="col-4">
          <CompDescription
            :name="'Banner'"
            :link="'/patterns/messaging/banner'"
            :accessibility="true"
            :version="'1.0.x'"
          ></CompDescription>
        </li>
        <li class="col-4">
          <CompDescription
            :name="'Takeover'"
            :link="'/patterns/messaging/takeover'"
            :accessibility="true"
            :version="'1.0.x'"
            >aksdfjaasdf aka modal</CompDescription
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../../layout.vue";
import CompDescription from "../../../components/CompDescription.vue";

export default {
  name: "DocsPatternsLayouts",
  components: {
    Layout,
    CompDescription,
  },
  data() {
    return {};
  },
};
</script>
