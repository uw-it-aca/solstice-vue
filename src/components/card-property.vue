/* stylelint-disable media-feature-range-notation */
<template>
  <div class="d-md-flex myuw-text-md mb-3">
    <div class="flex-md-fill bd-highlight font-weight-bold property-label me-3">
      {{ title }}
    </div>
    <div class="flex-md-fill">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "axdd-card-property",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  @media (width >= 768px) {
    .property-label {
      min-width: 25%;
      max-width: 25%;
    }
  }
</style>
