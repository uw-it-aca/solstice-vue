<template>
  <ul
    v-if="variant == 'underline'"
    class="nav nav-underline border-bottom"
    :id="tabsId"
    role="tablist"
  >
    <slot></slot>
  </ul>
  <ul
    v-else-if="variant == 'pills'"
    class="bg-body-tertiary gap-1 rounded-3 p-1 nav nav-pills"
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
  color: gray;

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
    box-shadow: none;
  }
}

.nav-pills .nav-link {
  padding: 0.25rem 0.5rem;

  &.active {
    background: white;
    color: black;
  }
}

.nav-underline .nav-link {
  border-width: 4px;

  &:hover {
    border-color: gray;
  }

  &.active {
    font-weight: normal;
    color: black;
    border-color: #4b2e83;
  }
}
</style>
