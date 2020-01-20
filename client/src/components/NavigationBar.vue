<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-sticky">
    <!-- sisi kiri -->
    <a
      v-on:click.prevent="goToLandingPage"
      class="navbar-brand nav-link d-flex align-items-center"
      href="#"
    >
      <i class="fab fa-wpressr fa-2x"></i>
      <a class="ml-3" href="#">
        MINI-WP
        <span v-if="isLoggedOn">( {{loggedOnName}} )</span>
      </a>
    </a>
    <navigationItem></navigationItem>

    <!-- sisi kanan -->
    <div class="nav-link">
      <a href v-on:click.prevent="goToDashboard" v-if="isLoggedOn">Dashboard</a>
      <a class="ml-3" href v-on:click.prevent="logout" v-if="isLoggedOn">
        Logout
        <i class="ml-1 fas fa-power-off"></i>
      </a>
    </div>
  </nav>
</template>

<script>
import navigationItem from "./NavigationItem";
export default {
  props: {
    isLoggedOn: Boolean,
    loggedOnName: String
  },
  data() {
    return {};
  },
  methods: {
    goToDashboard() {
      this.$emit("pageChange", "Dashboard");
    },
    goToLandingPage() {
      this.$emit("pageChange", "LandingPage");
    },
    logout() {
      this.$emit("logout");
    }
  },
  components: {
    navigationItem
  }
};
</script>

<style scoped>
a {
  font-style: oblique;
  text-decoration: none;
  color: black;
}
</style>