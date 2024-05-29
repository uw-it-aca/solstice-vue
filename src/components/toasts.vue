<template>
  <div class="toast-container bottom-0 start-50 translate-middle-x p-3">
    <div
      v-if="variant == 'success'"
      class="toast align-items-center text-bg-success border-0 show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">
          <i class="bi bi-check-circle-fill me-1"></i>
          <slot></slot>
        </div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div
      v-if="variant == 'neutral'"
      class="toast align-items-center text-bg-secondary border-0 show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">
          <slot></slot>
        </div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sol-toast",
  props: {
    variant: {
      type: String,
      default: "neutral",
      required: true,
    },
  },
};
</script>
