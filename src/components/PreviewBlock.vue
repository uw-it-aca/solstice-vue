<template>
  <div class="p-0 bg-white mb-3">
    <slot></slot>
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
