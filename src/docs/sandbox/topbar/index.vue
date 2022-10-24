<template>
  <!-- layout.vue: this is where you override the layout -->
  <axdd-topbar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userNetid"
    :sign-out-url="signOutUrl"
  >
    <template #profile>
      <axdd-profile
        :variant="'flyout'"
        :user-netid="userNetid"
        :user-official-name="userOfficial"
        :user-preferred-name="userPreferred"
        :profile-url="'https://identity.uw.edu'"
        :signout-url="signOutUrl"
      ></axdd-profile>
    </template>
    <template #navigation>
      <ul class="nav flex-column my-3">
        <li class="nav-item mb-1 bg-gray rounded-3">
          <a href="#" class="nav-link text-purple d-block px-3 py-2"
            ><i class="bi bi-house-door-fill me-3"></i>Home</a
          >
        </li>
        <li class="nav-item mb-1 bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-mortarboard-fill me-3"></i>Academics</a
          >
        </li>
        <li class="nav-item mb-1 bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-pencil-square me-3"></i>Teaching</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-credit-card me-3"></i>Accounts</a
          >
        </li>
        <li aria-hidden="true" class="nav-item my-2">
          <a
            href="#"
            class="nav-link disabled text-muted d-block p-0 internal-link"
            ><hr class="m-0 bg-light" />
            <span class="visually-hidden"> Navigation separator</span></a
          >
        </li>
        <li class="nav-item mb-1 bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-calendar-check me-3"></i>Calendar</a
          >
        </li>
        <li class="nav-item bg-gray-hover rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-bookmark-fill me-3"></i>UW Resources</a
          >
        </li>
      </ul>
    </template>
    <template #aside>
      <div class="alert alert-dark-beige border-0 small rounded-3 my-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates
        molestias hic. Esse ab inventore rerum, ipsa cupiditate quo. Aliquid
        optio, commodi sit fugit harum perspiciatis quia sunt fuga. Aliquam?
      </div>
    </template>
    <template #bar></template>
    <template #main>
      <!-- main section override -->
      <h1>
        <slot name="title">{{ pageTitle }}</slot>
      </h1>
      <slot name="content"></slot>
    </template>
    <template #footer></template>
  </axdd-topbar>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      // minimum application setup overrides
      appName: "MyApp",
      appRootUrl: "/myapp",
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
