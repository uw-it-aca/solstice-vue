<template>
  <div class="card shadow-sm rounded-3 mb-4">
    <div
      v-if="$slots['heading']"
      class="card-header bg-transparent border-0 rounded-top p-3"
    >
      <slot name="heading"></slot>
    </div>
    <div
      v-if="$slots['heading-action']"
      class="card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"
    >
      <slot name="heading-action"></slot>
    </div>
    <div v-if="$slots['body']" class="card-body">
      <slot name="body"></slot>
    </div>

    <div
      v-if="$slots['footer']"
      class="card-footer bg-opaque border-0 rounded-bottom"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "axdd-card",
  data: function () {
    return {};
  },
};
</script>
