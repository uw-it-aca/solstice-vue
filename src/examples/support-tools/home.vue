<template>
  <axdd-layout page-title="Home">
    <div class="card mb-3 bg-dark hover:bg-danger">
      <div class="card-body text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        nemo error quia vitae sequi tempore quidem commodi amet eveniet est
        corporis, dignissimos repudiandae consequatur architecto in? A deleniti
        pariatur voluptate.
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-3 bg-dark">
          <div class="card-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            distinctio id vitae labore est consectetur suscipit sed. Voluptate
            quasi qui recusandae pariatur incidunt rerum accusamus dignissimos
            sunt? Ex, perspiciatis excepturi!
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam, explicabo deleniti officia nisi assumenda? Quae ducimus
            deleniti deserunt! Unde reiciendis sint voluptates eos ex soluta sed
            illo adipisci amet!
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-3 border-white hover:border">
          <div class="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            deleniti fugit culpa tenetur illo. Ad quidem atque minima eos, error
            modi et, asperiores mollitia nemo corrupti accusamus saepe earum
            magni.
          </div>
        </div>
      </div>
    </div>
  </axdd-layout>
</template>

<script>
import SupportLayout from "./layout.vue";

export default {
  name: "SupportHome",
  components: {
    "axdd-layout": SupportLayout,
  },
};
</script>

<style lang="scss" scoped></style>
