<template>
  <div
    class="bg-light d-flex align-items-end flex-column axdd-topbar"
    style="min-height: 100vh"
  >
    <header class="w-100">
      <slot name="header">
        <div class="bg-dark-purple text-white py-2 small">
          <div class="container-xl">
            <div class="d-flex">
              <div class="flex-fill">{{ userName }}</div>
              <div class="flex-fill text-right">
                <a :href="signOutUrl" class="text-white">Sign out</a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-purple axdd-topbar-brand">
          <div class="container-xl axdd-topbar-logo">
            <a
              v-if="$slots['navigation']"
              class="btn btn-link btn-sm d-lg-none p-0 border-0 text-white"
              data-bs-toggle="collapse"
              data-bs-target="#nav-collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              aria-label="Toggle Navigation Menu"
            >
              <font-awesome-layers class="fa-2x">
                <font-awesome-icon
                  :icon="['far', 'square']"
                  transform="right-1"
                  class="m-0"
                />
                <font-awesome-icon
                  :icon="['fas', 'bars']"
                  transform="shrink-8 right-1 "
                  class="m-0"
                />
              </font-awesome-layers>
            </a>

            <div
              class="d-inline align-middle text-white"
              :class="[$mq == 'desktop' ? 'h3' : 'h5']"
            >
              <a href="#" class="text-white text-decoration-none">{{
                appName
              }}</a>
            </div>
          </div>
        </div>
      </slot>
    </header>
    <div class="w-100 mt-3">
      <div class="container-xl">
        <div class="row">
          <div v-if="$slots['navigation']" class="col-lg-2">
            <!-- main sidebar navigation -->
            <nav role="navigation">
              <div
                id="nav-collapse"
                :class="[$mq == 'desktop' ? 'collapse.show' : 'collapse']"
              >
                <slot name="navigation"></slot>
              </div>
            </nav>
          </div>
          <div :class="$slots['navigation'] ? 'col-lg-10' : 'col-lg-12'">
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
    <footer class="w-100 mt-auto bg-dark pt-3 pb-3 small">
      <div class="container-xl px-3">
        <slot name="footer">
          <div class="text-white font-weight-light">
            Copyright &copy; {{ new Date().getFullYear() }} University of
            Washington
          </div>
        </slot>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: "appName"
    },
    pageTitle: {
      type: String,
      default: "pageTitle"
    },
    userName: {
      type: String,
      default: "userName"
    },
    signOutUrl: {
      type: String,
      default: "#"
    }
  },
  created: function() {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  }
};
</script>

<style lang="scss" scoped>
// storybook only
.sb-show-main {
  .axdd-topbar {
    padding: 0 !important;
    border: dashed 1px lightgrey;
    min-height: 500px !important;
  }
}

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
