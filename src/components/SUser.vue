<template>
  <div
    class="d-flex align-items-center border border-white p-0 rounded-pill small"
    :class="{ 'bg-danger-subtle border-0': userOverride }"
  >
    <div class="flex-fill dropdown">
      <a
        class="d-flex text-white text-decoration-none p-1 chevron"
        :class="userOverride ? 'text-danger-emphasis' : 'text-white'"
        href="#"
        role="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          v-if="photoUrl"
          :src="photoUrl"
          class="img-tiny rounded-circle"
          alt="user avatar"
        >
        <img
          v-else
          src="/src/assets/images/placeholder.png"
          class="img-tiny rounded-circle"
          alt="user avatar"
        >
        <span v-if="userOverride" class="mx-2">{{ userOverride }}</span><span
          v-else
          class="mx-2"
          >{{ userNetid }}</span
        >
        <i class="bi bi-chevron-down me-1"></i></a
      >
      <div
        class="dropdown-menu dropdown-menu-end p-0"
        aria-labelledby="dropdownMenuButton1"
        style="width: 300px;"
      >
        <div
          v-if="userOverride"
          class="bg-danger-subtle text-danger-emphasis px-3 py-2 rounded-top small fw-bold"
        >
          You are overriding as another user
        </div>

        <div class="p-3">
          <div class="d-flex justify-content-center">
            <img
              v-if="photoUrl"
              :src="photoUrl"
              class="img-profile rounded-circle"
              alt="user avatar"
            >
            <img
              v-else
              src="/src/assets/images/placeholder.png"
              class="img-profile rounded-circle"
              alt="user avatar"
            >
          </div>
          <div class="mt-3">
            <slot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              pretium hendrerit dui, sit amet dapibus nulla condimentum id.
              Quisque pulvinar viverra eros, sit amet blandit tellus faucibus
              at. Maecenas a turpis sed quam vulputate placerat. Duis id eros
              sit amet turpis dignissim lacinia. Suspendisse molestie vel nisl
              sit amet convallis.
            </slot>
          </div>

          <div class="mt-3 pt-3 border-top">
            <template v-if="userOverride">
              <a
                role="button"
                class="link-quiet-danger"
                @click="clearUserOverride()"
                ><i class="bi bi-x-circle me-1"></i>Clear override</a
              >
            </template>
            <template v-else>
              <a :href="signoutUrl" class="link-quiet-danger"
                ><i class="bi bi-x-circle me-1"></i>Sign out</a
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userNetid: {
        type: String,
        required: true,
      },
      userOverride: {
        type: String,
        required: false,
      },
      photoUrl: {
        type: String,
        required: false,
      },
      signoutUrl: {
        type: String,
        required: false,
      },
      clearOverrideUrl: {
        type: String,
        required: false,
      },
    },
    data() {
      return {};
    },
    methods: {
      clearUserOverride: function () {
        return fetch(this.clearOverrideUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({ clear_override: true }),
        })
          .then((data) => {
            console.log("Override cleared:", data);
          })
          .catch((error) => {
            console.error("Error clearing override:", error);
          })
          .finally(() => {
            window.location.href = this.clearOverrideUrl;
          });
      },
    },
  };
</script>

<style lang="css" scoped>
  .img-tiny {
    height: 23px;
    width: 23px;
    object-fit: cover;
    object-position: top;
  }
  .img-profile {
    height: 86px;
    width: 86px;
    object-fit: cover;
    object-position: top;
  }

  .chevron .bi-chevron-down {
    display: inline-block;
    transition: transform 0.25s ease;
    transform-origin: 0.5em 50%;
    font-weight: bolder;
  }

  .chevron[aria-expanded='true'] .bi-chevron-down {
    transform: rotate(-180deg);
  }

  .bi-chevron-down::after {
    font-weight: bolder !important;
  }
</style>
