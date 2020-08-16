<template>
  <div>
    這裡是 後台 產品列表
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['token'],
  data () {
    return {
      products: [],
      pagination: {}
    }
  },
  methods: {
    getProducts () {
      // API
      const api = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
      })
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
