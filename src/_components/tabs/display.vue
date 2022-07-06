<template>
  <div class="tab-content" :id="tabsId + 'Content'">
    <slot name="panels">
      <!-- axdd-tab-panel components with panelId matching tabs-->
    </slot>
  </div>
</template>

<script>
export default {
  name: "TabsDisplay",
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
