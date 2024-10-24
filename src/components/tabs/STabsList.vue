<template>
  <ul
    v-if="variant == 'underline'"
    class="text-body nav nav-underline border-bottom"
    :id="tabsId"
    role="tablist"
  >
    <slot></slot>
  </ul>
  <ul
    v-else-if="variant == 'pills'"
    class="bg-body-tertiary text-body gap-1 rounded-3 p-1 nav nav-pills"
    :id="tabsId"
    role="tablist"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: "underline",
    },
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss">
// override bootstrap defaults
.nav-link {
  // color: gray !important;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px !important;
    box-shadow: none !important;
  }
}

.nav-pills .nav-link {
  padding: 0.25rem 0.5rem !important;

  &.active {
    // background: #2f68cb !important; // use action blue
    // color: black !important;
  }
}

.nav-underline .nav-link {
  border-width: 4px !important;

  &:hover {
    // border-color: gray !important;
  }

  &.active {
    font-weight: normal !important;
    // border-color: #2f68cb !important;
  }
}
</style>
