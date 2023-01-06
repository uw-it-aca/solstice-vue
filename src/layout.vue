<template>
  <axdd-sidebar
    :app-name="'Solstice'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    :variant="'light'"
    :sidebar-class="'bg-purple'"
  >
    <template #profile><div class="text-light">Latest: v.1.1.0</div></template>
    <template #logo>
      <i class="bi bi-cup-hot-fill text-white"></i>
    </template>
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <ReleaseNotes />
    </template>
    <template #bar>
      <div class="mb-3">
        <axdd-color-mode></axdd-color-mode>
      </div>

      <div
        class="alert alert-warning alert-dismissible mb-5 fade show border-0 border-warning border-start border-5 rounded-0"
        role="alert"
      >
        <p>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fuga, voluptatem ad corrupti nobis eveniet tempore nam magni
          consequuntur iste unde corporis! Eum molestias nulla perspiciatis
          impedit alias hic veritatis.
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </template>
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
