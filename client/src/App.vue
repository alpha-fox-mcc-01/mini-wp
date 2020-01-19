<template>
  <!-- <h1>{{ message }}</h1> -->
  <div>
  <navbarHome  
  :page="page" 
  v-on:change-Page="changePage"
  ></navbarHome>

  <feedArticle 
  :articles="articles" 
  :page="page"
  v-on:read-Page="readPage"
  ></feedArticle>

  <addArticle 
  :page="page" 
  v-on:change-Page="changePage"
  v-on:article-Image="addArticleImage"
  ></addArticle>

  <myArticle 
  :page="page" 
  v-on:change-Page="changePage"
  v-on:update-Article="updateArticle"
  ></myArticle>

  <updateArticle
  :page="page" 
  v-on:change-Page="changePage"
  :updatedPost="updatedPost" 
  ></updateArticle>

<loginPage
:page="page" 
v-on:change-Page="changePage"
></loginPage>

<registerPage
:page="page" 
v-on:change-Page="changePage"
></registerPage>

<readArticle
:page="page" 
:readNow="readNow" 
v-on:read-Page="readPage"
></readArticle>

<articleImage
:page="page" 
:currentArticle="currentArticle" 
v-on:change-Page="changePage"
></articleImage>


<footerBlog></footerBlog>

  </div>
</template>
<script>
name: 'root'
import axios from 'axios'
import navbarHome from './components/navbarHome'
import feedArticle from './components/feedArticle'
import addArticle from './components/addArticle'
import myArticle from './components/myArticle'
import updateArticle from './components/updateArticle'
import loginPage from './components/loginPage'
import registerPage from './components/registerPage'
import footerBlog from './components/footerBlog'
import readArticle from './components/readArticle'
import articleImage from './components/articleImage'

export default {
  data() {
    return {
      message: 'Hello world',
      articles:{},
      page:'login',
      updatedPost: {},
      readNow:'',
      currentArticle:''

    };
  },
  components:{
    navbarHome,
    feedArticle,
    addArticle,
    myArticle,
    updateArticle,
    loginPage,
    registerPage,
    footerBlog,
    readArticle,
    articleImage
  },
  methods:{
    getArticle(){

      axios.get('http://34.87.116.76/article')
      .then(({data})=> {
        // handle success
        this.articles = data
        console.log(data);
      })
      .catch((error)=> {
        // handle error
        console.log(error);
      })

    },
    addArticleImage(id){
      console.log(id, 'berubah page')
      this.currentArticle = id
      this.page = 'articleImage'
    },
    changePage(laman){
      console.log('dari root', laman)
      this.page = laman
      this.getArticle()
    },
    updateArticle(obj){
      this.page = 'update'
      this.updatedPost = obj
    },
    readPage(laman, id){
      this.page='readarticle'
      this.readNow = id
      // console.log(laman, id), '============'
    }
  },
  created: function(){
    if(localStorage.getItem('access_token')){
            // console.log('masuk')
            this.page='home'
            this.getArticle()
            
        }
  }
};
</script>

<style scoped>
</style>