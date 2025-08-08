<template>
  <div class="d-flex">
    <div id="sidebar" class="fixed-top fixed-bottom" style="width: 250px">
      <div class="vh-100 bg-body-tertiary p-3">
        <header class="d-flex justify-content-between align-items-center">
          <div class="h4 flex-fill">
            <i class="bi bi-box-fill me-2 text-brand"></i>
            <a href="/" class="text-reset text-decoration-none">{{
              appName
            }}</a>
          </div>
          <div><SColorMode :color-class="'text-deco-violet'"></SColorMode></div>
        </header>
        <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/link">Link</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
    <div style="margin-left: 250px">
      <div class="container-xl">
        <div class="px-3">
          <main>
            <h1 class="">
              <slot name="title">
                {{ pageTitle }}
              </slot>
            </h1>

            <slot name="description" />
            <hr class="mb-5 w-25 d-inline-block" />
            <slot name="content" />
          </main>

          <footer class="pt-2 mt-5 mb-3 text-muted border-top">
            Copyright &copy; {{ new Date().getFullYear() }} University of
            Washington
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SColorMode from "@/components/SColorMode.vue";

export default {
  name: "SolsticeVue",
  components: { SColorMode },
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // minimum application setup overrides
      appName: "Solstice Vue",
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
