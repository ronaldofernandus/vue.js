<template>
  <div class="banner">
    <!--Desktop-->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Food Menu</strong><br />in Your Gadget</h2>
              <p>silahkan pilih makanan anda</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right />Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <img src="../assets/images/1.png" width="100%" />
        </div>
      </div>
    </div>

    <!--Mobile-->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/1.png" width="50%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Food Menu</strong><br />in Your Gadget</h2>
              <p>silahkan pilih makanan anda</p>
             <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right />Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner-default",
};
</script>

<style></style>
