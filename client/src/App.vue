<template>
  <div>
    <MwpHeader :currentPage="currentPage" :user="user" :profilePic="profilePic" @logout="loggedOut"></MwpHeader>
    <MwpContainer
      :currentPage="currentPage"
      :user="user"
      :profilePic="profilePic"
      @registered-user="setUser"
    ></MwpContainer>
  </div>
</template>

<script>
import MwpHeader from "./components/Header";
import MwpContainer from "./components/ContentContainer";
export default {
  data() {
    return {
      user: "",
      profilePic: "",
      currentPage: "dashboard"
    };
  },
  components: {
    MwpHeader,
    MwpContainer
  },
  methods: {
    setUser(username, pic) {
      this.user = username;
      this.profilePic = pic;
    },
    loggedOut(page) {
      this.currentPage = page;
    }
  },
  created() {
    if (!localStorage.getItem("user_token")) this.currentPage = "login";
    else this.currentPage = "dashboard";
  }
};
</script>

<style>
</style>