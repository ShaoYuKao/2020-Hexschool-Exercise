<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand mb-0 h1">Vue 後台管理系統</span>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#heardNavbar"
      aria-controls="heardNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="heardNavbar">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="javascript:void(0);">產品列表</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">優惠卷列表</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">圖片頁面</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);">模擬下單系統</a>
        </li>
      </ul>
    </div>
    <a href="javascript:void(0);" @click="signOut">登出</a>
  </nav>
</template>

<script>
module.exports = {
  props: ["user-token"],
  methods: {
    signOut() {
      // const url = "https://course-ec-api.hexschool.io/api/auth/logout";

      // let formData = {
      //   "api_token": this.userToken
      // };

      // //預設帶入 token
      // axios.defaults.headers.common.Authorization = `Bearer ${this.userToken}`;
      // axios.post(url, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //     "Accept": "application/json"
      //   }
      // }).then((res) => {
      //   if (res.status === 200){
      //     window.location = 'login.html';
      //   }
      // });
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "uuid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location = 'login.html';
    }
  }
};
</script>