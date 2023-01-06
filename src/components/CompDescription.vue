<template>
  <div class="card rounded-3 border mb-3">
    <div class="card-body d-flex flex-column">
      <h2>{{ name }}</h2>
      <div class="flex-fill">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
          itaque quod amet.
        </slot>
      </div>
      <div class="text-end">
        <router-link v-if="link" :to="link">View {{ name }}</router-link>
        <span v-else class="text-muted">Coming soon!</span>
      </div>
      <div class="position-absolute top-0 end-0 m-2">
        <span v-if="accessibility" class="badge bg-beige me-1 text-dark"
          >a11y</span
        >
        <span v-if="version" class="badge bg-purple">
          {{ version }}
        </span>
      </div>
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
    version: {
      type: String,
    },
    link: {
      type: String,
    },
    accessibility: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>
