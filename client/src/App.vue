<template>
<div> 
  <navbar v-if="currentPage !== 'loginform'" v-on:change-page="changePage" :currentPage="currentPage"></navbar>
 <landingpage v-on:change-page="changePage" :currentPage="currentPage" ></landingpage>
  <dashboard v-on:change-page="changePage" :currentPage="currentPage"></dashboard>
  <loginform  v-on:change-page="changePage" :currentPage="currentPage"></loginform>
  <signupform v-on:change-page="changePage" :currentPage="currentPage"> </signupform>
</div>
 
</template>

<script>
import Swal from 'sweetalert2'
import navbar from "./components/navbar-component"
import dashboard from "./components/dashboard"
import landingpage from "./components/landingpage"
import loginform from "./components/loginpage"
import signupform from "./components/signupform"
export default {
  data() {
    return {
      message: 'Hello world',
      currentPage: 'landingpage',
      articles: [],
      drafts: [],
      notification: '',
    };
  },
  components: {
    navbar,
    dashboard,
    landingpage,
    loginform,
    signupform   
  },
  methods : {
    changePage(page) {
      this.currentPage = page
    },
    getArticles() {
            console.log('getArticles kepanggil')
            axios.get('http://35.197.145.19/articles', {
                headers: {
                  access_token : localStorage.getItem('access_token')
                }
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data.result
                 })
                 .catch(err => {
                     console.log(err)
                 })
    },
    userLogout() {
            this.currentPage = 'landingpage'
            localStorage.removeItem('access_token')
    },
     getDrafts() {
            axios.get('http://35.197.145.19/articles/drafts', {
                headers: { 
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(({ data }) => {
                console.log(data)
                this.drafts = data.result
            })
            .catch(err => {
                console.log(err)
            })
    },
  },
  created: function(){
    if(localStorage.getItem('access_token')){
        this.currentPage = 'dashboard'
    }
    this.getArticles()
    this.getDrafts()
  }
};
</script>


<style scoped>
</style>