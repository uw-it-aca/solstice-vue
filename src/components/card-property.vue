/* stylelint-disable media-feature-range-notation */
<template>
  <div class="d-md-flex mb-3 myuw-text-md">
    <div class="flex-md-fill me-3 bd-highlight font-weight-bold property-label">
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
  data: function () {
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
