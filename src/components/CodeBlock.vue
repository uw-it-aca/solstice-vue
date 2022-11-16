<template>
  <div class="mb-3">
    <div v-if="$slots['preview']">
      <div class="preview mb-3 axdd-font-open-sans">
        <slot name="preview"></slot>
      </div>
    </div>

    <div v-if="$slots['markup']">
      <div class="p-0 small mb-3">
        <slot name="markup"></slot>
      </div>
    </div>

    <div v-if="$slots['script']">
      <div class="p-0 small mb-3">
        <slot name="script"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-scss";
import "prismjs/themes/prism-tomorrow.css";

export default {
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss">
// global styleguide

.preview {
  // reset container padding for render display
  .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  // reset vh-100 to something more manageable for display
  .vh-100 {
    min-height: 30vh !important;
    max-height: 40vh !important;
  }
}
</style>
