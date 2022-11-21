<template>
  <axdd-sidebar
    :app-name="'Solstice'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    :variant="'light'"
    class="bg-light"
  >
    <template #profile>Latest: v.1.1.0</template>
    <template #logo>
      <i class="bi bi-cup-fill text-purple"></i>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <ReleaseNotes />
    </template>
    <template #bar></template>
    <template #main>
      <slot name="content" />
    </template>
    <template #footer>
      <div class="d-flex justify-content-between">
        <div class="font-weight-light py-3 small">
          <ul class="list-inline m-0">
            <ul class="list-inline m-0">
              <li class="list-inline-item">
                <a href="http://www.washington.edu/online/privacy/">Privacy</a>
              </li>
              <li class="list-inline-item">
                <a href="http://www.washington.edu/online/terms/">Terms</a>
              </li>
            </ul>
          </ul>
          <div>
            Copyright &copy; {{ new Date().getFullYear() }} University of
            Washington
          </div>
        </div>
        <div
          v-if="$slots['author']"
          class="py-3 small d-flex align-content-end flex-wrap"
        >
          <div class="text-muted">
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
