<template>
  <div class="d-flex align-items-center">
    <div>
      <button
        class="btn btn-link text-reset dropdown-toggle p-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        aria-label="Choose color mode"
      >
        <i v-show="colorMode == 'light'" class="bi bi-brightness-high-fill"></i>
        <i v-show="colorMode == 'dark'" class="bi bi-moon-stars-fill"></i>
        <i v-show="colorMode == 'auto'" class="bi bi-circle-half"></i>
      </button>
      <ul class="dropdown-menu p-1">
        <li class="mb-1">
          <a
            class="dropdown-item rounded"
            :class="colorMode == 'light' ? 'active' : ''"
            href="#"
            role="button"
            @click="colorMode = 'light'"
            ><i class="bi bi-brightness-high-fill"></i> Light</a
          >
        </li>
        <li class="mb-1">
          <a
            class="dropdown-item rounded"
            :class="colorMode == 'dark' ? 'active' : ''"
            href="#"
            role="button"
            @click="colorMode = 'dark'"
            ><i class="bi bi-moon-stars-fill"></i> Dark</a
          >
        </li>
        <li>
          <a
            class="dropdown-item rounded"
            :class="colorMode == 'auto' ? 'active' : ''"
            href="#"
            role="button"
            @click="colorMode = 'auto'"
            ><i class="bi bi-circle-half"></i> Auto</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useColorMode } from "@vueuse/core";

export default {
  // composition in options api requires setup()
  setup() {
    const colorMode = useColorMode({
      emitAuto: true,
      // bootstrap's dark theming attribute
      attribute: "data-bs-theme",
    });
    return { colorMode };
  },
};
</script>
