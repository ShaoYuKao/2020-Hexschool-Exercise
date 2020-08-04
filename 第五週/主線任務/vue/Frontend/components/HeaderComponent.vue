<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="javascript:void(0);">Nintendo Switch 遊戲專區</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="./index.html">
            產品列表
          </a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <p class="mr-2" style="cursor: pointer;" @click="gotoAccount()">
              <i class="fas fa-cart-plus fa-2x text-danger"></i>
              <span class="h5">
                <span class="badge badge-danger">{{this.productsCartCount}}</span>
              </span>
            </p>
          </li>
          <li class="nav-item active">
            <button type="button" class="btn btn-outline-primary">
              登入
            </button>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
module.exports = {
  props: ["products-cart-count"],
  methods:{
    gotoAccount(){
      window.location = 'account.html';
    }
  },
};
</script>

<style></style>