<template>
  <div class="rounded-3 p-3 mb-2">
    <div class="d-flex">
      <div class="w-25">
        <button
          class="chevron btn text-reset py-1 ps-0 collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + itemId + '-panel'"
          aria-expanded="false"
          :aria-controls="itemId + '-panel'"
        >
          <i class="bi bi-chevron-right me-2" aria-hidden="true"></i>
          <span class="fw-bold" :id="itemId + '-heading'">{{ itemTitle }}</span>
        </button>
      </div>
      <div class="flex-fill">
        <slot name="header"></slot>
      </div>
    </div>
    <div
      :id="itemId + '-panel'"
      class="collapse"
      :aria-labelledby="itemId + '-heading'"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordianItem",
  props: {
    itemId: {
      type: [String, Number],
      required: true,
    },
    itemTitle: {
      type: String,
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
