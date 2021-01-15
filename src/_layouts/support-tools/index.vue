<template>
  <div class="support-tools">
    <div class="d-md-flex align-self-stretch">
      <nav class="p-4 bg-light">
        <div class="p-0 mb-3 h3 text-center text-uppercase">
          <span class="text-primary font-weight-bold">RTTL</span>
          <span class="text-muted font-weight-light">Support</span>
        </div>
        <div class="text-center mb-3">javerage logout</div>

        <div class="h6 text-dark text-uppercase">Heading</div>
        <ul class="list-unstyled">
          <li>
            <a href="#">
              <span data-feather="home"></span>
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li>
            <a href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>

        <div class="h6 text-dark text-uppercase">Heading</div>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </nav>

      <main class="p-4">
        <h1 class="h2 p-0 mb-3">Page Title</h1>

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
