<template>
  <axdd-sidebar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userNetid"
    :sign-out-url="signOutUrl"
  >
    <template #profile>
      <axdd-profile
        :user-netid="userNetid"
        :user-official-name="userOfficial"
        :user-preferred-name="userPreferred"
        :profile-url="'https://identity.uw.edu'"
        :signout-url="signOutUrl"
      ></axdd-profile>
    </template>

    <template #navigation>
      <ul class="nav flex-column mb-5">
        <li class="nav-item mb-1 bg-dark-purple rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-house-door-fill me-3"></i>Home</a
          >
        </li>
        <li class="nav-item mb-1 bg-dark-purple-hover rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-mortarboard-fill me-3"></i>Academics</a
          >
        </li>
        <li class="nav-item mb-1 bg-dark-purple-hover rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-pencil-square me-3"></i>Teaching</a
          >
        </li>
        <li class="nav-item bg-dark-purple-hover rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-credit-card me-3"></i>Accounts</a
          >
        </li>
        <li aria-hidden="true" class="nav-item my-2">
          <a
            href="#"
            class="nav-link disabled text-gray d-block p-0 internal-link"
            ><hr class="m-0 bg-gray" />
            <span class="visually-hidden"> Navigation separator</span></a
          >
        </li>
        <li class="nav-item mb-1 bg-dark-purple-hover rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-calendar-check me-3"></i>Calendar</a
          >
        </li>
        <li class="nav-item bg-dark-purple-hover rounded-3">
          <a href="#" class="nav-link text-gray d-block px-3 py-2"
            ><i class="bi bi-bookmark-fill me-3"></i>UW Resources</a
          >
        </li>
      </ul>
    </template>
    <template #aside>
      <div class="bg-black bg-opacity-10 p-3 border-0 small rounded-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates
        molestias hic. Esse ab inventore rerum, ipsa cupiditate quo. Aliquid
        optio, commodi sit fugit harum perspiciatis quia sunt fuga. Aliquam?
      </div>
    </template>
    <template #bar></template>
    <template #main>
      <div class="row">
        <div class="col">
          <h1>{{ pageTitle }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum nostrum saepe enim natus voluptates animi numquam molestiae
            a accusamus totam, doloribus exercitationem delectus soluta
            consectetur ab magni fugit eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum nostrum saepe enim natus voluptates animi numquam molestiae
            a accusamus totam, doloribus exercitationem delectus soluta
            consectetur ab magni fugit eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum nostrum saepe enim natus voluptates animi numquam molestiae
            a accusamus totam, doloribus exercitationem delectus soluta
            consectetur ab magni fugit eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum nostrum saepe enim natus voluptates animi numquam molestiae
            a accusamus totam, doloribus exercitationem delectus soluta
            consectetur ab magni fugit eius.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            laborum nostrum saepe enim natus voluptates animi numquam molestiae
            a accusamus totam, doloribus exercitationem delectus soluta
            consectetur ab magni fugit eius.
          </p>
        </div>
      </div>
    </template>
    <template #footer></template>
  </axdd-sidebar>
</template>

<script>
export default {
  name: "DocsSandboxSidebarIndex",
  components: {},
  props: {},
  data: function () {
    return {
      // minimum application setup overrides
      appName: "MyApp",
      appRootUrl: "/",
      signOutUrl: "/signout",
      pageTitle: "Home",
      userNetid: "myusername",
      userOfficial: "MYOFFICAL NAME",
      userPreferred: "Preferred Name",
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
