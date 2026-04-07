<template>
  <SHeading level="1" class="my-5">{{ pageTitle }}</SHeading>
  <p class="lead my-5" style="max-width: 85ch">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
    quas similique voluptatum illum molestias excepturi mollitia saepe minima
    facere eius? Provident amet laboriosam ducimus et illum temporibus autem est
    blanditiis.
  </p>

  <div class="my-5">
    <SHeading level="2">Basic Content</SHeading>
    <p>Basic content on the default page surface.</p>
  </div>

  <div class="grid">
    <div class="g-col-12 g-col-md-6">
      <SHeading level="3">Heading</SHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        quas similique voluptatum illum molestias excepturi mollitia
      </p>
    </div>
    <div class="g-col-12 g-col-md-6">
      <SHeading level="3">Heading</SHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        quas similique voluptatum illum molestias excepturi mollitia
      </p>
    </div>
  </div>

  <div class="mb-3">
    <SHeading level="3">Heading</SHeading>
    <p style="max-width: 85ch">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      quas similique voluptatum illum molestias excepturi mollitia
    </p>
  </div>

  <div class="mb-3">
    <SHeading level="3">Simple Table</SHeading>
    <BTable striped hover :items="items" head-variant="secondary" />
  </div>

  <div class="mb-3">
    <SHeading level="3">Table w/ Actions</SHeading>
    <table class="table">
      <thead class="table-secondary">
        <tr>
          <th scope="col">Age</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.age }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>
            <div>
              <BButton variant="subdued-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="subdued-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="my-5">
    <SHeading level="2">Complex Patterns</SHeading>
    <p>Complex content using multiple surfaces and containers.</p>
  </div>

  <div class="mb-5">
    <div class="d-flex">
      <SHeading level="3">Table w/ Filters</SHeading>
      <div>
        <BButton v-b-toggle.collapse-1 variant="outline-primary" size="sm" class="ms-2"
          >show filters</BButton
        >
      </div>
    </div>
    <BCollapse id="collapse-1">
      <BCard bg-variant="body-tertiary" body-class="p-4" class="mb-3 border-0">
        filter ui goes here
      </BCard>
    </BCollapse>
    <table class="table">
      <thead class="table-secondary">
        <tr>
          <th scope="col">Age</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.age }}</td>
          <td>{{ item.first_name }}</td>
          <td>{{ item.last_name }}</td>
          <td>
            <div>
              <BButton variant="subdued-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="subdued-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mb-5 grid">
    <div class="g-col-6">
      <BCard body-class="p-4" class="mb-3 border-0 shadow">
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton
            variant="quiet-primary"
            size="sm"
            class="me-1"
            aria-label="Settings"
          >
            <i class="bi bi-three-dots-vertical me-2"></i>
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae ad
          sit quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>
    <div class="g-col-6">
      <BCard body-class="p-4" class="mb-3 border-0 shadow">
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="subdued-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a> doloribus animi? Quae ad
          sit quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="subdued-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="subdued-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="subdued-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="subdued-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="subdued-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="subdued-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>

    <div class="g-col-6">
      <BCard body-class="p-4" bg-variant="body-tertiary" class="mb-3 border-0">
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="quiet-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a>doloribus animi? Quae ad sit
          quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>

    <div class="g-col-6">
      <BCard
        body-class="p-4"
        bg-variant="body-secondary"
        class="bg-opacity-50 mb-3 border-0"
      >
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="quiet-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a>doloribus animi? Quae ad sit
          quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>

    <div class="g-col-6">
      <BCard
        body-class="p-4"
        bg-variant="spirit-purple-subtle"
        class="bg-opacity-25 mb-3 border-0"
      >
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="quiet-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a>doloribus animi? Quae ad sit
          quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>

    <div class="g-col-6">
      <BCard
        body-class="p-4"
        bg-variant="husky-gold-subtle"
        class="bg-opacity-50 mb-3 border-0"
      >
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="quiet-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a>doloribus animi? Quae ad sit
          quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>

    <div class="g-col-6">
      <BCard body-class="p-4">
        <div class="d-flex justify-content-between mb-3">
          <SHeading level="3" system="app">Heading 3 - 24px</SHeading>
          <BButton variant="quiet-primary" size="sm" class="me-1">
            <i class="bi bi-three-dots-vertical me-2"></i>Manage settings
          </BButton>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deserunt
          <a href="#" class="link-primary">dolorum fugiat (link-primary)</a>
          consectetur corporis corrupti nulla,
          <a href="#">distinctio ipsum (default)</a>doloribus animi? Quae ad sit
          quasi voluptate perferendis consequatur tempore fuga repudiandae.
        </p>

        <ul class="list-unstyled mb-5">
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-2">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              <BButton variant="quiet-primary" size="sm" class="me-1">
                <i class="bi bi-pencil me-2"></i>Edit
              </BButton>
              <BButton
                variant="quiet-danger"
                size="sm"
                class="me-2"
                aria-label="Trash"
              >
                <i class="bi bi-trash3"></i>
              </BButton>
            </div>
          </li>
        </ul>

        <div class="mt-4 text-end">
          <BButton variant="outline-primary" class="me-2">Cancel</BButton>
          <BButton variant="primary" class="me-1">Submit</BButton>
        </div>
      </BCard>
    </div>
  </div>
</template>

<script>
  import STopbarNeo from "@/components/layout/STopbarNeo.vue";
  import SColorMode from "@/components/SColorMode.vue";
  import SProfile from "@/components/SProfile.vue";
  import SUser from "@/components/SUser.vue";
  import SHeading from "@/components/SHeading.vue";

  export default {
    name: "DocsSandboxTopbarIndex",
    components: { STopbarNeo, SColorMode, SProfile, SUser, SHeading },
    data() {
      return {
        pageTitle: "Kitchen Sink",
        items: [
          { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
          { age: 21, first_name: "Larsen", last_name: "Shaw" },
          { age: 89, first_name: "Geneva", last_name: "Wilson" },
          { age: 38, first_name: "Jami", last_name: "Carney" },
        ],
      };
    },
    created: function () {
      // constructs page title in the following format "Page Title - AppName"
      document.title = this.pageTitle + " - " + this.appName;
    },
  };
</script>
