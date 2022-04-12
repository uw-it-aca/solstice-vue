<template>
  <div class="card border-light-gray shadow-sm rounded-3 mb-4">
    <div v-if="$slots['header']" class="card-header border-0 bg-white p-4 pb-0">
      <slot name="header"></slot>
    </div>

    <div class="card-body p-4">
      <slot></slot>
    </div>

    <div v-if="$slots['footer']" class="card-footer bg-white px-4 py-3">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
