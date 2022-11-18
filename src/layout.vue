<template>
  <axdd-sidebar
    :app-name="'Components'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    class="bg-teal"
  >
    <template #profile>Latest: v.1.0.7</template>
    <template #logo>
      <i class="bi bi-box-fill"></i>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <div class="bg-opaque rounded-3 small p-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, facilis
        temporibus corporis, doloribus, nostrum et aspernatur eaque ullam a
        dolore quaerat maiores non ea consequuntur nulla ratione at placeat
        maxime!
      </div>
    </template>
    <template #main>
      <div class="m-5">
        <slot name="content" />
      </div>
    </template>
  </axdd-sidebar>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>
