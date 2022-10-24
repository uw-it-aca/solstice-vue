<template>
  <axdd-sidebar :app-name="appName" :page-title="pageTitle">
    <template #navigation> nav </template>
    <template #bar></template>
    <template #main>
      <div class="row">
        <div class="col">
          <h1 class="text-uppercase sidebar-heading">{{ pageTitle }}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            aliquam, placeat error fuga velit repudiandae tenetur architecto.
            Vero placeat impedit quibusdam quasi cupiditate, possimus qui unde
            modi repudiandae sunt fugiat.
          </p>
        </div>
      </div>
    </template>
    <template #footer></template>
  </axdd-sidebar>
</template>

<script>
export default {
  name: "DocsSandboxGradepageIndex",
  components: {},
  data: function () {
    return {
      // minimum application setup overrides
      appName: "Gradepage",
      appRootUrl: "/sandbox/gradepage/",
      userName: "javerage",
      signOutUrl: "/signout",
      pageTitle: "Online Grade Submission",
    };
  },
  created: function () {
    // constructs page title in the following format "Page Title - AppName"
    document.title = this.pageTitle + " - " + this.appName;
  },
};
</script>
