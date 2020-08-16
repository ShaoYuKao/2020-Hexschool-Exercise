<template>
  <div class="login">
    <div class="container">
      <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2020 夏季 JS 作品實戰班</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isLoading: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const apiUri = 'https://course-ec-api.hexschool.io/api/auth/login'

      // this.isLoading = true

      this.axios.post(apiUri, this.user)
        .then((res) => {
          const token = res.data.token
          const uuid = res.data.uuid

          // token 有效時間
          const expired = res.data.expired

          // 寫入 cookie
          document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
          document.cookie = `uuid=${uuid};expires=${new Date(expired * 1000)}; path=/`

          // this.isLoading = false

          this.$router.push('/admin')
        })
        .catch((error) => {
          console.error(error)
          // this.isLoading = false
        })
    }
  },
  created () {
  }
}
</script>
