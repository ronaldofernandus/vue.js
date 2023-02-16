<template>
  <div class="result">
    <Navbar />
    <div class="container">
      <div class="row justfy-content-center mt-5">
        <div class="col text-center">
          <img src="assets/images/otw.png" width="300" alt="" />
          <h2><strong>Sukses</strong></h2>
          <h4>Pesanan Anda Segera Datang <br /></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Results-cart",

  components: {
    Navbar,
  },
};
</script>

<style></style>
