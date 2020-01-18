<template>
  <div>
    <navigationBar
      v-on:pageChange="pageChange"
      v-on:logout="logout"
      :isLoggedOn="isLoggedOn"
      :loggedOnName="loggedOnName"
    ></navigationBar>
    <br />
    <br />

    <section class="container">
      <dashboard
        v-if="currentPage=='Dashboard'"
        v-on:pageChange="pageChange"
        :loggedOnId="loggedOnId"
        :isLoggedOn="isLoggedOn"
        :loggedOnName="loggedOnName"
      ></dashboard>

      <landingPage
        v-if="currentPage=='LandingPage'"
        v-on:pageChange="pageChange"
        v-on:verify="verifyToken"
        :loggedOnId="loggedOnId"
        :isLoggedOn="isLoggedOn"
        :loggedOnName="loggedOnName"
      ></landingPage>
    </section>
  </div>
</template>


<script>
import axios from "./axios";
import Swal from "sweetalert2";

import navigationBar from "./components/NavigationBar";
import dashboard from "./pages/Dashboard";
import landingPage from "./pages/LandingPage";

export default {
  name: "App",
  data() {
    return {
      isLoggedOn: false,
      loggedOnId: "",
      loggedOnName: "",
      currentPage: "Dashboard"
    };
  },
  methods: {
    pageChange(value) {
      console.log(value);
      this.currentPage = value;
    },
    logout() {
      localStorage.removeItem("access_token");
      this.isLoggedOn = false;
      this.loggedOnId = "";
      this.loggedOnName = "";
      this.currentPage = "LandingPage";
    },
    verifyToken(token) {
      const access_token = token.access_token;
      axios({
        method: "POST",
        url: "/users/verify",
        data: {
          access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: "signed-in",
            showConfirmButton: false,
            timer: 1000,
            showClass: {
              popup: "animated fadeInDown faster"
            },
            hideClass: {
              popup: "animated fadeOutUp faster"
            }
          });

          this.isLoggedOn = true;
          this.loggedOnId = data._id;
          this.loggedOnName = data.name;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    navigationBar,
    dashboard,
    landingPage
  },
  created() {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      this.verifyToken(access_token);
    }
  }
};
</script>

<style scoped>
</style>