<template>
  <ul
    v-if="variant == 'lines'"
    class="nav nav-lines border-bottom"
    :id="tabsId"
    role="tablist"
  >
    <slot name="items"></slot>
  </ul>
  <ul
    v-else-if="variant == 'pills'"
    class="bg-light gap-1 rounded-3 p-1"
    :class="'nav nav-' + variant"
    :id="tabsId"
    role="tablist"
  >
    <slot name="items"></slot>
  </ul>
</template>

<script>
export default {
  name: "TabsList",
  props: {
    variant: {
      type: String,
      required: false,
      default: "lines",
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
// creates a custom bootstrap tab style

.nav-lines {
  border-width: 1px;

  .nav-lines-link {
    background: none;
    border: none;
    color: gray;
    margin-bottom: 0;

    &:hover {
      border-color: #f8f9fa !important;
      color: #4d307f !important;
    }

    &.active {
      border-color: #452a78 !important;
      color: #452a78 !important;
    }
  }
}

.nav-pills {
  .nav-pills-link {
    color: gray;
    background: none;
    border: none;
    margin-bottom: 0;

    &:hover {
      color: #452a78 !important;
    }

    &.active {
      background-color: #fff !important;
      color: #452a78 !important;
    }
  }
}
</style>
