<template>
<div>
  <LoginPage 
  @login='changePage'
  :currentPage='currentPage'
  > </LoginPage>
  <BaseHeader
  @navbar='changePage'
  :currentPage='currentPage'
  ></BaseHeader>
  <RegisterPage
  @register='changePage'
  :currentPage='currentPage'
  > </RegisterPage>
  <BlogFeed 
  :currentPage='currentPage'
  ></BlogFeed>
  <DashboardPage 
  :currentPage='currentPage'
  ></DashboardPage>
  <BaseFooter
  :currentPage='currentPage'></BaseFooter>
</div>
</template>

<script>

import BaseHeader from './components/BaseHeader'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import BlogFeed from './components/BlogFeed'
import DashboardPage from './components/DashboadPage'
import BaseFooter from './components/BaseFooter'
import axios from 'axios'

export default {
  name : 'App',
  data() {
    return {
      currentPage : 'login',
      articles : [] 
    };
  },
  components : {
    BaseHeader,
    LoginPage,
    RegisterPage,
    BlogFeed,
    DashboardPage,
    BaseFooter
  },
  methods : {
    changePage (page){
      // console.log('dipanggil anak', page);
      this.currentPage = page
    },
    getAllArticle() {
      axios({
        method: "GET",
        url: "http://localhost:3000/articles"
      })
        .then(({ data }) => {
          console.log(data);

          this.articles = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.currentPage = 'blog-feed'
      this.getAllArticle()
    } else {
      this.currentPage = 'login'
    }
  }

};
</script>

<style scoped>
</style>