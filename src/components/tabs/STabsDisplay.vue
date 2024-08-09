<template>
  <div class="tab-content" :id="tabsId + 'Content'">
    <slot name="panels">
      <!-- axdd-tab-panel components with panelId matching tabs-->
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>
