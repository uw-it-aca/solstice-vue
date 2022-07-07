<template>
  <ul class="nav nav-lines" :id="tabsId" role="tablist">
    <slot name="items">
      <!-- axdd-tab-button and uw-tab-dropdown components with panelId-->
    </slot>
  </ul>
</template>

<script>
export default {
  name: "TabsList",
  props: {
    tabsId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>
