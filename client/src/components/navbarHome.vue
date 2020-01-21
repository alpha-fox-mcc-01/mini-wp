<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      v-if="page !== 'login' && page !== 'register' "
    >
      <a class="navbar-brand" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/WP.png" height="30" class="d-inline-block align-top" alt />
        Mini-WP
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="changePageNav('home')">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="changePageNav('addPost')">
              ADD post
              <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="changePageNav('myarticle')">
              My Article
              <span class="sr-only"></span>
            </a>
          </li>
        </ul>

          <ul class="nav navbar-nav ml-auto">
             <li class="nav-item ml-3 active">
              <a href="#" class="nav-link">{{usernav}}</a>
              <span class="sr-only"></span>
            </li>
            <li class="nav-item ">
              
            </li>
            <li class="nav-item ">
              <a href="#" class="nav-link" @click.prevent="signOut">SignOut</a>
              <span class="sr-only"></span>
            </li>
            </ul>
          <!-- <ul class="navbar-nav ml-auto">
           
            
          </ul> -->
        
      </div>
    </nav>

    <header
      class="masthead"
      style="background-image: url('https://spacewallpapers.org/wp-content/uploads/2014/11/new-day-of-the-mars.jpg')"
    ></header>
  </div>
</template>

<script>
name: "navbarHome";
export default {
  data() {
    return {
      userNav:''
    };
  },
  props: {
    page: String
  },
  methods: {
    changePageNav(laman) {
      console.log("dari navbarr", laman);
      this.$emit("change-Page", laman);
    },
    signOut() {
      localStorage.removeItem("access_token");
      console.log("terhapus");
      this.$emit("change-Page", "login");
    }
  },
  computed:{
            usernav(){
                // this.getArticle()
                if (localStorage.getItem('name')){
                 return this.userNav = localStorage.getItem('name')
                }
                // console.log('kerja nih sebelum', this.articles);
                // const result = this.articles.filter(word => word.publish == this.status);
                // return result
            }
        },
};
</script>

<style>
</style>