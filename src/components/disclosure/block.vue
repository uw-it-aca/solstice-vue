<template>
  <div class="rounded-3 p-3 mb-2">
    <div class="d-flex">
      <div class="me-3" style="width: 330px">
        <a
          href="#"
          class="chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + blockId + '-panel'"
          aria-expanded="false"
          :aria-controls="blockId + '-panel'"
        >
          <i class="bi bi-chevron-right mx-2" aria-hidden="true"></i>
          <span class="fw-bold" :id="blockId + '-heading'">
            {{ blockTitle }}
          </span>
        </a>
      </div>
      <div class="flex-fill">
        <slot name="header"></slot>
      </div>
    </div>
    <div
      :id="blockId + '-panel'"
      class="collapse"
      :aria-labelledby="blockId + '-heading'"
    >
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "axdd-disclosure-block",
  props: {
    blockId: {
      type: [String, Number],
      required: true,
    },
    blockTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.chevron i {
  display: inline-block;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
  font-weight: bolder;
}

.chevron[aria-expanded="true"] i {
  transform: rotate(90deg);
}

.bi-chevron-right::before {
  font-weight: bolder !important;
}
</style>
