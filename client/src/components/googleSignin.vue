<template>
  <div id="google-signin-btn"></div>
</template>

<script>
import axios from "../axios";
export default {
  methods: {
    onSignIn(user) {
      // do stuff, for example
      const profile = user.getBasicProfile();
      console.log(profile);
    }
  },
  mounted() {
    gapi.signin2.render("google-signin-btn", {
      onsuccess: this.onSignIn
    });
  }
};
</script>