<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // MARK: single word component names need to have a double word specification
  // example 'action.vue' --> name: CardAction
  name: "CardTabs",
  data: function () {
    return {};
  },
};
</script>
