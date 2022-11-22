<template>
  <div
    :class="[!mq.mdMinus ? 'd-flex vh-100' : '']"
    class="axdd-sidebar"
    :style="[isPreview ? 'min-height: auto !important;' : '']"
  >
    <div
      :class="[!mq.mdMinus ? 'overflow-auto' : '']"
      class="d-flex flex-column"
      :style="[!mq.mdMinus ? 'min-width: 280px; max-width:280px;' : '']"
    >
      <header>
        <div
          v-if="$slots['profile']"
          class="py-2 px-3 small bg-opaque"
          :class="[variant === 'dark' ? 'text-white' : 'text-dark']"
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
          :class="[
            !mq.lgMinus ? 'axdd-sidebar-brand' : 'axdd-sidebar-brand-sm',
          ]"
          class="px-3"
        >
          <a
            v-if="$slots['navigation']"
            class="btn btn-link btn-sm d-lg-none border border-1 rounded-3 py-0 px-1 me-2"
            :class="[
              variant === 'dark'
                ? 'text-white border-white'
                : 'text-dark border-dark',
            ]"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-nav-collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebar-nav-collapse"
            aria-label="Toggle Navigation Menu"
          >
            <i class="bi bi-list fw-bold fs-6"></i>
          </a>
          <div
            class="d-inline align-middle text-white"
            :class="[mq.mdPlus ? 'h2' : 'h3']"
          >
            <a
              :href="appRootUrl"
              class="axdd-font-encode-sans text-decoration-none"
              :class="[variant === 'dark' ? 'text-white' : 'text-dark']"
            >
              <span v-if="$slots['logo']" class="me-2">
                <slot name="logo"><i class="bi bi-box-fill"></i></slot></span
              >{{ appName }}
            </a>
          </div>
        </div>
      </header>
      <div class="flex-fill">
        <div
          id="sidebar-nav-collapse"
          class="px-3"
          :class="[!mq.mdMinus ? 'collapse.show' : 'collapse']"
        >
          <!-- main sidebar navigation -->
          <nav
            v-if="$slots['navigation']"
            role="navigation"
            :class="[variant === 'dark' ? 'text-white' : 'text-dark']"
          >
            <slot name="navigation">
              <ul class="text-white">
                <li>nav 1</li>
                <li>nav 2</li>
                <li>nav 3</li>
                <li>nav 4</li>
              </ul>
            </slot>
          </nav>
          <aside
            v-if="$slots['aside']"
            :class="[variant === 'dark' ? 'text-white' : 'text-dark']"
            class="mb-5"
          >
            <slot name="aside">this is aside content</slot>
          </aside>
        </div>
      </div>
      <div
        :class="[
          variant === 'dark'
            ? 'axdd-sidebar-logo-dark'
            : 'axdd-sidebar-logo-light',
        ]"
        class=""
      >
        &nbsp;
      </div>
    </div>

    <div
      :class="[!mq.mdMinus ? 'flex-fill overflow-auto' : '']"
      class="bg-white pt-5 px-5"
    >
      <div
        :class="[!isPreview ? 'min-vh-100' : '']"
        class="container-xl d-flex flex-column"
      >
        <div v-if="$slots['bar']" class="row">
          <div class="col">
            <slot name="bar">
              <div class="bg-gray py-2 text-center">
                default gray bar (default)
              </div>
            </slot>
          </div>
        </div>

        <main class="flex-fill">
          <slot name="main"></slot>
        </main>

        <footer v-if="$slots['footer']" class="mt-auto">
          <slot name="footer">
            <div class="font-weight-light py-3 small">
              <ul class="list-inline m-0">
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
  name: "axdd-sidebar",
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
    signOutUrl: {
      type: String,
      default: "#",
    },
    variant: {
      type: String,
      default: "dark",
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
.axdd-sidebar-brand-sm {
  line-height: 75px;
}

.axdd-sidebar-brand {
  line-height: 105px;
}

.axdd-sidebar-logo-dark {
  background-image: url("../../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
  line-height: 30px;
}

.axdd-sidebar-logo-light {
  background-image: url("../../assets/images/w-logo-purple.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
  line-height: 30px;
}
</style>
