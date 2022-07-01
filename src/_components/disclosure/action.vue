<template>
  <a
    v-if="isLink"
    data-bs-toggle="collapse"
    :href="'#' + disclosureId"
    role="button"
    aria-expanded="false"
    :aria-controls="disclosureId"
  >
    <slot></slot>
  </a>

  <button
    v-else
    class="btn btn-beige"
    :class="[hasIndicator ? 'chevron' : '']"
    type="button"
    data-bs-toggle="collapse"
    :data-bs-target="'#' + disclosureId"
    aria-expanded="false"
    :aria-controls="disclosureId"
  >
    <i
      v-if="hasIndicator"
      class="bi bi-chevron-right text-dark-beige"
      aria-hidden="true"
    ></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DisclosureAction",
  props: {
    disclosureId: {
      // must match tab panelId
      type: [String, Number],
      required: true,
    },
    isLink: {
      type: Boolean,
    },
    hasIndicator: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.chevron[aria-expanded="true"] i {
  transform: rotate(90deg);
}

.chevron i {
  display: inline-block;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
  font-weight: bolder;
}

.bi-chevron-right::before {
  font-weight: bolder !important;
}
</style>
