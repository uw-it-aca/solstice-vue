<template>
  <div class="tabs">
    <ul
      class="nav nav-lines mb-4 border-light-gray border-bottom"
      :id="tabsId"
      role="tablist"
    >
      <slot name="items">
        <!-- axdd-tab-button and uw-tab-dropdown components with panelId-->
      </slot>
    </ul>
    <div class="tab-content" :id="tabsId + 'Content'">
      <slot name="panels">
        <!-- axdd-tab-panel components with panelId matching tabs-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComp",
  props: {
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
</style>
