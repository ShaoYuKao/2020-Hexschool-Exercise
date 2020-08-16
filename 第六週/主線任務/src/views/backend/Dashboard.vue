<template>
  <div>
    <div id="nav">
      <router-link to="/admin/index">後台首頁</router-link>|
      <router-link to="/admin/products">後台產品列表</router-link>|
      <router-link to="/admin/orders">後台訂單</router-link>|
      <a href="#" @click.prevent="signOut">登出</a>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      user: {
        token: '',
        uuid: ''
      }
    }
  },
  methods: {
    signOut () {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      this.$router.push('/index')
    }
  },
  created () {
    // 取得 token 的 cookies
    this.user.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.user.uuid = document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*=\s*([^;]*).*$)|^.*$/, '$1')

    // 若無法取得 token 則返回 Login 頁面
    if (this.user.token === '') {
      this.$router.push('/login')
    }
  }
}
</script>
