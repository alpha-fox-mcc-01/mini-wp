<template>
  <div v-if="isLoggedOn == false" id="loginform">
    <!-- SIGN UP ? REGISTER -->
    <div v-if="signupCardShowed" class="card">
      <div class="card-body">
        <form>
          <div class="text-center">
            <h4>Signup</h4>
            <hr class="my-2" />
            <small>Welcome to miniwp. WP minified, simplified</small>
          </div>
          <br />
          <div class="form-group">
            <label>Full Name</label>
            <input required v-model="signupFullname" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Email address</label>
            <input v-model="signupEmail" type="email" required class="form-control" />

            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else. 😏</small>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input required v-model="signupPassword" type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input required v-model="signupPasswordConfirm" type="password" class="form-control" />
          </div>

          <br />
          <div v-if="signupErrors.length >= 1" class="alert alert-danger text-center">
            <b>Error:</b>
            <hr class="my-2" />
            <p v-for="(err,i) in signinErrors" :key="i">{{err}}</p>
          </div>
          <button
            v-on:click.prevent="register"
            type="submit"
            class="btn btn-primary btn-block"
          >Register</button>
          <br />
          <br />
          <p class="text-right">
            Already have an account?
            <a href="#" v-on:click.prevent="toggleCard">klik here to Signin</a>
          </p>
          <p class="text-right">change your mind and wanna use GoogleAuth instead?</p>
          <hr class="my-3" />
          <center>
            <googleSignin></googleSignin>
          </center>
        </form>
      </div>
    </div>

    <!-- SIGN IN / LOGIN -->
    <div v-else class="border-secondary card">
      <div class="card-body">
        <form>
          <h4 class="text-center">Signin and start sharing!</h4>
          <br />
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="signinEmail"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="signinPassword"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <br />
          <div v-if="signinErrors.length >= 1" class="alert alert-danger text-center">
            <b>Error:</b>
            <hr class="my-2" />
            <p v-for="(err,i) in signinErrors" :key="i">{{err}}</p>
          </div>
          <button v-on:click.prevent="login" type="submit" class="btn btn-primary btn-block">Sign in</button>
          <br />
          <br />
          <p class="text-right">
            Doesn't have any account?
            <a href="#" v-on:click.prevent="toggleCard">klik here to Signup</a>
          </p>
          <p
            class="text-right"
          >or use your google account to skip registration process and login direcly</p>
          <hr class="my-3" />
          <center>
            <googleSignin></googleSignin>
          </center>
        </form>
      </div>
    </div>

    <br />
    <br />
  </div>
</template>

<script>
import axios from "../axios";
import Swal from "sweetalert2";

import googleSignin from "./googleSignin";
export default {
  props: {
    isLoggedOn: Boolean
  },
  components: {
    googleSignin
  },
  data() {
    return {
      signupCardShowed: false,
      signupFullname: "",
      signupEmail: "",
      signupPassword: "",
      signupPasswordConfirm: "",
      signupErrors: [],

      signinEmail: "",
      signinPassword: "",
      signinPasswordConfirm: "",
      signinErrors: []
    };
  },
  methods: {
    onSignIn(googleUser) {
      console.log("fireds");

      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
    toggleCard() {
      this.signupCardShowed = !this.signupCardShowed;
    },
    register() {
      if (this.signupPassword !== this.signupPasswordConfirm) {
        this.signupErrors.push("Password does not match");
      } else {
        axios({
          method: "POST",
          url: "/users/signup",
          data: {
            name: this.signupFullname,
            email: this.signupEmail,
            password: this.signupPassword,
            passwordConfirm: this.signupPasswordConfirm
          }
        })
          .then(response => {
            console.log(response);
            Swal.fire({
              icon: "success",
              title: `Registered as: ${this.signupFullname}`,
              showConfirmButton: true,
              timer: 2000,
              showClass: {
                popup: "animated fadeInDown faster"
              },
              hideClass: {
                popup: "animated fadeOutUp faster"
              }
            });

            localStorage.setItem("access_token", data.access_token);
          })
          .catch(err => {
            this.signupErrors.push(err);
            console.log(err.response);
          });
      }
    },
    login() {
      console.log("LOGIN");

      axios({
        method: "POST",
        url: "/users/signin",
        data: {
          email: this.signinEmail,
          password: this.signinPassword
        }
      })
        .then(({ data }) => {
          const access_token = data;
          localStorage.setItem("access_token", data.access_token);
          this.$emit("verify");
        })
        .catch(err => {
          console.log(err);
          this.signinErrors.push("Wrong Username and Password");
        });
    }
  }
};
</script>

<style scoped>
</style>