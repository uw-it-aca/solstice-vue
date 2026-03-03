<template>
  <div class="mb-3">
    <div class="d-flex align-items-center">
      <h4 class="h6 text-dark font-weight-bold flex-fill m-0">
        <slot name="status-label" />
      </h4>
      <div class="flex-fill text-end">
        <span class="h4 font-weight-bold">
          <slot name="status-value" />
        </span>
      </div>
    </div>
    <div>
      <slot name="status-content" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "axdd-card-status",
    data() {
      return {};
    },
  };
</script>
