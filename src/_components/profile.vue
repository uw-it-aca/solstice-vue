<template>
  <div v-if="variant === 'flyout'" class="d-flex">
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
        <p class="small">
          {{ userOfficialName }}, {{ userPreferredName }}, {{ userPronouns }}
        </p>
        <p class="small"><a :href="profileUrl">go to profile</a></p>
        <p class="small">
          <a :href="signoutUrl" class="text-white">Sign out</a>
        </p>
      </div>
    </div>
  </div>
  <div v-else class="d-flex">
    <div class="flex-fill text-white">{{ userNetid }}</div>
    <div class="flex-fill text-end">
      <a :href="signoutUrl" class="text-white">Sign out</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "standard",
    },
    userNetid: {
      type: String,
      required: true,
    },
    userOfficialName: {
      type: String,
    },
    userPreferredName: {
      type: String,
    },
    userPronouns: {
      type: String,
    },
    profileUrl: {
      type: String,
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
