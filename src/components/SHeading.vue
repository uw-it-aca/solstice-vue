<template>

    <h1
      v-if="level === '1'"
      class="fs-2 fw-bold ff-encode-sans"
      v-bind="$attrs"
    >
      <slot />
    </h1>
    <h2
      v-if="level === '2'"
      class="fs-3 fw-regular ff-open-sans"
      v-bind="$attrs"
    >
      <slot />
    </h2>
    <h3
      v-if="level === '3'"
      class="fs-4 fw-semibold ff-open-sans"
      v-bind="$attrs"
    >
      <slot />
    </h3>
    <h4 v-if="level === '4'" class="fs-5 fw-bold ff-open-sans" v-bind="$attrs">
      <slot />
    </h4>
    <h5 v-if="level === '5'" class="fs-6 fw-bold ff-open-sans" v-bind="$attrs">
      <slot />
    </h5>

</template>

<script>
  export default {
    props: {
      level: {
        type: String,
        required: true,
      },
      system: {
        type: String,
        default: "doc",
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
