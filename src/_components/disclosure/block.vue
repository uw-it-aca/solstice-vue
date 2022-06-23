<template>
  <div class="rounded-3 p-3">
    <div class="d-flex align-items-center">
      <a
        href="#"
        class="d-block chevron text-reset text-decoration-none"
        role="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + disclosureId"
        aria-expanded="false"
        :aria-controls="disclosureId"
      >
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
        <slot name="action"></slot>
      </a>
      <div class="flex-fill ms-3">
        <slot name="heading"></slot>
      </div>
    </div>
    <div class="collapse" :id="disclosureId">
      <slot name="content"></slot>
    </div>
  </div>
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

.bi::before {
  font-weight: bolder !important;
}
</style>
