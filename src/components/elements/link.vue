<template>
  <template v-if="variant == 'icon' && isExternal">
    <a
      :href="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"
    >
      <slot name="icon">
        <i class="bi me-1" :class="icon"></i>
      </slot>
      <slot></slot>
    </a>
  </template>
  <template v-else-if="variant == 'quiet' && isExternal">
    <a
      :href="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"
    >
      <slot></slot>
    </a>
  </template>
  <template v-else-if="isExternal">
    <a
      :href="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-50-hover"
    >
      <slot></slot>
    </a>
  </template>
  <template v-else-if="variant == 'icon'">
    <router-link
      :to="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"
    >
      <slot name="icon">
        <i class="bi me-1" :class="icon"></i>
      </slot>
      <slot></slot>
    </router-link>
  </template>
  <template v-else-if="variant == 'quiet'">
    <router-link
      :to="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-0 link-underline-opacity-50-hover"
    >
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <router-link
      :to="href"
      :class="[color ? color : 'link-underline']"
      class="link-offset-1 link-underline-opacity-50-hover"
    >
      <slot></slot>
    </router-link>
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
    isExternal: {
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
