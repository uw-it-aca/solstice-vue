<template>
  <Layout>
    <template #content>
      <h1>MyUW</h1>

      <p class="p-0 col-md-8 lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        atque incidunt est distinctio ex sint iusto accusantium dolorum expedita
        deserunt, error vitae recusandae totam praesentium voluptate quae
        inventore accusamus veritatis!
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Overview</h2>

      <div class="sg-render border p-0 mb-3 bg-light">
        <Topbar :app-name="'MyUW'" :user-name="'javerage'">
          <template #bar>
            <div class="bg-teal">
              <div class="container-xl">
                <div class="col-12 py-2 text-center">custom banner bar</div>
              </div>
            </div>
          </template>
          <template #navigation>
            <div role="navigation" class="mt-4">
              <ul class="nav flex-column">
                <li class="nav-item mb-2 bg-light-gray">
                  <a href="#" class="nav-link text-purple d-block px-2 py-1"
                    ><i class="bi bi-house-door-fill me-2"></i>Home</a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-mortarboard-fill me-2"></i>Academics</a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-pencil-square me-2"></i>Teaching</a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-credit-card me-2"></i>Accounts</a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-person-fill me-2"></i>Profile</a
                  >
                </li>
                <li aria-hidden="true" class="nav-item mb-2">
                  <a
                    href="#"
                    class="nav-link disabled text-dark d-block p-0 internal-link"
                    ><hr class="m-0 bg-secondary" />
                    <span class="visually-hidden">
                      Navigation separator</span
                    ></a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-calendar-check me-2"></i>Calendar</a
                  >
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link text-dark d-block px-2 py-1"
                    ><i class="bi bi-bookmark-fill me-2"></i>Resources</a
                  >
                </li>
              </ul>
            </div>
          </template>
          <template #main>
            <div class="row mt-4">
              <div class="col-12">
                <div class="bg-gray p-4 mb-4 text-center bg-light-gray">
                  summaries here
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <div class="card rounded-0 shadow-sm mb-4">
                  <div class="card-body p-3 text-left">
                    <h2 class="h4 text-dark-beige axdd-font-encode-sans">
                      Heading H2
                    </h2>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quod voluptatibus dolore dolorum laudantium, nihil
                      reprehenderit, ipsa, sed voluptas laboriosam inventore rem
                      eligendi nemo soluta aliquid? Blanditiis voluptatibus
                      tempora ex?
                    </p>
                    <h3 class="h6 text-dark-beige axdd-font-encode-sans">
                      Heading H3
                    </h3>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quod voluptatibus dolore dolorum laudantium.
                    </p>
                    <h3 class="h6 axdd-font-open-sans">Normal Heading H3</h3>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quod voluptatibus dolore dolorum laudantium.
                    </p>
                  </div>
                </div>
                <div class="card rounded-0 shadow-sm mb-4">
                  <div class="card-body p-3 text-left">
                    <h2 class="h4 text-dark-beige axdd-font-encode-sans">
                      Heading H2
                    </h2>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quod voluptatibus dolore dolorum laudantium, nihil
                      reprehenderit, ipsa, sed voluptas laboriosam inventore rem
                      eligendi nemo soluta aliquid? Blanditiis voluptatibus
                      tempora ex?
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card rounded-0 shadow-sm mb-4">
                  <div class="card-body p-3">
                    <h2 class="h4 text-dark-beige axdd-font-encode-sans">
                      Heading H2
                    </h2>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus quod voluptatibus dolore dolorum laudantium, nihil
                      reprehenderit.
                    </p>
                  </div>
                </div>
                <div class="card rounded-0 shadow-sm mb-4">
                  <div class="card-body p-3">
                    <h2 class="h4 text-dark-beige axdd-font-encode-sans">
                      Heading H2
                    </h2>
                    <p class="myuw-text-md">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template #footer></template>
        </Topbar>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "../../../layouts/docs.vue";
import Topbar from "../../../_layouts/topbar.vue";

export default {
  components: { Layout, Topbar },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
