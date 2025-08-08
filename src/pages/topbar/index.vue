<template>
  <!-- layout.vue: this is where you override the layout -->
  <STopbar
    :app-name="appName"
    :app-root-url="appRootUrl"
    :page-title="pageTitle"
    :user-name="userNetid"
    :sign-out-url="signOutUrl"
    :topbar-class="'bg-spirit-purple'"
  >
    <!--<template #system>
      <div class="bg-deco-turquoise">
        <div class="container-xl text-center text-white p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          nostrum iste! Commodi magni natus provident mollitia. Illum officiis
          molestiae optio distinctio! Repellendus quod minima recusandae
          suscipit, natus hic atque ipsa.
        </div>
      </div>
    </template>-->
    <template #profile>
      <div class="d-flex justify-content-end">
        <SProfile
          :variant="'flyout'"
          :user-netid="userNetid"
          :user-official-name="userOfficial"
          :user-preferred-name="userPreferred"
          :profile-url="'https://identity.uw.edu'"
          :signout-url="signOutUrl"
        ></SProfile>
        <SColorMode color-class="text-white" class="ms-3"></SColorMode>
      </div>
    </template>
    <!--<template #navigation>
      <ul class="nav flex-column my-3">
        <li class="nav-item mb-1 bg-secondary bg-opacity-10 rounded-3">
          <a href="#" class="nav-link d-block px-3 py-2 text-body"
            ><i class="bi bi-house-door-fill me-3"></i>Home</a
          >
        </li>
        <li class="nav-item mb-1 rounded-3">
          <a href="#" class="nav-link text-body d-block px-3 py-2"
            ><i class="bi bi-mortarboard-fill me-3"></i>Academics</a
          >
        </li>
        <li class="nav-item mb-1rounded-3">
          <a href="#" class="nav-link text-body d-block px-3 py-2"
            ><i class="bi bi-pencil-square me-3"></i>Teaching</a
          >
        </li>
        <li class="nav-item rounded-3">
          <a href="#" class="nav-link text-body d-block px-3 py-2"
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
        <li class="nav-item mb-1 rounded-3">
          <a href="#" class="nav-link text-body d-block px-3 py-2"
            ><i class="bi bi-calendar-check me-3"></i>Calendar</a
          >
        </li>
        <li class="nav-item rounded-3">
          <a href="#" class="nav-link text-dark d-block px-3 py-2"
            ><i class="bi bi-bookmark-fill me-3"></i>UW Resources</a
          >
        </li>
      </ul>
    </template>-->

    <template #bar>
      <div
        class="alert alert-warning alert-dismissible m-0 fade show border-0 border-warning border-start border-5 rounded-0"
        role="alert"
      >
        <p>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          fuga, voluptatem ad corrupti nobis eveniet tempore nam magni
          consequuntur iste unde corporis! Eum molestias nulla perspiciatis
          impedit alias hic veritatis.
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </template>
    <template #main>
      <div class="row">
        <!-- main section override -->
        <h1>
          <slot name="title">{{ pageTitle }}</slot>
        </h1>
        <slot name="content"
          ><div class="col-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, quas similique voluptatum illum molestias excepturi
            mollitia saepe minima facere eius? Provident amet laboriosam ducimus
            et illum temporibus autem est blanditiis.
          </div>
        </slot>
        <div class="col-3">dasflkjasdlkf</div>
      </div>
    </template>
    <!--<template #aside>
      <div
        class="bg-secondary bg-opacity-10 p-3 border-0 small rounded-3 mb-5 my-5"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex voluptates
        molestias hic. Esse ab inventore rerum, ipsa cupiditate quo. Aliquid
        optio, commodi sit fugit harum perspiciatis quia sunt fuga. Aliquam?
      </div>
    </template>-->
    <template #footer></template>
  </STopbar>
</template>

<script>
import STopbar from "@/components/layout/STopbar.vue";
import SColorMode from "@/components/SColorMode.vue";
import SProfile from "@/components/SProfile.vue";

export default {
  name: "DocsSandboxTopbarIndex",
  components: { STopbar, SColorMode, SProfile },
  data() {
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
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
