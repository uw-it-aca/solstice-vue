<template>
  <div>
    <p>user prefers dark: {{ userPrefersDark }}</p>
    <p>is dark: {{ isDark }}</p>
    <p>color mode: {{ colorMode }}</p>
    <select
      v-model="colorMode"
      class="bg-transparent mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      <option value="auto">Auto</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
<script>
import { useDark, usePreferredDark, useColorMode } from "@vueuse/core";

export default {
  // composition in options api requires setup()
  setup() {
    const userPrefersDark = usePreferredDark();
    const isDark = useDark();
    const colorMode = useColorMode({
      emitAuto: true,
    });

    return { userPrefersDark, isDark, colorMode };
  },
};
</script>
