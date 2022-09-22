<template>
  <div v-if="variant === 'flyout'" class="d-flex">
    <div class="flex-fill dropdown">
      <a
        v-if="userOverride"
        class="text-white text-decoration-none"
        href="#"
        role="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ><span class="me-1">{{ userNetid }}</span>
        <i class="bi bi-arrow-right text-danger me-1"></i>
        <span class="text-decoration-underline">{{ userOverride }}</span></a
      >

      <a
        v-else
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
        <p v-if="userOverride" class="small text-danger">
          overriding as <i class="bi bi-arrow-right text-danger"></i>
          {{ userOverride }}
        </p>
        <p class="small">
          {{ userOfficialName }}, {{ userPreferredName }}, {{ userPronouns }}
        </p>
        <p class="small"><a :href="profileUrl">go to profile</a></p>

        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="d-flex">
    <div v-if="userOverride" class="flex-fill text-white">
      <span class="me-1">{{ userNetid }}</span>
      <i class="bi bi-arrow-right text-danger"></i> {{ userOverride }}
    </div>
    <div v-else class="flex-fill text-white">{{ userNetid }}</div>

    <div class="flex-fill text-end">
      <slot v-if="signoutUrl"
        ><a :href="signoutUrl" class="text-white">Sign out</a></slot
      >
      <slot v-else><a href="sadkf">sign out test</a></slot>
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
    userOverride: {
      type: String,
      required: false,
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
    signoutUrl: {
      type: String,
    },
    profileUrl: {
      type: String,
    },
  },
  data: function () {
    return {};
  },
};
</script>
