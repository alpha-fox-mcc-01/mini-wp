<template>
  <div v-if="currentPage === 'landingPage'">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-4 mb-2 mb-lg-0 text-center text-lg-left align-self-center">
          <h1 class="welcome-heading">Welcome to Oasis</h1>
          <p class="lead">We help you share your thought to the world</p>
          <button @click="changePage('register')" class="btn btn-dark">Start here</button>
        </div>
        <div class="col-lg-8 align-self-center">
          <img class="landing-img" src="../../img/landing.jpg" alt="multitasking-guy">
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="sub-head mb-3 text-center">Share Your World</h1>
      <hr class="sub-border">
  
      <div class="row my-5">
        <div class="col-md-4">
          <h4>Easy to Use</h4>
          <p>You only need to register and sign in, then you can share your story to the world.</p>
        </div>
        <div class="col-md-4">
          <h4>Read Public Article</h4>
          <p>After sign in you can also read other's writer article to find some inspiration.</p>
        </div>
        <div class="col-md-4">
          <h4>Share Income</h4>
          <p>In the future you will get income from how many reader that read your article.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingContent",
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
  .welcome-heading {
    font-size: 4rem;
  }

  .landing-img {
    max-width: 100%;
  }
</style>