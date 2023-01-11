<template>
  <!-- docs.vue: this is the layout for documentation app -->
  <div>
    <header
      class="d-flex align-items-center h4 border-bottom bg-purple text-white p-3"
    ></header>

    <main class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="'/topbar'">Topbar</router-link>
          </li>
          <li>
            <router-link :to="'/sidebar'">Sidebar</router-link>
          </li>
        </ul>
      </nav>
      <slot name="content" />
    </main>

    <footer class="border-top bg-purple text-white p-3">
      <div class="container">Copyright University of Washington</div>
    </footer>
  </div>
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
