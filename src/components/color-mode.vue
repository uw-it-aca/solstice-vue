<template>
  <div>
    <p>color mode: {{ colorMode }}</p>
    <select v-model="colorMode" class="form-select">
      <option value="auto">Auto</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
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
