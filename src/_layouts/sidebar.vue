<template>
  <div
    :class="[$mq != 'mobile' ? 'd-flex vh-100' : '']"
    class="axdd-font-open-sans"
    :style="[isPreview ? 'min-height: auto !important;' : '']"
  >
    <div
      :class="[$mq != 'mobile' ? 'overflow-auto' : '']"
      class="d-flex flex-column bg-purple axdd-sidebar"
      :style="[$mq != 'mobile' ? 'min-width: 280px; max-width:280px;' : '']"
    >
      <header>
        <slot name="header">
          <div
            v-if="$slots['profile']"
            class="bg-dark-purple text-white py-2 px-3 small"
          >
            <slot name="profile">
              <div class="d-flex">
                <div class="flex-fill">username</div>
                <div class="flex-fill text-end">
                  <a :href="signOutUrl" class="text-white">Sign out</a>
                </div>
              </div>
            </slot>
          </div>

          <div class="axdd-sidebar-brand px-3">
            <a
              v-if="$slots['navigation']"
              class="btn btn-link btn-sm d-md-none border border-2 py-0 px-1 text-white me-2"
              data-bs-toggle="collapse"
              data-bs-target="#sidebar-nav-collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebar-nav-collapse"
              aria-label="Toggle Navigation Menu"
            >
              <i class="bi bi-list fw-bold text-white fs-6"></i>
            </a>
            <div
              class="d-inline align-middle text-white"
              :class="[$mq == 'desktop' ? 'h3' : 'h5']"
            >
              <a
                :href="appRootUrl"
                class="axdd-font-encode-sans text-white text-decoration-none"
              >
                {{ appName }}
              </a>
            </div>
          </div>
        </slot>
      </header>
      <div v-if="$slots['navigation']" class="flex-fill">
        <!-- main sidebar navigation -->
        <nav role="navigation">
          <div
            id="sidebar-nav-collapse"
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
      <div class="axdd-sidebar-logo">&nbsp;</div>
    </div>

    <div :class="[$mq != 'mobile' ? 'flex-fill overflow-auto' : '']">
      <div
        :class="[!isPreview ? 'min-vh-100' : '']"
        class="container-xl d-flex flex-column"
      >
        <div v-if="$slots['bar']" class="row">
          <slot name="bar">
            <div class="col my-3">
              <div class="bg-gray py-2 text-center">
                default gray bar (default)
              </div>
            </div>
          </slot>
        </div>

        <main class="flex-fill">
          <slot name="main"></slot>
        </main>

        <footer v-if="$slots['footer']" class="mt-auto">
          <slot name="footer">
            <div class="font-weight-light py-3 small">
              <ul class="list-inline m-0">
                <li class="list-inline-item"><a href="#">Contact</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy</a></li>
              </ul>
              <div>
                Copyright &copy; {{ new Date().getFullYear() }} University of
                Washington
              </div>
            </div>
          </slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarLayout",
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
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    //document.title = this.pageTitle + " - " + this.appName;
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
  line-height: 30px;
}
</style>
