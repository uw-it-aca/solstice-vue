<template>
  <div>

    <b-button variant="success">
      <slot></slot>
    </b-button>

    <button class="d-block btn btn-primary button is-primary" @click="onClick">
      <!-- @slot default inner button content -->
      <slot></slot>
    </button>    
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  name: "my-button",
  components: { BButton },
  methods: {
    onClick() {
      /**
       * Click event
       *
       * @event click
       */
      this.$emit("click");
    }
  }
};
</script>
