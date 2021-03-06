<template>
  <boilerplate :page-title="pageTitle">
    <!-- page content -->
    <template #title>{{ pageTitle }}</template>
    <template #content>
      <div class="card mb-3 bg-dark">
        <div class="card-body">asldkjfas</div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-3 bg-dark">
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
  </boilerplate>
</template>

<script>
import Boilerplate from './layout.vue';

export default {
  components: {
    'boilerplate': Boilerplate,
  },
  data() {
    return {
      pageTitle: 'My Home title',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
