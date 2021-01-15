<template>
  <div class="support-tools">
    <div class="d-md-flex align-self-stretch">
      <nav class="p-4 bg-light d-md-flex flex-md-column justify-content-md-between">
        <div class="">
          <div class="p-0 mb-3 h3 text-center text-uppercase">
            <div class="d-inline text-purple font-weight-bold">RTTL</div>
            <div class="d-inline text-muted font-weight-light">Support</div>
          </div>
          <div class="text-center mb-4">
            <div class="d-inline">javerage</div>
            <div class="d-inline ml-2">
              <a href="#" class="badge badge-danger text-uppercase font-weight-light">Logout</a>
            </div>
          </div>
        </div>
        <div class="h-100">
          <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
          <ul class="list-unstyled">
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
          </ul>

          <div class="small mb-1 font-weight-bold text-secondary text-uppercase">Heading</div>
          <ul class="list-unstyled">
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
            <li>
              <a href="#">Page Link</a>
            </li>
          </ul>
        </div>
        <div class="">
          <div class="small">Copyright &copy; 2012-2021 UW Information Technology - AXDD</div>
        </div>
      </nav>

      <main class="p-4">
        <h1 class="h3 p-0 mb-4 text-uppercase">Page Title</h1>

        <h2 class="h4">Section title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
          Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
          distinctio atque explicabo voluptatum nemo.
        </p>

        <h2>Section title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
          Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
          distinctio atque explicabo voluptatum nemo.
        </p>

        <h2>Section title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
          Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
          distinctio atque explicabo voluptatum nemo.
        </p>

        <h2>Section title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
          Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
          distinctio atque explicabo voluptatum nemo.
        </p>

        <h2>Section title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum voluptatem ipsa?
          Error earum hic nihil itaque ullam corporis eum, modi, quaerat placeat velit numquam
          distinctio atque explicabo voluptatum nemo.
        </p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.sb-show-main {
  .support-tools {
    padding: 0 !important;
    border: dashed 1px lightgrey;
  }
}

@media (min-width: 768px) {
  nav {
    min-width: 260px;
    max-width: 260px;
  }
}
</style>
