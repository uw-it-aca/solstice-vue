<template>
  <div class="d-flex mt-4 align-items-center">
    <div class="small me-2">color mode:</div>
    <div>
      <select v-model="colorMode" class="form-select form-select-sm">
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>
<script>
import { useColorMode } from "@vueuse/core";

export default {
  name: "axdd-color-mode",

  // composition in options api requires setup()
  setup() {
    const colorMode = useColorMode({
      emitAuto: true,
      attribute: "data-bs-theme",
    });

    return { colorMode };
  },
};
</script>
