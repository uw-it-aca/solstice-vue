<template>
  <div class="mb-5">

    <p v-if="$slots['preview']" class="h6 text-secondary">Preview</p>
    <div
      v-if="$slots['preview']"
      class="bg-light rounded p-4 mb-3 axdd-font-open-sans"
    >
      <slot name="preview"></slot>
    </div>

    <p v-if="$slots['markup']" class="h6 text-secondary">Markup</p>
    <div v-if="$slots['markup']" class="p-0 small mb-3">
      <slot name="markup"></slot>
    </div>

    <p v-if="$slots['script']" class="h6 text-secondary">Script</p>
    <div v-if="$slots['script']" class="p-0 small mb-3">
      <slot name="script"></slot>
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
