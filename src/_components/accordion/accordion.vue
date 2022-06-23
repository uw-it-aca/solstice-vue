<template>
  <div :id="accordianId">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AccordianComp",
  props: {
    accordianId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
  },
};
</script>
