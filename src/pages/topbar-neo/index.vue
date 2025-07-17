<template>
  <!-- layout.vue: this is where you override the layout -->
  <STopbarNeo
    :app-name="appName"
    :app-dept-name="deptName"
    :app-root-url="appRootUrl"
  >
    <template #settings>
      <div class="d-flex">
        <SProfile
          :variant="'standard'"
          :user-netid="userNetid"
          :user-official-name="userOfficial"
          :user-preferred-name="userPreferred"
          :profile-url="'https://identity.uw.edu'"
          :signout-url="signOutUrl"
        />
        <SColorMode class="ms-3" />
      </div>
    </template>

    <template #navigation>
      <!-- Bootstrap navbar-nav classes -->
      <ul class="navbar-nav text-white me-auto my-2 my-xl-0">
        <li class="nav-item me-5">
          <a class="nav-link px-0 text-white active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item me-5">
          <a class="nav-link text-white px-0" href="#">Link</a>
        </li>
        <li class="nav-item dropdown me-5">
          <a
            class="nav-link px-0 text-white dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div class="mb-3 mb-xl-0">
        <form class="d-flex" role="search">
          <input
            class="form-control form-control-sm me-2 bg-opacity-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-sm btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </template>

    <template #system>
      <div class="row">
        <div class="col">
          <div class="text-center text-info-emphasis p-2 small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nostrum iste! Commodi magni natus provident mollitia. Illum officiis
            molestiae optio distinctio! Repellendus quod minima recusandae
            suscipit, natus hic atque ipsa.
          </div>
        </div>
      </div>
    </template>

    <template #main>
      <!-- main section override -->
      <slot name="content">
        <h1>
          <slot name="title">{{ pageTitle }}</slot>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, quas similique voluptatum illum molestias excepturi
          mollitia saepe minima facere eius? Provident amet laboriosam ducimus
          et illum temporibus autem est blanditiis.
        </p>
      </slot>
    </template>

    <!--<template #aside>
      <div class="bg-secondary bg-opacity-10 p-3 border-0 small rounded-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates
        molestias hic. Esse ab inventore rerum, ipsa cupiditate quo. Aliquid
        optio, commodi sit fugit harum perspiciatis quia sunt fuga. Aliquam?
      </div>
    </template>-->

    <template #footer>
      <!--<div class="row">
        <div class="col text-white py-3">my custom footer</div>
      </div>-->
    </template>
  </STopbarNeo>
</template>

<script>
import STopbarNeo from "@/components/layout/STopbarNeo.vue";
import SColorMode from "@/components/SColorMode.vue";
import SProfile from "@/components/SProfile.vue";

export default {
  name: "DocsSandboxTopbarIndex",
  components: { STopbarNeo, SColorMode, SProfile },
  data() {
    return {
      // layout component
      appName: "MyApp SoCoool",
      deptName: "Dept of Coolness",
      appRootUrl: "/",

      // login component
      signOutUrl: "/signout",
      pageTitle: "Home",
      userNetid: "myusername",
      userOfficial: "MYOFFICAL NAME",
      userPreferred: "Preferred Name",
      currentYear: new Date().getFullYear(),
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
