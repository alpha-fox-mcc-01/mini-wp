<template>
  <div class="container login" v-if="currentPage === 'login'">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header bg-warning">
          <h3 class="text-center">Login</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="userLogin">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input type="email" class="form-control" placeholder="email" v-model="email"/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input type="password" class="form-control" placeholder="password" v-model="password" />
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn float-right login_btn" />
            </div>
          </form>
        </div>
        <div class="card-footer bg-danger">
          <div class="d-flex justify-content-center links">
            <p>Don't have an account ?</p>
            <p style="cursor: pointer;" @click.prevent="changePage('register')">Register Here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  props: {
    currentPage : String
  },
  methods: {
    userLogin() {
      axios({
        method: "POST",
        url: "http://localhost:3000/users/login",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(token => {
          localStorage.setItem("token", token.data);
          this.changePage('blog-feed')
          this.email = "";
          this.password = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    changePage(page){
      this.$emit('login', page)
    }
  }
};
</script>

<style>
.login {
  position: absolute;
}
.register {
  position: absolute;
}
.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}
</style>