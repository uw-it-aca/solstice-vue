<template>
  <div
    :class="[!isPreview ? 'min-vh-100' : ' ']"
    class="d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"
  >
    <header class="w-100">
      <div v-if="$slots.profile" class="bg-dark-purple text-white py-2 small">
        <div class="container-xl">
          <slot name="profile">Welcome!</slot>
        </div>
      </div>

      <div class="bg-purple axdd-topbar-brand">
        <div class="container-xl axdd-topbar-logo">
          <a
            v-if="$slots.navigation"
            class="btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2"
            data-bs-toggle="collapse"
            data-bs-target="#topbar-nav-collapse"
            role="button"
            aria-expanded="false"
            aria-controls="topbar-nav-collapse"
            aria-label="Toggle Navigation Menu"
          >
            <i class="bi bi-list fw-bold text-white fs-6"></i>
          </a>
          <div
            class="d-inline align-middle text-white"
            :class="[mq.xlPlus ? 'h2' : 'h3']"
          >
            <router-link
              :to="appRootUrl"
              class="axdd-font-encode-sans text-white text-decoration-none"
            >
              {{ appName }}
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <div class="w-100 flex-fill bg-white">
      <div class="container-xl">
        <div class="row">
          <div
            class=""
            v-if="$slots.navigation || $slots.aside"
            :style="mq.xlPlus ? 'min-width: 272px; max-width: 272px' : ''"
          >
            <div
              id="topbar-nav-collapse"
              :class="[!mq.xlPlus ? 'collapse' : 'collapse.show']"
            >
              <!-- main topbar navigation -->
              <nav role="navigation">
                <slot name="navigation"></slot>
              </nav>
              <aside v-if="$slots['aside']">
                <slot name="aside">this is aside content</slot>
              </aside>
            </div>
          </div>

          <div class="col">
            <div v-if="$slots.bar" class="my-3">
              <slot name="bar"></slot>
            </div>
            <main>
              <slot name="main">
                <div style="outline: dashed 1px lightgray">
                  <!-- main content -->
                  <h1>Hello world...</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla,
                    ducimus eligendi natus voluptatum iusto reiciendis deserunt
                    tempora praesentium laboriosam ullam facilis velit culpa.
                  </p>
                </div>
              </slot>
            </main>
          </div>
        </div>
      </div>
    </div>
    <footer class="w-100">
      <div v-if="$slots.footer" class="bg-dark text-white py-2 small">
        <div class="container-xl">
          <slot name="footer">
            <div class="text-white font-weight-light py-3">
              <ul class="list-inline m-0">
                <li class="list-inline-item">
                  <a href="http://www.washington.edu/online/privacy/"
                    >Privacy</a
                  >
                </li>
                <li class="list-inline-item">
                  <a href="http://www.washington.edu/online/terms/">Terms</a>
                </li>
              </ul>
              <div>
                Copyright &copy; {{ new Date().getFullYear() }} University of
                Washington
              </div>
            </div>
          </slot>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "axdd-topbar",
  inject: ["mq"],
  props: {
    appName: {
      type: String,
      default: "appName",
    },
    appRootUrl: {
      type: String,
      default: "#",
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    // document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>

<style lang="scss">
.axdd-topbar {
  min-width: 320px;
}

.axdd-topbar-brand {
  line-height: 75px;
}

.axdd-topbar-logo {
  background-image: url("../../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
}
</style>
