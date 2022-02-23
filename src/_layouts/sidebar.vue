<template>
  <div class="">
    <div
      :class="[$mq != 'mobile' ? 'fixed-top fixed-bottom' : '']"
      class="bg-purple axdd-sidebar axdd-sidebar-logo"
      :style="[$mq != 'mobile' ? 'width:250px;' : '']"
    >
      <header>
        <slot name="header">
          <div class="bg-dark-purple text-white py-2 px-3 small">
            <div class="d-flex">
              <div class="flex-fill">{{ userName }}</div>
              <div class="flex-fill text-end">
                <a :href="signOutUrl" class="text-white">Sign out</a>
              </div>
            </div>
          </div>
          <div class="bg-purple axdd-sidebar-brand px-3">
            <a
              v-if="$slots['navigation']"
              class="btn btn-link btn-sm d-md-none border border-2 py-0 px-1 text-white me-2"
              data-bs-toggle="collapse"
              data-bs-target="#nav-collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              aria-label="Toggle Navigation Menu"
            >
              <i class="bi bi-list fw-bold text-white fs-6"></i>
            </a>
            <div
              class="d-inline align-middle text-white"
              :class="[$mq == 'desktop' ? 'h3' : 'h5']"
            >
              <a :href="appRootUrl" class="text-white text-decoration-none">{{
                appName
              }}</a>
            </div>
          </div>
        </slot>
      </header>
      <div v-if="$slots['navigation']" class="flex-fill">
        <!-- main sidebar navigation -->
        <nav role="navigation">
          <div
            id="nav-collapse"
            class="px-3"
            :class="[$mq != 'mobile' ? 'collapse.show' : 'collapse']"
          >
            <slot name="navigation">
              <ul class="text-white">
                <li>nav 1</li>
                <li>nav 2</li>
                <li>nav 3</li>
                <li>nav 4</li>
              </ul>
            </slot>
          </div>
        </nav>
      </div>
    </div>

    <div :style="[$mq != 'mobile' ? 'margin-left:250px;' : '']">
      <div class="container-xl">
        <div v-if="$slots['bar']">
          <slot name="bar">
            <div class="row">
              <div class="col">
                <div class="mt-3 bg-teal rounded text-white px-3 py-2 small">
                  hello world banner message default
                </div>
              </div>
            </div>
          </slot>
        </div>

        <main>
          <slot name="main"></slot>
        </main>

        <footer class="mt-auto">
          <slot name="footer">
            <div class="font-weight-light py-3 small">
              Copyright &copy; {{ new Date().getFullYear() }} University of
              Washington
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: "appName",
    },
    pageTitle: {
      type: String,
      default: "pageTitle",
    },
    userName: {
      type: String,
      default: "userName",
    },
    appRootUrl: {
      type: String,
      default: "#",
    },
    signOutUrl: {
      type: String,
      default: "#",
    },
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>

<style lang="scss">
.axdd-sidebar-brand {
  line-height: 65px;
}

.axdd-sidebar-logo {
  background-image: url("../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
}
</style>
