<template>
  <axdd-boilerplate page-title="My new page title">
    <!-- page content -->
    <template #content>
      <div class="card mb-3">
        <div class="card-body">asldkjfas</div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">asldkjfas</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">asldkjfas</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">asldkjfas</div>
          </div>
        </div>
      </div>
    </template>
  </axdd-boilerplate>
</template>

<script>
import Boilerplate from './layout.vue';

export default {
  name: 'Boilerplate',
  components: {
    'axdd-boilerplate': Boilerplate,
  },
};
</script>

<style lang="scss" scoped>
</style>
