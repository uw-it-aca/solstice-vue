<template>
  <div
    v-if="variant == 'warning'"
    :class="isDismissible ? 'alert-dismissible' : ''"
    class="alert alert-warning small"
    role="alert"
  >
    <i v-show="hasIcon" class="bi-exclamation-triangle-fill me-1"></i>
    <slot></slot>
    <button
      v-show="hasCta"
      :href="ctaUrl"
      class="btn btn-sm btn-warning rounded-3 position-absolute top-50 end-0 translate-middle-y me-2"
    >
      {{ ctaLabel }}
    </button>
  </div>
  <div
    v-if="variant == 'info'"
    :class="isDismissible ? 'alert-dismissible' : ''"
    class="alert alert-info small"
    role="alert"
  >
    <i v-show="hasIcon" class="bi bi-exclamation-circle-fill me-1"></i>
    <slot></slot>

    <button
      v-if="isDismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
  <div
    v-if="variant == 'critical'"
    :class="isDismissible ? 'alert-dismissible' : ''"
    class="alert alert-danger small"
    role="alert"
  >
    <i v-show="hasIcon" class="bi bi-exclamation-octagon-fill me-1"></i>
    <slot></slot>
    <button
      v-show="hasCta"
      :href="ctaUrl"
      class="btn btn-sm btn-danger rounded-3 position-absolute top-50 end-0 translate-middle-y me-2"
    >
      {{ ctaLabel }}
    </button>
  </div>
</template>

<script>
export default {
  name: "sol-alert",
  props: {
    variant: {
      type: String,
      default: "info",
      required: true,
    },
    isDismissible: {
      type: Boolean,
      default: true,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: String,
      default: "",
    },
    hasCta: {
      type: Boolean,
      default: true,
    },
    ctaUrl: {
      type: String,
      default: "",
    },
    ctaLabel: {
      type: String,
      default: "",
    },
  },
};
</script>
