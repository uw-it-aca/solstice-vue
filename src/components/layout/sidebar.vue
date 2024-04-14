<template>
  <div
    :class="[!mq.mdMinus ? 'd-flex vh-100' : '']"
    :style="[isPreview ? 'min-height: auto !important;' : '']"
  >
    <div
      :class="sidebarClass + [!mq.mdMinus ? ' overflow-auto' : '']"
      class="sol-sidebar d-flex flex-column"
      :style="[!mq.mdMinus ? 'min-width: 280px; max-width:280px;' : '']"
    >
      <header>
        <div
          v-if="$slots['profile']"
          class="py-2 px-3 small bg-black bg-opacity-10"
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

        <div
          :class="[!mq.lgMinus ? 'sol-sidebar-brand' : 'sol-sidebar-brand-sm']"
          class="px-3"
        >
          <a
            v-if="$slots['navigation']"
            class="btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-nav-collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebar-nav-collapse"
            aria-label="Toggle Navigation Menu"
          >
            <i class="bi bi-list fw-bold fs-6"></i>
          </a>
          <div class="d-inline align-middle" :class="[mq.mdPlus ? 'h2' : 'h3']">
            <router-link
              :to="appRootUrl"
              class="ff-encode-sans text-decoration-none text-light"
              >{{ appName }}
            </router-link>
          </div>
        </div>
      </header>

      <div
        id="sidebar-nav-collapse"
        class="px-3 flex-fill"
        :class="[
          !mq.mdMinus
            ? 'collapse.show d-flex flex-column justify-content-between'
            : 'collapse',
        ]"
      >
        <!-- main sidebar navigation -->
        <nav v-if="$slots['navigation']" role="navigation">
          <slot name="navigation">
            <ul class="text-white">
              <li>nav 1</li>
              <li>nav 2</li>
              <li>nav 3</li>
              <li>nav 4</li>
            </ul>
          </slot>
        </nav>
        <aside v-if="$slots['aside']" class="mb-3 text-light">
          <slot name="aside">this is aside content</slot>
        </aside>
      </div>

      <div class="sol-sidebar-logo">&nbsp;</div>
    </div>

    <div
      id="scrollbody"
      :class="[!mq.mdMinus ? 'flex-fill overflow-y-scroll' : '']"
      class="d-flex bg-body text-body"
      style="padding-top: 37px !important"
    >
      <div
        :class="[mq.lgPlus ? 'px-5' : '']"
        class="container-xl d-flex flex-column"
      >
        <main class="flex-fill">
          <slot name="main"></slot>
        </main>

        <footer v-if="$slots['footer']">
          <slot name="footer">
            <div class="font-weight-light py-3 small">
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
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sol-sidebar",
  inject: ["mq"],
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
    sidebarClass: {
      type: String,
      default: "bg-brand",
    },
    signOutUrl: {
      type: String,
      default: "#",
    },
    // used for documentation site
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
.sol-sidebar-brand-sm {
  line-height: 75px;
}

.sol-sidebar-brand {
  line-height: 105px;
}

.sol-sidebar-logo {
  background-image: url("../../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
  line-height: 30px;
}

.sol-sidebar-logo-light {
  background-image: url("../../assets/images/w-logo-purple.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
  line-height: 30px;
}
</style>
