<template>
  <div class="support-tools">
    <div class="d-md-flex align-self-stretch">
      <div class="p-4 bg-light d-md-flex flex-md-column justify-content-md-between support-sidebar">
        <div class="support-header">
          <div class="p-0 mb-3 h3 text-center text-uppercase">
            <div class="d-inline text-purple font-weight-bold mr-1">APP</div>
            <div class="d-inline text-muted font-weight-light">Support</div>
          </div>
          <div class="text-center mb-4">
            <div class="d-inline">javerage</div>
            <div class="d-inline ml-2">
              <a href="#" class="btn btn-sm btn-outline-danger
              text-uppercase font-weight-light">Logout</a>
            </div>
          </div>
        </div>
        <nav class="h-100 support-navigation" role="navigation">
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
        </nav>
        <div class="border-top pt-2 text-secondary support-footer">
          <div class="small">Copyright &copy; 2012-2021 UW Information Technology - AXDD</div>
        </div>
      </div>

      <main class="p-4">
        <h1 class="h3 p-0 mb-4 text-uppercase">Page Title</h1>
        <slot></slot>
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
  .support-sidebar {
    min-width: 260px;
    max-width: 260px;
  }

  main {
    min-height: 600px;
  }
}
</style>
