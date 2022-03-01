<template>
  <div>
    <div v-if="$slots['preview']" class="border rounded p-4 mb-3">
      <slot name="preview"></slot>
    </div>
    <div class="p-0 small">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-scss";
import "prismjs/themes/prism-tomorrow.css";

export default {
  mounted() {
    Prism.highlightAll();
  },
};
</script>
