<template>
  
    <div id="landing-page" v-if="loginCondition === false">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <!-- bawah ini login -->
                <div class="login" v-if="userRegister === false">
                  <div class="logo text-center">
                    <h5 class="logo-head">change</h5>
                    <h3 class="logo-sub">For the better</h3>
                  </div>
                  <form class="form-signin">
                    <div class="form-label-group mb-4">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        placeholder="Email address"
                        required
                        autofocus
                        v-model="userLogin.email"
                      />
                      <!-- <label for="inputEmail">Email address</label> -->
                    </div>

                    <div class="form-label-group mb-4">
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        required
                        v-model="userLogin.password"
                      />
                      <!-- <label for="inputPassword">Password</label> -->
                    </div>
                    <button
                      type="button"
                      class="btn btn-dark px-5 btn-block"
                      style="font-family: 'Playfair Display SC', serif;"
                      @click="login"
                    >Sign in</button>
                    <hr class="my-4" />
                    <!-- <button class="btn btn-lg btn-danger btn-block" type="submit"><i
                                    class="fab fa-google mr-2"></i>
                    Sign in with Google</button>-->
                    <p
                      class="text-center mt-4"
                      @click="userRegister = true"
                      style="cursor: pointer;"
                    >Don't have an account yet? Click here to Register</p>
                  </form>
                </div>
                <!-- login sampai sini -->
                <!-- dibawah ini untuk register -->
                <!-- still trouble here -->
                <div class="register" v-if="userRegister === true">
                  <h5 class="card-title text-center">Register</h5>
                  <form class="form-signin">
                    <div class="form-label-group my-4">
                      <input
                        type="text"
                        id="inputName"
                        class="form-control"
                        v-model="userRegisterData.name"
                        placeholder="Your name"
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-label-group my-4">
                      <input
                        type="email"
                        id="inputEmail"
                        class="form-control"
                        v-model="userRegisterData.email"
                        placeholder="Email address"
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-label-group my-4">
                      <input
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        v-model="userRegisterData.password"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <button
                      type="button"
                      class="btn btn-dark btn-block"
                      @click="registerUser"
                      style="font-family: 'Playfair Display SC', serif;"
                    >Sign Up</button>
                    <p
                      class="text-center mt-5"
                      @click="userRegister = false"
                      style="cursor : pointer"
                    >
                      Back
                      to sign in
                    </p>
                  </form>
                </div>
                <!-- sampai sini -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from "axios"

export default {
  name: `LoginRegister`,
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      },
      userRegisterData: {
        name: "",
        email: "",
        password: ""
      }
    }
  },
  props : {
     loginCondition : Boolean,
     userRegister : Boolean
  },
  methods: {
    registerUser() {
      if (
        this.userRegisterData.name.length < 1 ||
        this.userRegisterData.email.length < 1 ||
        this.userRegisterData.password.length < 1
      ) {
        console.log(`tidak boleh kosong bos`);
      } else {
        axios({
          method: `POST`,
          url: `http://localhost:3000/users/register`,
          data: {
            name: this.userRegisterData.name,
            email: this.userRegisterData.email,
            password: this.userRegisterData.password
          }
        })
          .then(response => {
            console.log(response);
            this.userRegister = false;

            this.userRegisterData.name = "";
            this.userRegisterData.email = "";
            this.userRegisterData.password = "";
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    login() {
      if (
        this.userLogin.email.length < 1 ||
        this.userLogin.password.length < 1
      ) {
        console.log(`tidak boleh kosong bos`);
      } else {
        axios({
          method: `POST`,
          url: `http://localhost:3000/users/login`,
          data: {
            email: this.userLogin.email,
            password: this.userLogin.password
          }
        })
          .then(response => {
            console.log(response);

            if (response.data.token) {
              this.$emit(`toggle-loginCondition`, true)
              
              this.userLogin.email = "";
              this.userLogin.password = "";
              localStorage.setItem(`token`, response.data.token);
              localStorage.setItem(`name`, response.data.name);
              localStorage.setItem(`userId`, response.data.userId);

            // JANGAN LUPA NYALAIN LAGI COK
            //   this.getAllArticles(); 
            //   this.getMyArticle();

              this.someoneLogin.condition = true;
              this.someoneLogin.token = response.data.token;
              this.someoneLogin.name = response.data.name;
              this.someoneLogin.userId = response.data.userId;
            } else {
              console.log(`wrong email / password`);
            }
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    },

  }
};
</script>

<style>
</style>