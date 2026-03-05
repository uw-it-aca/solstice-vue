<template>
  <h1 v-if="level === '1'" class="fw-bold ff-encode-sans" v-bind="$attrs">
    <slot />
  </h1>
  <h2 v-if="level === '2'" class="fw-normal ff-open-sans" v-bind="$attrs">
    <slot />
  </h2>
  <h3
    v-if="level === '3'"
    class="fw-semibold ff-open-sans"
    v-bind="$attrs"
  >
    <slot />
  </h3>
  <h4 v-if="level === '4'" class="fw-bold ff-open-sans" v-bind="$attrs">
    <slot />
  </h4>
  <h5 v-if="level === '5'" class="fw-bold ff-open-sans" v-bind="$attrs">
    <slot />
  </h5>
  <h6 v-if="level === '6'" class="fw-bold ff-open-sans" v-bind="$attrs">
    <slot />
  </h6>
</template>

<script>
  export default {
    props: {
      level: {
        type: String,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
