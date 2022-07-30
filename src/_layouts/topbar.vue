<template>
  <div
    :class="[!isPreview ? 'min-vh-100' : ' ']"
    class="d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"
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
              class="btn btn-link btn-sm d-xl-none border border-2 py-0 px-1 text-white me-2"
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
                class="axdd-font-encode-sans text-white text-decoration-none"
                >{{ appName }}</a
              >
            </div>
          </div>
        </div>
      </slot>
      <div v-if="$slots['bar'] && mq.xlPlus" class="w-100">
        <slot name="bar">
          <div class="bg-gray">
            <div class="container-xl">
              <div class="col-12 py-2 text-center">
                default gray bar (desktop)
              </div>
            </div>
          </div>
        </slot>
      </div>
    </header>

    <div class="w-100 flex-fill">
      <div class="container-xl">
        <div class="row">
          <div v-if="$slots['navigation']" class="col-lg-3">
            <!-- main sidebar navigation -->
            <nav role="navigation">
              <div
                id="topbar-nav-collapse"
                :class="[!mq.xlPlus ? 'collapse' : 'collapse.show']"
              >
                <slot name="navigation"></slot>
              </div>
            </nav>
          </div>
          <div v-if="$slots['bar'] && !mq.xlPlus" class="w-100 p-0 m-0">
            <slot name="bar">
              <div class="bg-gray">
                <div class="container-xl">
                  <div class="col-12 py-2 text-center">
                    default gray bar (mobile)
                  </div>
                </div>
              </div>
            </slot>
          </div>
          <div :class="$slots['navigation'] ? 'col-lg-9' : 'col-lg-12'">
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
    <footer v-if="$slots['footer']" class="w-100 mt-auto">
      <slot name="footer">
        <div class="bg-dark">
          <div class="container-xl">
            <div class="text-white font-weight-light py-3 small">
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
          </div>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TopbarLayout",
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
    //document.title = this.pageTitle + " - " + this.appName;
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
  background-image: url("../assets/images/w-logo-white.png");
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
}
</style>
