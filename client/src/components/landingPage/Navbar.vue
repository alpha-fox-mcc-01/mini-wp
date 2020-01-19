<template>
  <nav class="navbar navbar-expand navbar-light bg-transparent" v-if="currentPage === 'landingPage' || currentPage === 'login' || currentPage === 'register'">
    <div class="container">
      <h4 class="navbar-brand logo pointer" @click="changePage('landingPage')">OASIS</h4>
          
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item item-border mx-3 nav-link pointer">
            About Us
          </li>
          <li class="nav-item item-border mx-3 nav-link pointer">
            Contact
          </li>
          <li class="nav-item item-border mx-3 nav-link pointer" @click="changePage('login')" v-if="currentPage !== 'login'">
            Sign In
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LandingNavbar",
  props: {
    currentPage: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    }
  }

}
</script>

<style scoped>
  .logo {
    font-family: "Abril Fatface", Georgia, 'Times New Roman', Times, serif;
  }

  .item-border {
  border-bottom: 1px solid white;
  }

  .item-border:hover {
    border-bottom: 1px solid black;
  }
</style>