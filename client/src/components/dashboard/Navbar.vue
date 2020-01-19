<template>
  <nav class="navbar navbar-light p-0">
    <a class="navbar-brand logo col-2 mr-0 border-bottom border-right" href="#" @click="changePage('dashboard')">OASIS</a>
    <ul class="navbar-nav col border-bottom flex-row bg-greeny-dark">
      <li class="nav-item mx-3">
        <a href="#" class="nav-link">Blog</a>
      </li>
      <li class="nav-item ml-auto px-3 nav-link" v-if='message'>
        {{message}}
      </li>
      <li class="nav-item nav-link px-3 pointer" @click='logoutUser'>
        Sign Out
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "DashboardNavbar",
  props: {
    message: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    logoutUser() {
      localStorage.clear();
      this.$emit('changePage', 'landingPage');
    }
  }
}
</script>

<style>
  .logo {
    font-family: "Abril Fatface", Georgia, 'Times New Roman', Times, serif;
  }
</style>