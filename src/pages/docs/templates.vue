<template>
  <div>
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 h4 border-bottom">
        <i class="bi bi-back me-2 text-purple"></i>
        <a href="/" class="text-reset text-decoration-none">AXDD Components</a>
      </header>

      <h1>Templates</h1>

      <p class="p-0 col-md-8 lead">
        Templates exist to document the layout and structure of a section. These
        are not called “pages” for a reason. While they can be pages, that’s not
        their only functionality. Templates consist of design tokens, elements,
        and patterns.
      </p>

      <hr class="mb-5 w-25 d-inline-block" />

      <h2>Topbar</h2>
      <div class="sg-render border p-0 mb-5 bg-white">
        <Topbar :app-name="'App Name'" :user-name="'javerage'">
          <template #bar>
            <div class="bg-teal">
              <div class="container-xl">
                <div class="col-12 py-2 text-center">custom teal bar</div>
              </div>
            </div>
          </template>
          <template #navigation>
            <ul class="nav flex-column mt-4">
              <li class="nav-item mb-1 bg-light-gray rounded">
                <a href="#" class="nav-link text-purple d-block px-2 py-1"
                  ><i class="bi bi-house-door-fill me-2"></i>Home</a
                >
              </li>
              <li class="nav-item mb-1 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-mortarboard-fill me-2"></i>Academics</a
                >
              </li>
              <li class="nav-item mb-1 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-pencil-square me-2"></i>Teaching</a
                >
              </li>
              <li class="nav-item mb-1 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-credit-card me-2"></i>Accounts</a
                >
              </li>
              <li class="nav-item mb-1 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-person-fill me-2"></i>Profile</a
                >
              </li>
              <li aria-hidden="true" class="nav-item mb-1">
                <a
                  href="#"
                  class="nav-link disabled text-dark d-block p-0 internal-link"
                  ><hr class="m-0 bg-secondary" />
                  <span class="visually-hidden"> Navigation separator</span></a
                >
              </li>
              <li class="nav-item mb-1 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-calendar-check me-2"></i>Calendar</a
                >
              </li>
              <li class="nav-item mb-4 bg-light-gray-hover rounded">
                <a href="#" class="nav-link text-dark d-block px-2 py-1"
                  ><i class="bi bi-bookmark-fill me-2"></i>UW Resources</a
                >
              </li>
            </ul>
          </template>
          <template #main>
            <div class="row mt-4">
              <div class="col">
                <div class="bg-gray p-4 text-center">content</div>
              </div>
            </div>
          </template>
          <template #footer></template>
        </Topbar>
      </div>

      <h3>Implementation</h3>
      <CodeBlock>
        <template #code>
          <pre class="language-html rounded">
<code>&lt;Topbar :app-name="'App Name'" :user-name="'javerage'">
  asdf
&lt;/Topbar>
</code></pre>
        </template>
      </CodeBlock>

      <CodeBlock>
        <template #code>
          <pre class="language-js rounded">
<code>import Topbar from "../component-location";

export default {
  components: { Topbar },
};
</code></pre>
        </template>
      </CodeBlock>

      <h2>Sidebar</h2>

      <div class="sg-render border p-0 mb-5 bg-white">
        <Sidebar :app-name="'App Name'" :user-name="'javerage'">
          <template #navigation>
            <ul class="nav flex-column">
              <li class="nav-item mb-1 bg-dark-purple rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-house-door-fill me-2"></i>Home</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-mortarboard-fill me-2"></i>Academics</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-pencil-square me-2"></i>Teaching</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-credit-card me-2"></i>Accounts</a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-person-fill me-2"></i>Profile</a
                >
              </li>
              <li aria-hidden="true" class="nav-item mb-1">
                <a
                  href="#"
                  class="nav-link disabled text-gray d-block p-0 internal-link"
                  ><hr class="m-0 bg-gray" />
                  <span class="visually-hidden"> Navigation separator</span></a
                >
              </li>
              <li class="nav-item mb-1 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-calendar-check me-2"></i>Calendar</a
                >
              </li>
              <li class="nav-item mb-4 bg-dark-purple-hover rounded">
                <a href="#" class="nav-link text-gray d-block px-2 py-1"
                  ><i class="bi bi-bookmark-fill me-2"></i>UW Resources</a
                >
              </li>
            </ul>
          </template>
          <template #bar>
            <div class="col mt-3">
              <div class="bg-teal py-2 text-center">custom teal bar</div>
            </div>
          </template>
          <template #main>
            <div class="row">
              <div class="col mt-3">
                <div class="bg-gray p-4 text-center">content</div>
              </div>
            </div>
          </template>
          <template #footer></template>
        </Sidebar>
      </div>

      <h2>Card</h2>
      <p>this is an empty card</p>

      <div class="myuw-font-open-sans">
        <CodeBlock>
          <template #preview>
            <div class="card rounded-0 shadow-sm" style="max-width: 400px">
              <div class="card-body p-3">empty card</div>
            </div>
          </template>
          <template #code>
            <pre class="language-html rounded">
<code>&lt;div class="card rounded-0 shadow-sm"&gt;
  &lt;div class="card-body p-3"&gt;empty card&lt;/div&gt;
&lt;/div&gt;</code></pre>
          </template>
        </CodeBlock>
      </div>

      <footer class="pt-5 my-5 text-muted border-top">
        Copyright &copy; {{ new Date().getFullYear() }} University of Washington
      </footer>
    </div>
  </div>
</template>

<script>
import Topbar from "../../_layouts/topbar.vue";
import Sidebar from "../../_layouts/sidebar.vue";
import CodeBlock from "../../components/CodeBlock.vue";

export default {
  components: { Topbar, Sidebar, CodeBlock },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// global styleguide

.sg-render {
  // reset container padding for render display
  .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  // reset vh-100 to something more manageable for display
  .vh-100 {
    min-height: 30vh !important;
    max-height: 60vh !important;
  }
}
</style>
