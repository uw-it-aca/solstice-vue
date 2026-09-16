<template>
  <h1 v-if="level === '1'" v-bind="$attrs">
    <slot />
  </h1>
  <h2 v-if="level === '2'" v-bind="$attrs">
    <slot />
  </h2>
  <h3 v-if="level === '3'" v-bind="$attrs">
    <slot />
  </h3>
  <h4 v-if="level === '4'" v-bind="$attrs">
    <slot />
  </h4>
  <h5 v-if="level === '5'" v-bind="$attrs">
    <slot />
  </h5>
  <h6 v-if="level === '6'" v-bind="$attrs">
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
