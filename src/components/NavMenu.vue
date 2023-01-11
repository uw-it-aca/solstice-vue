<template>
  <ul class="nav flex-column mb-5">
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 chevron text-light"
        active-class="bg-black bg-opacity-10"
        to="/start/"
        id="flush-heading2"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse2"
        :aria-expanded="$route.path.includes('/start') ? true : false"
        aria-controls="flush-collapse2"
      >
        <span>Getting Started</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse2"
        class="collapse"
        :class="$route.path.includes('/start') ? 'show' : ''"
        aria-labelledby="flush-heading2"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/start/principles"
              >Principles</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/start/designers"
              >Designers</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/start/developers"
              >Developers</router-link
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1 position-relative">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron"
        active-class="bg-black bg-opacity-10"
        to="/content/"
        id="flush-heading3"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse3"
        :aria-expanded="$route.path.includes('/content') ? true : false"
        aria-controls="flush-collapse3"
      >
        <span>Content</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse3"
        class="collapse"
        :class="$route.path.includes('/content') ? 'show' : ''"
        aria-labelledby="flush-heading3"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/voice"
              >Voice &amp; Tone</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/grammar"
              >Grammar &amp; Mechanics</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/language"
              >Language &amp; Inclusivity</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/errors"
              >Errors</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/state"
              >Page State</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/content/onboarding"
              >Onboarding</router-link
            >
          </li>
        </ul>
      </div>
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 text-light"
        active-class="bg-black bg-opacity-10"
        to="/foundations/"
        >Foundations</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="nav-link rounded-3 text-light"
        active-class="bg-black bg-opacity-10"
        to="/elements/"
        >Elements</router-link
      >
    </li>
    <li class="nav-item mb-1">
      <router-link
        class="d-flex justify-content-between nav-link rounded-3 text-light chevron"
        active-class="bg-black bg-opacity-10"
        to="/patterns/"
        id="flush-heading1"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapse1"
        :aria-expanded="$route.path.includes('/patterns') ? true : false"
        aria-controls="flush-collapse1"
      >
        <span>Patterns</span>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
      </router-link>
      <div
        id="flush-collapse1"
        class="collapse"
        :class="$route.path.includes('/patterns') ? 'show' : ''"
        aria-labelledby="flush-heading1"
      >
        <ul class="nav flex-column small fw-light mt-1">
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/patterns/layout"
              >Layout</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/patterns/navigation"
              >Navigation</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/patterns/containers"
              >Containers</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/patterns/messaging"
              >Messaging</router-link
            >
          </li>
          <li class="nav-item mb-1">
            <router-link
              class="nav-link rounded-3 text-light"
              active-class="bg-black bg-opacity-10"
              to="/patterns/feedback"
              >Feedback</router-link
            >
          </li>
        </ul>
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
