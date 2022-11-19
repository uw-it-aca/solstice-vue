<template>
  <axdd-sidebar
    :app-name="'Components'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    :variant="'light'"
    class="bg-light-beige"
  >
    <template #profile>Latest: v.1.0.7</template>
    <template #logo>
      <i class="bi bi-grid-fill text-purple"></i>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <div class="bg-opaque rounded-3 small p-3">
        <h6>RELEASE NOTES</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
          facilis temporibus corporis, doloribus, nostrum et aspernatur eaque
          ullam a dolore quaerat maiores non ea consequuntur nulla ratione at
          placeat maxime!
        </p>
        <p>
          <a
            href="https://github.com/uw-it-aca/axdd-components/releases"
            class="text-reset"
            >View GitHub Release notes</a
          >
        </p>
      </div>
    </template>
    <template #main>
      <div class="m-5">
        <slot name="content" />
        <div
          v-if="$slots['author']"
          class="small text-muted border-top pt-3 mt-5"
        >
          <div>
            Last modified <slot name="modified" /> by <slot name="author" />
          </div>
        </div>
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
