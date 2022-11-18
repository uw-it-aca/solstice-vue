<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 bg-opaque-hover text-reset"
        active-class="bg-opaque text-black"
        to="/start/"
      >
        <span>Getting Started</span>
      </router-link>
      <button
        class="btn btn-link p-2 text-white chevron position-absolute top-0 end-0"
        id="flush-heading2"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse2"
        :aria-expanded="$route.path.includes('/start') ? true : false"
        aria-controls="flush-collapse2"
      >
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </button>
      <div
        id="flush-collapse2"
        class="collapse"
        :class="$route.path.includes('/start') ? 'show' : ''"
        aria-labelledby="flush-heading2"
      >
        <ul class="ms-4 nav flex-column small mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 bg-opaque-hover text-gray"
              active-class="bg-opaque text-black"
              to="/start/developers"
              >Developers</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link rounded-3 bg-opaque-hover text-reset"
              active-class="bg-opaque text-black"
              to="/start/designers"
              >Designers</router-link
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 bg-opaque-hover text-reset"
        active-class="bg-opaque text-black"
        to="/content/"
        >Content</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 bg-opaque-hover text-reset"
        active-class="bg-opaque text-black"
        to="/tokens/"
        >Design Tokens</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 bg-opaque-hover text-reset"
        active-class="bg-opaque text-black"
        to="/elements/"
        >Elements</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 bg-opaque-hover text-reset"
        active-class="bg-opaque text-black"
        to="/patterns/"
        >Patterns</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 bg-opaque-hover text-reset chevron"
        to="#"
        id="flush-heading1"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse1"
        aria-expanded="false"
        aria-controls="flush-collapse1"
      >
        <span>Accordion Item #1</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse1"
        class="collapse"
        aria-labelledby="flush-heading1"
      >
        <div class="px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam
          repellat velit recusandae obcaecati facere quibusdam modi rem, ducimus
          voluptates nobis? Excepturi, blanditiis dicta. Nostrum consequuntur
          eius iure aut odit!
        </div>
      </div>
    </li>

    <li aria-hidden="true" class="nav-item mt-1 mb-2">
      <a href="#" class="nav-link disabled text-dark d-block p-0 internal-link"
        ><hr class="m-0 bg-gray" />
        <span class="visually-hidden">Navigation separator</span></a
      >
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.chevron i {
  display: inline-block;
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
  font-weight: bolder;
}

.chevron[aria-expanded="true"] i {
  transform: rotate(90deg);
}

.bi-chevron-right::after {
  font-weight: bolder !important;
}
</style>
