<template>
  <div class="flex-fill dropdown">
    <a
      class="text-white"
      href="#"
      role="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >{{ userNetid }}</a
    >
    <div
      class="dropdown-menu p-3 bg-dark border-0 text-white small"
      aria-labelledby="dropdownMenuButton1"
      style="width: 220px"
    >
      <p class="small">Name, Preferred, Pronouns</p>
      <p class="small">go to profile</p>
      <p class="small">
        <a :href="signoutUrl" class="text-danger">Sign out</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userNetid: {
      type: String,
      default: "asfdas",
    },
    signoutUrl: {
      type: String,
    },
  },
  data: function () {
    return {};
  },
};
</script>
