<template>
  <div class="card rounded-3 mb-4 shadow-sm">
    <div
      v-if="$slots['heading']"
      class="card-header rounded-top border-0 bg-transparent p-3"
    >
      <slot name="heading"></slot>
    </div>
    <div
      v-if="$slots['heading-action']"
      class="card-header rounded-top d-flex align-items-center justify-content-between border-0 bg-transparent p-3"
    >
      <slot name="heading-action"></slot>
    </div>
    <div v-if="$slots['body']" class="card-body">
      <slot name="body"></slot>
    </div>

    <div
      v-if="$slots['footer']"
      class="card-footer bg-opacity-10 rounded-bottom border-0 bg-black"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "axdd-card",
    data() {
      return {};
    },
  };
</script>
