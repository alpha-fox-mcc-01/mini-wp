<template>
  <main v-if="currentPage === 'login'">
    <div class="container my-5">
      <div class="row">
        <div class="col-6 offset-3 offset-lg-0 col-lg-4 mb-2 mb-lg-0 text-center text-lg-left align-self-center">
          <h1 class="welcome-heading">Welcome back</h1>
          <div class="alert alert-warning" role="alert" v-if='notification'>
            {{notification}}
          </div>
          <div class="alert alert-danger" role="alert" v-if='error'>
            {{error}}
          </div>
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="harry@potter.com" v-model="user.email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="********" v-model="user.password" required>
            </div>
            <button type="submit" class="btn btn-dark">Sign In</button>
          </form>
          <p class="mt-3">Don't have an account? <span class="text-secondary pointer span-hover" @click="changePage('register')">Register here</span></p>
        </div>
        <div class="col-lg-8 align-self-center d-none d-lg-block">
          <img class="landing-img" src="../../img/register.jpg" alt="multitasking-guy">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginPage",
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: ''
    }
  },
  props: {
    currentPage: String,
    notification: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    loginUser() {
      axios({
        method: "POST",
        url: 'http://localhost:3000/user/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(result => {
          localStorage.setItem('access_token', result.data.token);
          localStorage.setItem('userName', result.data.userName);
          this.$emit('changePage', 'dashboard')
          this.user.email = '';
          this.user.password = '';
        })
        .catch(err => {
          if(err.response.data.message) {
            this.error = err.response.data.message;
            setTimeout(() => {
              this.error = "";
            }, 3000)
          }
        })
    }
  }
}
</script>

<style scoped>
  .landing-img {
    max-width: 100%;
  }

</style>