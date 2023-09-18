<template>
  <template v-if="variant == 'icon'">
    <a
      :href="href"
      class="link-primary link-underline link-offset-1 link-underline-opacity-0 link-underline-opacity-75-hover"
    >
      <slot name="icon">
        <i class="bi me-1" :class="icon"></i>
      </slot>
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <a
      :href="href"
      class="link-primary link-offset-1"
      :class="{
        'link-underline link-underline-opacity-0 link-underline-opacity-75-hover':
          quiet,
      }"
    >
      <slot></slot>
    </a>
  </template>
</template>

<script>
export default {
  name: "sol-link",
  props: {
    variant: {
      type: String,
      required: false,
      default: "default",
    },
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    quiet: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>
