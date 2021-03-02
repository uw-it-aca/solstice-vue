<template>
  <div class="bg-light d-flex align-items-end flex-column axdd-topbar" style="min-height: 100vh">
    <header class="w-100">
      <slot name="header">
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
                  <b-nav vertical>
                    <b-nav-item
                      v-for="item in navItems"
                      :key="item.title"
                      class="mb-2"
                      :href="item.href"
                      :link-classes="'d-block px-2 py-1'"
                    >
                      {{ item.title }}
                    </b-nav-item>
                  </b-nav>
                </slot>
              </b-collapse>
            </nav>
          </b-col>
          <b-col lg="10">
            <main>
              <slot name="main">
                <!-- main content -->
                <h1>{{ pageTitle }}</h1>
                <p class="bg-white p-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                  laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut delectus
                  quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                </p>
                <div class="row">
                  <div class="col-md-4">
                    <p class="bg-white p-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                      laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut
                      delectus quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p class="bg-white p-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                      laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut
                      delectus quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p class="bg-white p-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                      laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut
                      delectus quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p class="bg-white p-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                      laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut
                      delectus quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p class="bg-white p-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor
                      laudantium cum consectetur nihil, cumque ipsam accusantium asperiores ut
                      delectus quae, dolores saepe sunt doloribus iusto dolore, doloremque aperiam.
                    </p>
                  </div>
                </div>
              </slot>
            </main>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <footer class="w-100 mt-auto bg-dark pt-3 pb-3 myuw-text-xs">
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
      default: 'Hello world...',
    },
  },
  data() {
    return {
      navItems: [
        {
          title: 'Home',
          href: '#',
        },
        {
          title: 'First',
          href: '#',
        },
        {
          title: 'Second',
          href: '#',
        },
        {
          title: 'Third',
          href: '#',
        },
      ],
    };
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
