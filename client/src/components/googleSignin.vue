<template>
  <div id="google-signin-btn"></div>
</template>

<script>
import axios from "../axios";
export default {
  methods: {
    onSignIn(user) {
      const profile = user.getBasicProfile();
      console.log(profile);
      axios({
        method: "POST",
        url: "/users/gAuth",
        data: {
          email: profile.U3
        }
      }).then(({ data }) => {
        this.$emit("verify");
        localStorage.setItem("access_token", data);
      });
    }
  },
  mounted() {
    gapi.signin2.render("google-signin-btn", {
      onsuccess: this.onSignIn
    });
  }
};
</script>