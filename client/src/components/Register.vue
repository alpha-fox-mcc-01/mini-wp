<template>
  <div class="row logincontainer" style="background-color: darkgray; height: 70vh;">
    <div class="col-12 mx-auto my-auto logincard" style="flex-basis: 400px; height: 350px;">
      <div class="cardcontainer">
        <div class="cardtitle">Register</div>
        <div class="cardcontent">
          <form method="post" v-on:submit.prevent="userRegister">
            <input
              style="margin-bottom: 10px;"
              type="text"
              v-model="username"
              placeholder="Username"
            />
            <input style="margin-bottom: 10px;" type="email" v-model="email" placeholder="Email" />
            <input
              style="margin-bottom: 10px;"
              type="password"
              v-model="password"
              placeholder="Password"
            />
            <input
              style="margin-bottom: 10px;"
              type="password"
              v-model="retype"
              placeholder="Retype your password"
            />
            <b-form-file
              v-model="img_url"
              :state="Boolean(img_url)"
              placeholder="Browse image or drop it here"
              drop-placeholder="Drop file here..."
              style="margin-bottom: 20px; text-align:left"
            ></b-form-file>
            <p style="margin-bottom: 0;">
              <button class="btn btn-primary" type="submit">SUBMIT</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      retype: "",
      img_url: []
    };
  },
  methods: {
    userRegister() {
      console.log("===========", this.username);
      if (this.password !== this.retype) {
        this.$emit("error-message", "Password and retype do not match");
        this.password = "";
        this.retype = "";
      } else {
        let formData = new FormData();
        formData.append("avatar", this.img_url);
        formData.append("username", this.username);
        formData.append("email", this.email);
        formData.append("password", this.password);
        axios
          .post(
            "http://ec2-3-1-81-193.ap-southeast-1.compute.amazonaws.com:3000/user/register",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          )
          .then(success => {
            console.log("sukses register", success);
            this.email = "";
            this.password = "";
            this.retype = "";
            localStorage.setItem("user_token", success.data.token);
            this.$emit("change-page", "dashboard");
          })
          .catch(err => {
            this.$emit(
              "error-message",
              "This email is already registered in our server, please use another one"
            );
            this.email = "";
            console.log(err);
          });
      }
    }
  }
};
</script>

<style>
</style>