<template>
  <template v-if="variant == 'icon'">
    <a
      :href="href"
      :class="color"
      class="link-underline link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover"
    >
      <slot name="icon">
        <i class="bi me-1" :class="icon"></i>
      </slot>
      <slot></slot>
    </a>
  </template>
  <template v-else-if="variant == 'quiet'">
    <a
      :href="href"
      :class="color"
      class="link-offset-1 link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
    >
      <slot></slot>
    </a>
  </template>
  <template v-else>
    <a :href="href" :class="color" class="link-offset-1">
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
    color: {
      type: String,
      required: false,
      default: "",
    },
  },
  data: function () {
    return {};
  },
};
</script>
