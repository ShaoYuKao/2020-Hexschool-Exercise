<template>
  <div>
    <h2>這裡是後台首頁</h2>
  </div>
</template>

<script>
export default {
  components: {
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
