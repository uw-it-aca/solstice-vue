<template>
  <div class="bg-light d-flex align-items-end flex-column axdd-topbar" style="min-height: 100vh">
    <header class="w-100">
      <slot name="header">
        <div class="bg-dark-purple text-white py-2 small">
          <b-container fluid="xl">
            <div class="d-flex">
              <div class="flex-fill">{{ userName }}</div>
              <div class="flex-fill text-right">
                <a :href="signOutUrl" class="text-white">Sign out</a>
              </div>
            </div>
          </b-container>
        </div>
        <div class="bg-purple axdd-topbar-brand">
          <b-container fluid="xl" class="axdd-topbar-logo">
            <b-button
              v-b-toggle.nav-collapse
              variant="link"
              size="sm"
              class="d-lg-none p-0 border-0 text-white"
              aria-label="Toggle Navigation Menu"
            >
              <font-awesome-layers class="fa-2x">
                <font-awesome-icon :icon="['far', 'square']" transform="right-1" class="m-0" />
                <font-awesome-icon
                  :icon="['fas', 'bars']"
                  transform="shrink-8 right-1 "
                  class="m-0"
                />
              </font-awesome-layers>
            </b-button>
            <div class="d-inline align-middle text-white" :class="[$mq == 'desktop' ? 'h3' : 'h5']">
              {{ appName }}
            </div>
          </b-container>
        </div>
      </slot>
    </header>
    <div class="w-100 mt-3">
      <b-container fluid="xl">
        <b-row>
          <b-col lg="2" class="">
            <!-- main sidebar navigation -->
            <nav role="navigation">
              <b-collapse id="nav-collapse" class="" :visible="$mq == 'desktop'">
                <slot name="navigation">
                  <div style="outline: dashed 1px lightgray">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis
                    repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto
                    reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa.
                  </div>
                </slot>
              </b-collapse>
            </nav>
          </b-col>
          <b-col lg="10">
            <main>
              <slot name="main">
                <div style="outline: dashed 1px lightgray">
                  <!-- main content -->
                  <h1>Hello world...</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis
                    repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto
                    reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa.
                  </p>
                </div>
              </slot>
            </main>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <footer class="w-100 mt-auto bg-dark pt-3 pb-3 small">
      <b-container fluid="xl" class="px-3">
        <slot name="footer">
          <div class="text-white font-weight-light">
            Copyright &copy; {{ new Date().getFullYear() }} University of Washington
          </div>
        </slot>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: 'appName',
    },
    pageTitle: {
      type: String,
      default: 'pageTitle',
    },
    userName: {
      type: String,
      default: 'userName',
    },
    signOutUrl: {
      type: String,
      default: '#',
    },
  },
  data() {
    return {};
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + ' - ' + this.appName;
  },
};
</script>

<style lang="scss" scoped>
// storybook only
.sb-show-main {
  .axdd-topbar {
    padding: 0 !important;
    border: dashed 1px lightgrey;
    //height: 500px;
  }
}

.axdd-topbar {
  min-width: 320px;
}
.axdd-topbar-brand {
  line-height: 65px;
}

.axdd-topbar-logo {
  background-image: url('../assets/images/w-logo-white.png');
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: right 20px bottom;
}
</style>
