<template>
  <ul
    v-if="variant == 'lines'"
    class="nav nav-lines gap-1"
    :id="tabsId"
    role="tablist"
  >
    <slot name="items"></slot>
  </ul>
  <ul
    v-else-if="variant == 'pills'"
    class="gap-1 border rounded-3 p-1"
    :class="'nav nav-' + variant"
    :id="tabsId"
    role="tablist"
  >
    <slot name="items"></slot>
  </ul>
  <ul
    v-else
    class="gap-1"
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

  .nav-link {
    background: none;
    border: none;
    color: gray;
    margin-bottom: -1px;
  }

  .nav-link.active {
    border-color: #452a78 !important;
    color: #452a78 !important;
  }

  .nav-link:hover {
    border-color: #4d307f !important;
    color: #4d307f !important;
  }
}

.nav-pills {
  .nav-link {
    color: gray;
  }
  .nav-link.active {
    background-color: #452a78 !important;
    //color: #452a78 !important;
  }

  .nav-link:hover {
    background-color: #4d307f !important;
    color: #fff;
  }
}

.nav-tabs {
  margin-bottom: -1px !important;

  .nav-link {
    color: gray;
  }
  .nav-link.active {
    //background-color: #452a78 !important;
    color: #452a78 !important;
  }
}
</style>
