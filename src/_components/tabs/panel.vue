<template>
  <div
    class="tab-pane fade"
    :class="{ 'show active': activePanel }"
    :id="panelId"
    role="tabpanel"
    :aria-labelledby="panelId + '-tab'"
    tabindex="0"
    @keydown.shift.tab.prevent="setFocus"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "axdd-tabs-panel",
  props: {
    panelId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
    activePanel: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    setFocus() {
      // shift-tab will focus current tab selected
      document.getElementById(this.panelId + "-tab").focus();
    },
  },
};
</script>
