<template>
  <uw-support-tools
    app-name="MyApp"
    user-id="mynetid"
    logout-url="https://uw.edu"
    page-title="My Page"
  >
    <template #navigation>
      <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
      <ul class="list-unstyled">
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
      </ul>
      <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
      <ul class="list-unstyled">
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
        <li>
          <a href="#">Page Link</a>
        </li>
      </ul>
    </template>
    <template #content>
      <h2>This is a Support page</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
        Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
        distinctio atque explicabo voluptatum nemo.
      </p>
    </template>
  </uw-support-tools>
</template>

<script>
import SupportTools from '../_layouts/support-tools/index.vue';

export default {
  name: 'Support',
  components: {
    'uw-support-tools': SupportTools,
  },
};
</script>
