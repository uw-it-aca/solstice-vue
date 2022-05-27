<template>
  <!-- MARK: https://vuejs.org/guide/essentials/component-basics.html#dynamic-components -->
  <component
    :is="`h${checkedLevel}`"
    class="h5 m-0 text-uppercase fw-bold text-uppercase axdd-font-encode-sans text-dark-beige"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "CardHeading",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  computed: {
    checkedLevel() {
      if (this.level > 0 && this.level < 7) {
        // ensure h1-h6 is handled
        return this.level;
      } else {
        // return h2 as a semantic fallback
        return 2;
      }
    },
  },
};
</script>
