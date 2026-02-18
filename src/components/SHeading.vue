<template>
  <template v-if="system === 'doc'">
    <h1
      v-if="level === '1'"
      class="display-5 fw-semibold ff-encode-sans my-5"
      v-bind="$attrs"
    >
      <slot />
    </h1>
    <h2
      v-if="level === '2'"
      class="display-6 fw-light ff-encode-sans my-4"
      v-bind="$attrs"
    >
      <slot />
    </h2>
    <h3 v-if="level === '3'" class="fw-medium ff-encode-sans my-3" v-bind="$attrs">
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

  <template v-else>
    <h1
      v-if="level === '1'"
      class="display-6 fw-semibold ff-encode-sans"
      v-bind="$attrs"
    >
      <slot />
    </h1>
    <h2
      v-if="level === '2'"
      class="fs-3 fw-light ff-encode-sans"
      v-bind="$attrs"
    >
      <slot />
    </h2>
    <h3
      v-if="level === '3'"
      class="fs-4 fw-medium ff-encode-sans"
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
