<template>
  <div class="bg-light d-flex align-items-end flex-column boilerplate" style="min-height: 100vh">
    <header class="w-100">
      <div class="bg-purple">
        <b-container
          fluid="xl"
          class="px-3 myuw-brand-logo"
          :style="`background-image: url(${staticUrl}images/w-logo-white.png);`"
        >
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
          <slot name="header">
            <div class="d-inline align-middle text-white h3">{{ appName }}</div>
          </slot>
        </b-container>
      </div>
    </header>
    <nav role="navigation">
      <slot name="navigation">
        <div class="text-uppercase">Nav Heading</div>
        <ul class="list-unstyled">
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
          <li><a href="#">link</a></li>
        </ul>
      </slot>
    </nav>

    <main class="">
      <slot name="content">
        <h1 class="text-uppercase text-muted">{{ pageTitle }}</h1>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum dolor laudantium
          cum consectetur nihil, cumque ipsam accusantium asperiores ut delectus quae, dolores saepe
          sunt doloribus iusto dolore, doloremque aperiam.
        </p>
      </slot>
    </main>

    <footer class="">
      <slot name="footer"> Copyright &copy; 2021 </slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      default: 'App',
    },
    pageTitle: {
      type: String,
      default: 'Page Title',
    },
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + ' - ' + this.appName;
  },
};
</script>

<style lang="scss" scoped>
</style>
