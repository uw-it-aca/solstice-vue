<template>
  <div class="card border-light-gray shadow-sm rounded-3 mb-4">
    <div class="card-header border-0 bg-white p-4 pb-0">
      <h2
        class="h5 m-0 text-uppercase fw-bold text-uppercase axdd-font-encode-sans text-dark-beige"
      >
        <slot name="header"></slot>
      </h2>
    </div>
    <div class="card-body p-4">
      <slot name="body"></slot>
    </div>
    <div class="card-footer bg-white px-4 py-3">
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
