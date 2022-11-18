<template>
  <axdd-sidebar
    :app-name="'Components'"
    :user-name="'javerage'"
    :app-root-url="'/'"
    class="bg-teal"
  >
    <template #profile>v.1.0.6</template>
    <template #navigation>
      <ul class="nav flex-column mb-5">
        <li class="nav-item mb-1">
          <router-link
            class="nav-link rounded-3 me-1 bg-opaque-hover text-reset"
            active-class="bg-opaque text-black"
            to="/content/"
            >Content</router-link
          >
        </li>
        <li class="nav-item mb-1">
          <router-link
            class="nav-link rounded-3 me-1 bg-opaque-hover text-reset"
            active-class="bg-opaque text-black"
            to="/tokens/"
            >Design Tokens</router-link
          >
        </li>
        <li class="nav-item mb-1">
          <router-link
            class="nav-link rounded-3 me-1 bg-opaque-hover text-reset"
            active-class="bg-opaque text-black"
            to="/elements/"
            >Elements</router-link
          >
        </li>
        <li class="nav-item mb-1">
          <router-link
            class="nav-link rounded-3 bg-opaque-hover text-reset"
            active-class="bg-opaque text-black"
            to="/patterns/"
            >Patterns</router-link
          >
        </li>
        <li aria-hidden="true" class="nav-item mt-1 mb-2">
          <a
            href="#"
            class="nav-link disabled text-dark d-block p-0 internal-link"
            ><hr class="m-0 bg-gray" />
            <span class="visually-hidden">Navigation separator</span></a
          >
        </li>
      </ul>

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
