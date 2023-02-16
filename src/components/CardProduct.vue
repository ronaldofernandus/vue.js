>
<template>
  <div class="card shadows card-product" style="width: 18rem">
    <img :src="'assets/images/' + product.gambar" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <router-link :to="'/foods/' + product.id" class="btn btn-success">
        <b-icon-cart />Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-Product",
  props: ["product"],
};
</script>

<style></style>
