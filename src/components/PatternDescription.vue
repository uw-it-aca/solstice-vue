<template>
  <div
    class="d-flex flex-column flex-fill alert border-0 p-4"
    style="min-height: 230px"
  >
    <h2>{{ name }}</h2>
    <div class="flex-fill">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
        itaque quod amet.
      </slot>
    </div>
    <div class="text-end">
      <a v-if="link" :href="link">View {{ name }}</a>
      <span v-else class="text-muted">Coming soon!</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Comp name",
      required: true,
    },
    link: {
      type: String,
    },
  },
  data: function () {
    return {};
  },
};
</script>
