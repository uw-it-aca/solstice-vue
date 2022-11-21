<template>
  <axdd-sidebar
    :app-name="'Components'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    :variant="'light'"
    class="bg-light"
  >
    <template #profile>Latest: v.1.0.7</template>
    <template #logo>
      <i class="bi bi-c-square-fill text-purple"></i>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <ReleaseNotes />
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
import ReleaseNotes from "./components/ReleaseNotes.vue";

export default {
  name: "App",
  components: {
    NavMenu,
    ReleaseNotes,
  },
};
</script>
