<template>
  <div class="card border border-gray rounded-3 mb-4">
    <div
      v-if="$slots['heading']"
      class="card-header border-0 bg-white rounded-top pt-3 pb-0"
    >
      <slot name="heading"></slot>
    </div>
    <div
      v-if="$slots['heading-action']"
      class="card-header border-0 bg-white rounded-top pt-3 pb-0 d-flex justify-content-between"
    >
      <slot name="heading-action"></slot>
    </div>

    <div
      v-if="$slots['heading-tabs']"
      class="card-header bg-white border-bottom border-gray rounded-top pt-3 pb-0 d-flex justify-content-between"
    >
      <slot name="heading-tabs"></slot>
    </div>

    <div v-if="$slots['body']" class="card-body">
      <slot name="body"></slot>
    </div>

    <div
      v-if="$slots['footer']"
      class="card-footer bg-white border-top border-gray rounded-bottom small"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
  data: function () {
    return {};
  },
};
</script>
