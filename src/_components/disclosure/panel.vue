<template>
  <div class="collapse" :id="disclosureId">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "axdd-disclosure-panel",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>
