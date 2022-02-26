<template>
  <layout :page-title="pageTitle">
    <!-- page content -->
    <template #title>{{ pageTitle }}</template>
    <template #content>
      <div class="card mb-3 bg-dark hover:bg-danger">
        <div class="card-body text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet
          dolorum harum eaque veniam nesciunt praesentium tempora ab illum in,
          rem facere sit esse et? Similique deleniti blanditiis provident
          perspiciatis.
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-3 bg-dark">
            <div class="card-body text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ex quod reprehenderit fugit culpa quas repudiandae numquam aut
              dolor, quam impedit expedita labore? Nam blanditiis ea reiciendis
              deleniti porro tempora.
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              nobis quaerat minima illum nesciunt cupiditate sit, qui, non, sed
              veritatis aut deleniti quia rem facere? Mollitia dolores obcaecati
              maxime eius!
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-3 border-white hover:border">
            <div class="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero
              animi illum omnis, deleniti quidem nulla qui ipsam molestias quo
              saepe ipsum quibusdam nesciunt reiciendis dolorem cum tempore id
              harum.
            </div>
          </div>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from "./layout.vue";

export default {
  components: {
    layout: Layout,
  },
  data() {
    return {
      pageTitle: "My Home title",
    };
  },
};
</script>

<style lang="scss" scoped></style>
