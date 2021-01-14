<template>
  <div>
    <p>hello</p>
    <slot></slot>
  </div>
</template>

<script>
import { BCard } from 'bootstrap-vue';

export default {
  components: { BCard },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
