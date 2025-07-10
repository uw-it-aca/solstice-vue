<template>
  <div
    :class="[!isPreview ? ' min-vh-100' : ' ']"
    class="d-flex align-items-end flex-column sol-topbar-neo"
  >
    <header class="w-100 bg-spirit-purple">
      <div class="container-xl">
        <div class="d-flex justify-content-between align-items-center">
          <div class="w-50 d-flex align-items-center my-4">
            <!-- MARK: nudge logo for xl only -->
            <div class="border-end border-white border-opacity-25 pe-3 me-3">
              <img
                src="/src/assets/images/w-logo-white.png"
                alt="UW logo"
                class="my-1"
                style="height: 38px"
              />
            </div>
            <!--<div
              class="d-none d-xl-block border-end border-white border-opacity-25 pe-3 me-3"
            >
              <img
                src="/src/assets/images/w-logo-white.png"
                alt="UW logo"
                class="my-1"
                style="height: 38px"
              />
            </div>-->

            <div class="text-white d-flex flex-column">
              <div v-if="appDeptName" class="fw-light text-nowrap mb-1 lh-1">
                {{ appDeptName }}
              </div>
              <a
                :href="appRootUrl"
                class="ff-encode-sans text-white text-nowrap text-decoration-none fs-3 fw-medium lh-1"
              >
                {{ appName }}
              </a>
            </div>
          </div>

          <div class="w-50 d-flex justify-content-end align-items-center">
            <!-- MARK: slot for app settings -->
            <template v-if="$slots.settings">
              <slot name="settings">user info</slot>
            </template>
            <!-- MARK: navigation toggler -->
            <a
              class="ms-1 btn btn-link btn-sm d-xl-none py-0 py-1 text-white"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="bi bi-list text-light fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <template v-if="$slots.navigation">
      <nav
        class="navbar navbar-expand-xl w-100 p-0 py-xl-2 bg-husky-purple"
        data-bs-theme="dark"
      >
        <div class="container-xl">
          <div class="collapse navbar-collapse" id="navbarToggler">
            <slot name="navigation">navigation bar</slot>
          </div>
        </div>
      </nav>
    </template>

    <template v-if="$slots.system">
      <div class="bg-info-subtle w-100">
        <div class="container-xl">
          <slot name="system">system messages</slot>
        </div>
      </div>
    </template>

    <div class="container-xl flex-fill">
      <div class="row">
        <!-- main landmark -->
        <main class="col">
          <slot name="main">
            <div style="outline: dashed 1px lightgray">
              <!-- main content -->
              <h1>Hello world...</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
                soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus
                eligendi natus voluptatum iusto reiciendis deserunt tempora
                praesentium laboriosam ullam facilis velit culpa.
              </p>
            </div>
          </slot>
        </main>

        <!-- aside landmaek -->
        <aside v-if="$slots['aside']" class="col-sm-12 col-xl-3">
          <slot name="aside">aside content</slot>
        </aside>
      </div>
    </div>

    <footer class="bg-dark w-100">
      <div class="container-xl">
        <template v-if="$slots.footer">
          <slot name="footer">
            <div class="row">
              <div class="col small font-weight-light my-4">
                <ul class="list-inline m-0">
                  <li class="list-inline-item">
                    <a
                      href="http://www.washington.edu/online/privacy/"
                      class="link-light"
                      >Privacy</a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="http://www.washington.edu/online/terms/"
                      class="link-light"
                      >Terms</a
                    >
                  </li>
                </ul>
                <div class="text-light">
                  Copyright &copy; {{ new Date().getFullYear() }} University of
                  Washington
                </div>
              </div>
            </div>
          </slot>
        </template>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  inject: ["mq"],
  props: {
    appName: {
      type: String,
      default: "appName",
    },
    appDeptName: {
      type: String,
    },
    appRootUrl: {
      type: String,
      default: "#",
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.sol-topbar-neo {
  min-width: 430px;
}
</style>
