<template>
  <div
    class="d-flex align-items-end flex-column axdd-topbar"
    style="min-height: 300px"
  >
    <header class="w-100">
      <slot name="header">
        <div class="bg-dark-purple text-white py-2 small">
          <div class="container-xl">
            <div class="d-flex">
              <div class="flex-fill">{{ userName }}</div>
              <div class="flex-fill text-end">
                <a :href="signOutUrl" class="text-white">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-purple axdd-topbar-brand">
          <div class="container-xl axdd-topbar-logo">
            <a
              v-if="$slots['navigation']"
              class="btn btn-link btn-sm d-lg-none border border-2 py-0 px-1 text-white me-2"
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
        </div>
      </slot>
    </header>
    <div v-if="$slots['bar'] && $mq == 'desktop'" class="w-100">
      <slot name="bar">
        <div class="bg-gray">
          <div class="container-xl px-0 py-2">
            <div class="col text-center">This is the default gray bar</div>
          </div>
        </div>
      </slot>
    </div>
    <div class="w-100">
      <div class="container-xl">
        <div class="row">
          <div v-if="$slots['navigation']" class="col-lg-2">
            <!-- main sidebar navigation -->
            <nav role="navigation" :class="[$mq == 'desktop' ? 'mt-3' : '']">
              <div
                id="nav-collapse"
                :class="[$mq == 'desktop' ? 'collapse.show' : 'collapse']"
              >
                <slot name="navigation"></slot>
              </div>
            </nav>
          </div>
          <div v-if="$slots['bar'] && $mq != 'desktop'" class="w-100 p-0 m-0">
            <slot name="bar">
              <div class="bg-gray">
                <div class="container-xl px-0 py-2">
                  <div class="col text-center">
                    This is the default gray bar
                  </div>
                </div>
              </div>
            </slot>
          </div>
          <div :class="$slots['navigation'] ? 'col-lg-10' : 'col-lg-12'">
            <main class="mt-3">
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
    <footer class="w-100 mt-auto">
      <slot name="footer">
        <div class="bg-dark">
          <div class="container-xl py-3 small">
            <div class="text-white font-weight-light">
              Copyright &copy; {{ new Date().getFullYear() }} University of
              Washington
            </div>
          </div>
        </div>
      </slot>
    </footer>
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
  components: {},
  data() {
    return {};
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  }
};
</script>

<style lang="scss">
.axdd-topbar {
  min-width: 320px;
}
.axdd-topbar-brand {
  line-height: 65px;
}

.axdd-topbar-logo {
  background-image: url("../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
}
</style>
