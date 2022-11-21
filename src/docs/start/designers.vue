<template>
  <Layout>
    <template #content>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/start/">Getting Started</a></li>
          <li class="breadcrumb-item active" aria-current="page">Designers</li>
        </ol>
      </nav>
      <h1>Designers</h1>

      <p class="p-0 col-md-8 lead text-muted">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
        voluptate sint alias consectetur commodi dignissimos, minus ratione quos
        a enim blanditiis hic perferendis ullam quod non, molestiae aut illo?
        Aut!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>UX Design Process</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
        accusantium nobis dicta saepe necessitatibus eos eius quas quod quo
        blanditiis, eum dolor totam nesciunt harum beatae recusandae! Harum, id
        fugiat? Read the full
        <a href="https://uxdesign.uw.edu/" target="_blank">UX Design Guides</a>.
      </p>
      <ul>
        <li>
          <a
            href="https://uxdesign.uw.edu/process/understand.html"
            target="_blank"
            >Understand</a
          >
        </li>
        <li>
          <a href="https://uxdesign.uw.edu/process/create.html" target="_blank"
            >Create</a
          >
        </li>
        <li>
          <a
            href="https://uxdesign.uw.edu/process/validate.html"
            target="_blank"
            >Validate</a
          >
        </li>
        <li>
          <a href="https://uxdesign.uw.edu/process/iterate.html" target="_blank"
            >Iterate</a
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
    <template #modified>November 11, 2022</template>
  </Layout>
</template>

<script>
import Layout from "../../layout.vue";

export default {
  name: "DocsDesignersIndex",
  components: { Layout },
  data() {
    return {};
  },
};
</script>
