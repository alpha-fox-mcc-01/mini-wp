<template>
  <main v-if="currentPage == 'register'">
    <div class="container my-5">
      <div class="row">
        <div class="col-6 offset-3 offset-lg-0 col-lg-4 mb-2 mb-lg-0 text-center text-lg-left align-self-center">
          <h1 class="welcome-heading">Welcome</h1>
          
          <div v-if="errors">
            <div class="alert alert-danger" role="alert" v-for="(error, i) in errors" :key="i">
              {{error}}
            </div>
          </div>
          
          
          <div class="alert alert-danger" role="alert" v-if='error'>
            {{error}}
          </div>
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="Harry" v-model="user.firstName" required>
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Potter" v-model="user.lastName">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="harry@potter.com" v-model="user.email" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="********" v-model="user.password" required>
            </div>
            <button type="submit" class="btn btn-dark">Register</button>
          </form>
          <p class="mt-3">Already have an account? <span class="text-secondary pointer span-hover" @click="changePage('login')">Sign In here</span></p>
        </div>
        <div class="col-lg-8 align-self-center d-none d-lg-block">
          <img class="landing-img" src="../assets/register.jpg" alt="multitasking-guy">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from '../../api/axiosInstance.js';

export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      error: '',
      errors: []
    }
  },
  props: {
    currentPage: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    registerUser() {
      axios({
        method: "POST",
        url: 'user/register',
        data: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(result => {
          this.$emit('notificationRegister', `Thanks ${result.data.userName}, you are registered.`);
          
          this.user.firstName = '';
          this.user.lastName = '';
          this.user.email = '';
          this.user.password = '';
          this.$emit('changePage', 'login')
        })
        .catch(err => {
          console.log(err.response)
          if(err.response.data.message.messages) {
            this.errors = err.response.data.message.messages;
            setTimeout(() => {
              this.errors = "";
            }, 5000)
          } else {
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