<template>
  <div>
    <LandingNavbar
    :currentPage="currentPage"
    @changePage="changePage">
    </LandingNavbar>

    <LandingContent
    :currentPage="currentPage"
    @changePage="changePage">
    </LandingContent>

    <RegisterPage
    :currentPage="currentPage"
    @changePage="changePage"
    @notificationRegister="notificationRegister">
    </RegisterPage>

    <LoginPage
    :currentPage="currentPage"
    :notification="notification"
    @changePage="changePage">
    </LoginPage>
  </div>
</template>

<script>
import LandingNavbar from './Navbar.vue';
import LandingContent from './Content.vue';
import RegisterPage from '../registerPage/index';
import LoginPage from '../loginPage';

export default {
  name: 'LandingPage',
  components: {
    LandingNavbar,
    LandingContent,
    RegisterPage,
    LoginPage
  },
  props: {
    currentPage: String,
    notification: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
    notificationRegister(notification) {
      this.$emit('notificationRegister', notification);
    }
  }

}
</script>

<style scoped>

</style>