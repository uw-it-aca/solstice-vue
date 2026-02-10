<template>
  <template v-if="system === 'doc'">
    <h1 v-if="level === '1'" class="display-5 fw-bold ff-encode-sans" v-bind="$attrs">Heading 1 - 48</h1>
    <h2 v-if="level === '2'" class="display-6 fw-light ff-encode-sans" v-bind="$attrs">Heading 2 - 40</h2>
    <h3 v-if="level === '3'" class="fw-medium ff-encode-sans" v-bind="$attrs">Heading 3 - 28</h3>
    <h4 v-if="level === '4'" class="fw-bold ff-open-sans" v-bind="$attrs">Heading 4 - 24</h4>
    <h5 v-if="level === '5'" class="fw-bold ff-open-sans" v-bind="$attrs">Heading 5 - 20</h5>
    <h6 v-if="level === '6'" class="fw-bold ff-open-sans" v-bind="$attrs">Heading 6 - 16</h6>
  </template>

  <template v-else>
    <h1 v-if="level === '1'" class="fs-2 fw-bold ff-encode-sans" v-bind="$attrs">Heading 1 - 32</h1>
    <h2 v-if="level === '2'" class="fs-3 fw-light ff-encode-sans"" v-bind="$attrs">Heading 2 - 28</h2>
    <h3 v-if="level === '3'" class="fs-4 fw-medium ff-encode-sans" v-bind="$attrs">Heading 3 - 24</h3>
    <h4 v-if="level === '4'" class="fs-5 fw-bold ff-open-sans" v-bind="$attrs">Heading 4 - 20</h4>
    <h5 v-if="level === '5'" class="fs-6 fw-bold ff-open-sans" v-bind="$attrs">Heading 5 - 16</h5>
  </template>
</template>

<script>
  export default {
    props: {
      level: {
        type: String,
        default: "standard",
        required: true,
      },
      system: {
        type: String,
        default: "doc",
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>

<style scoped></style>
