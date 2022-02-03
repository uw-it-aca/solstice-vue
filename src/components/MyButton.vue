<template>
  <div>
    <button type="button" class="btn btn-success">
      <slot></slot>
    </button>

    <button class="d-block btn btn-primary button is-primary" @click="onClick">
      <!-- @slot default inner button content -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit("click");
    },
  },
};
</script>
