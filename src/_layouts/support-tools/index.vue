<template>
  <div class="support-tools">
    <div class="d-md-flex align-self-stretch">
      <div class="p-4 bg-light d-md-flex flex-md-column align-items-start support-sidebar">
        <div class="support-header">
          <div class="p-0 mb-3 h3 text-center text-uppercase">
            <span v-if=appName class="text-purple
            font-weight-bold mr-1">{{ appName }}</span>
            <span v-else>APP</span>
            <span class="text-muted font-weight-light">Support</span>
          </div>
          <div v-if=userId class="text-center mb-4">
            <div class="d-inline">{{ userId }}</div>
            <div class="d-inline ml-2">
              <a :href=logoutUrl class="btn btn-sm btn-outline-danger
              text-uppercase font-weight-light">Logout</a>
            </div>
          </div>
        </div>
        <nav class="support-navigation" role="navigation">
          <slot name="navigation"></slot>
        </nav>
        <div class="mt-auto border-top pt-2 text-secondary support-footer">
          <div class="small">Copyright &copy; 2012-{{currentYear}}
            UW Information Technology - AXDD</div>
        </div>
      </div>
      <main class="p-4">
        <h1 class="h3 p-0 mb-4 text-uppercase">{{ pageTitle }}</h1>
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    logoutUrl: {
      type: String,
      required: true,
    },
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  created: function() {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + ' - ' + this.appName;
  },
};
</script>

<style lang="scss" scoped>
// storybook only
.sb-show-main {
  .support-tools {
    padding: 0 !important;
    border: dashed 1px lightgrey;
  }
  main {
    height: 500px;
  }
}
// main responsive tablet and desktop
@media (min-width: 768px) {
  .support-sidebar {
    min-width: 260px;
    max-width: 260px;
  }
  main {
    height:100vh;
  }
}
</style>
