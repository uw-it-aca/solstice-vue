<template>
  <div
    :class="topbarClass + [!isPreview ? ' min-vh-100' : ' ']"
    class="d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"
  >
    <div v-if="$slots.system" class="w-100">
      <slot name="system">System messages</slot>
    </div>

    <header class="w-100">
      <div
        v-if="$slots.profile"
        class="bg-black bg-opacity-10 text-white py-2 small"
      >
        <div class="container-xl">
          <slot name="profile">Welcome!</slot>
        </div>
      </div>

      <div class="axdd-topbar-brand">
        <div class="container-xl axdd-topbar-logo">
          <a
            v-if="$slots.navigation"
            class="btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2"
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
            <a
              :href="appRootUrl"
              class="ff-encode-sans text-white text-decoration-none"
            >
              {{ appName }}
            </a>
          </div>
        </div>
      </div>
    </header>

    <div :class="backgroundClass" class="w-100 flex-fill text-body">
      <div class="container-xl">
        <div class="row">
          <div
            v-if="$slots.navigation"
            :style="mq.xlPlus ? 'min-width: 272px; max-width: 272px' : ''"
          >
            <div
              id="topbar-nav-collapse"
              :class="[!mq.xlPlus ? 'collapse' : 'collapse.show']"
            >
              <!-- main topbar navigation -->
              <nav v-if="$slots['navigation']" role="navigation">
                <slot name="navigation"></slot>
              </nav>
              <!-- show aside here if side navigation is present -->
              <aside v-if="$slots['navigation'] && $slots['aside']">
                <slot name="aside">Aside content</slot>
              </aside>
            </div>
          </div>
          <!-- toggle main width based on side nav presence -->
          <main :class="$slots.navigation ? 'col' : 'col col-xl-9'">
            <!-- message bar -->
            <div v-if="$slots.bar">
              <slot name="bar"></slot>
            </div>

            <slot name="main">
              <div style="outline: dashed 1px lightgray">
                <!-- main content -->
                <h1>Hello world...</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                  soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus
                  eligendi natus voluptatum iusto reiciendis deserunt tempora
                  praesentium laboriosam ullam facilis velit culpa.
                </p>
              </div>
            </slot>
          </main>
          <!-- hide aside if side navigation is present -->
          <aside
            v-if="!$slots['navigation'] && $slots['aside']"
            class="col-xl-3"
          >
            <slot name="aside">Aside content</slot>
          </aside>
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
                  <a
                    href="http://www.washington.edu/online/privacy/"
                    class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                    >Privacy</a
                  >
                </li>
                <li class="list-inline-item">
                  <a
                    href="http://www.washington.edu/online/terms/"
                    class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
                    >Terms</a
                  >
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
    topbarClass: {
      type: String,
      default: "bg-spirit-purple",
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
    backgroundClass: {
      type: String,
      default: "bg-body",
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
