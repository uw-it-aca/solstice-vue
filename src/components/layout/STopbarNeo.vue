<template>
  <div
    :class="[!isPreview ? 'min-vh-100' : ' ']"
    class="d-flex align-items-end flex-column"
  >
    <header class="bg-spirit-purple w-100">
      <div class="container-xl">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-fill align-items-center my-4">
            <div
              class="d-none d-md-block border-end border-opacity-25 me-3 border-white pe-3"
            >
              <img
                src="/src/assets/images/w-logo-white.png"
                alt="UW logo"
                class="my-1"
                style="height: 30px"
              />
            </div>

            <div class="d-flex flex-fill flex-column text-white">
              <div
                v-if="appDeptName"
                class="fw-light text-nowrap"
                style="margin-bottom: -7px"
              >
                {{ appDeptName }}
              </div>
              <a
                :href="appRootUrl"
                class="d-block d-sm-none ff-encode-sans text-decoration-none fs-3 fw-medium text-truncate text-nowrap text-white"
                style="max-width: 180px"
              >
                {{ appName }}
              </a>
              <a
                :href="appRootUrl"
                class="d-none d-sm-block ff-encode-sans text-decoration-none fs-3 fw-medium text-nowrap text-white"
              >
                {{ appName }}
              </a>
            </div>
          </div>

          <div class="d-flex justify-content-end align-items-center">
            <!-- MARK: slot for app settings -->
            <template v-if="$slots.settings">
              <slot name="settings">user info</slot>
            </template>
            <!-- MARK: navigation toggler -->
            <a
              v-if="$slots.navigation"
              class="btn btn-link btn-sm d-md-none ms-1 py-0 py-1 text-white"
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
      <nav class="navbar navbar-expand-md py-xl-2 bg-husky-purple w-100 p-0">
        <div class="container-xl">
          <div class="navbar-collapse collapse" id="navbarToggler">
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

    <footer class="bg-body-tertiary w-100">
      <div class="container-xl">
        <template v-if="$slots.footer">
          <slot name="footer">
            <div class="row">
              <div class="col small font-weight-light my-4">
                <ul class="list-inline m-0">
                  <li class="list-inline-item">
                    <a
                      v-if="accessibilityURL"
                      :href="accessibilityURL"
                      target="_blank"
                      rel="noopener"
                      class="link-body-emphasis"
                      >Accessibility</a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a
                      v-if="privacyURL"
                      :href="privacyURL"
                      target="_blank"
                      rel="noopener"
                      class="link-body-emphasis"
                      >Privacy</a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a
                      v-if="termsURL"
                      :href="termsURL"
                      target="_blank"
                      rel="noopener"
                      class="link-body-emphasis"
                      >Terms</a
                    >
                  </li>
                </ul>
                <div class="">
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
      accessibilityURL: {
        type: String,
        required: false,
        default: "https://www.washington.edu/accessibility/",
      },
      privacyURL: {
        type: String,
        required: false,
        default: "https://www.washington.edu/online/privacy/",
      },
      termsURL: {
        type: String,
        required: false,
        default: "https://www.washington.edu/online/terms/",
      },
    },
  };
</script>

<style lang="css"></style>
