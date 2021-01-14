<template>
  <b-card class="card rounded-0 shadow-sm mb-3 blah">
    <slot></slot>
  </b-card>
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

<style lang="scss" scoped></style>
