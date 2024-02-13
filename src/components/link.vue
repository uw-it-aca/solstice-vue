<template>
  <router-link v-if="variant == 'default'" :to="href" :class="color">
    <slot></slot>
  </router-link>
  <router-link
    v-if="variant == 'quiet'"
    :to="href"
    :class="color"
    class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
  >
    <slot></slot>
  </router-link>
  <router-link
    v-if="variant == 'icon'"
    :to="href"
    :class="color"
    class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
  >
    <i v-show="icon" :class="'bi ' + icon" class="me-1"></i><slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "sol-link",
  props: {
    variant: {
      type: String,
      required: true,
      default: "default",
    },
    href: {
      type: String,
      required: true,
      default: "/",
    },
    color: {
      type: String,
      required: true,
      default: "link-primary",
    },
    icon: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {};
  },
};
</script>
