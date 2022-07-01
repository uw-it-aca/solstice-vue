<template>
  <div class="card mb-3" style="height: 230px">
    <div class="card-body d-flex flex-column">
      <h2>{{ name }}</h2>
      <div class="flex-fill">
        <slot>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore
          itaque quod amet.
        </slot>
      </div>
      <div>
        <router-link v-if="link" :to="link">View {{ name }}</router-link>
        <span v-else class="text-muted">Coming soon!</span>
      </div>
      <div class="position-absolute top-0 end-0 m-2">
        <span class="d-none badge rounded bg-success me-1">a11y</span>
        <span v-if="version" class="badge rounded bg-purple">
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
  },
  data: function () {
    return {};
  },
};
</script>
