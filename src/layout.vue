<template>
  <div class="d-flex">
    <div id="sidebar" class="fixed-top fixed-bottom" style="width: 250px">
      <div class="vh-100 bg-body-tertiary p-3">
        <header class="d-flex justify-content-between align-items-center">
          <div class="h4 flex-fill">
            <i class="bi bi-box-fill text-brand me-2"></i>
            <a href="/" class="text-reset text-decoration-none">{{
              appName
            }}</a>
          </div>
          <div><SColorMode /></div>
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
            <hr class="d-inline-block mb-5 w-25" />
            <slot name="content" />
          </main>

          <footer class="text-muted border-top mt-5 mb-3 pt-2">
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
