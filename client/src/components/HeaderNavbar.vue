<template>
  <div v-if="loginCondition == true">
    <header>
      <div class="logo">
        <h5 class="logo-head">change</h5>
        <h3 class="logo-sub">For the better</h3>
      </div>
    </header>

    <div class="container">
      <nav class="navbar navbar-expand-md p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#trigger">
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse d-md-flex justify-content-center" id="trigger">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <a href="#" class="nav-link">Home</a>
            </li>
            <li class="navbar-item">
              <a href="#gallery" class="nav-link">Gallery</a>
            </li>
            <li class="navbar-item">
              <a href="#blog" class="nav-link">Article</a>
            </li>
            <li class="navbar-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
            <li class="navbar-item">
              <a href="#myblog" class="nav-link">{{someoneLogin.name}}'s article &#10019;</a>
            </li>
            <li class="navbar-item">
              <a href class="nav-link" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: `Navbar`,
  data() {
    return {
      someoneLogin : {
        name : localStorage.getItem(`name`)
      }
    };
  },
  props: {
    loginCondition: Boolean
  },
  methods: {
    logout() {
      localStorage.removeItem(`token`);
      this.$emit(`toggle-loginCondition`, false);

      // this.someoneLogin.condition = false
      // this.someoneLogin.token = ''
      // this.someoneLogin.name = ''
    }
  }
};
</script>

<style>
</style>