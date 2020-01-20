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

<style >


.post-preview{
    margin-top: 10rem;

}
  .jumbotron {
    height: 25rem;
    margin-bottom: 10rem;
  }

  .card {
    margin: 0 auto;
    /* Added */
    float: none;
    /* Added */
    margin-bottom: 10px;
    /* Added */
    border: none;

  }

  a {
    color: #212529;
    transition: all 0.2s;
  }

  a:focus,
  a:hover {
    color: #0085A1;
  }

  body {
font-size: 20px;
color: #212529;
font-family: 'Lora', 'Times New Roman', serif;
}

p {
line-height: 1.5;
margin: 30px 0;
}

p a {
text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
font-weight: 800;
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#footer{
background: #333333;
color: #ffffff;
text-align: center;
padding: 30px;
margin-top: 30px;
}
/* 
::-moz-selection {
color: #fff;
background: #0085A1;
text-shadow: none;
}



#mainNav {
position: absolute;
border-bottom: 1px solid #e9ecef; */
/* background-color: white;
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#mainNav .navbar-brand {
font-weight: 800;
color: #343a40;
}

#mainNav .navbar-toggler {
font-size: 12px;
font-weight: 800;
padding: 13px;
text-transform: uppercase;
color: #343a40;
}

#mainNav .navbar-nav > li.nav-item > a {
font-size: 12px;
font-weight: 800;
letter-spacing: 1px;
text-transform: uppercase;
}


header.masthead {
margin-bottom: 50px;
background: no-repeat center center;
background-color: #868e96;
background-attachment: scroll;
position: relative;
background-size: cover;
background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);
}

header.masthead .overlay {
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: #212529;
opacity: 0.5;
}

header.masthead .page-heading,
header.masthead .post-heading,
header.masthead .site-heading {
padding: 200px 0 150px;
color: white;
}


header.masthead .page-heading,
header.masthead .site-heading {
text-align: center;
}

header.masthead .page-heading h1,
header.masthead .site-heading h1 {
font-size: 50px;
margin-top: 0;
}

header.masthead .page-heading .subheading,
header.masthead .site-heading .subheading {
font-size: 24px;
font-weight: 300;
line-height: 1.1;
display: block;
margin: 10px 0 0;
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

header.masthead .post-heading h1 {
font-size: 35px;
}

header.masthead .post-heading .meta,
header.masthead .post-heading .subheading {
line-height: 1.1;
display: block;
}

header.masthead .post-heading .subheading {
font-size: 24px;
font-weight: 600;
margin: 10px 0 30px;
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

header.masthead .post-heading .meta {
font-size: 20px;
font-weight: 300;
font-style: italic;
font-family: 'Lora', 'Times New Roman', serif;
}

header.masthead .post-heading .meta a {
color: #fff;
}  */
</style>