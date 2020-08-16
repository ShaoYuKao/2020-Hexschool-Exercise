<template>
  <div id="home">
    <div id="nav">
      <router-link to="/">首頁</router-link>|
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/products">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/login">登入</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  }
}
</script>
