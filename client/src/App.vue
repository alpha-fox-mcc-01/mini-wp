<template>
<div>
  <loginRegister 
  :loginCondition="loginCondition"
  v-on:toggle-loginCondition="toggleLoginCondition"
  ></loginRegister>

  <HeaderNavbar
  :loginCondition="loginCondition"
  v-on:toggle-loginCondition="toggleLoginCondition"
  ></HeaderNavbar>

  <Showcase
  :loginCondition="loginCondition"
  ></Showcase>

  <Gallery
  :loginCondition="loginCondition"
  ></Gallery>

  <Articles
  :loginCondition="loginCondition"
  :article="article"
  ></Articles>

  <MyArticles
  :loginCondition="loginCondition"
  :article="article"
  v-on:after-delete="getAllArticles"
  v-on:after-create="getAllArticles"
  ></MyArticles>

  <Contact
  :loginCondition="loginCondition"
  ></Contact>
</div>


</template>

<script>
import axios from "axios"
import LoginRegister from "./components/LoginRegister";
import HeaderNavbar from "./components/HeaderNavbar";
import Showcase from "./components/Showcase"
import Gallery from "./components/Gallery"
import Articles from "./components/Articles"
import MyArticles from "./components/MyArticles"
import Contact from "./components/Contact"

export default {
  name: "App",
  data() {
    return {
      message: "Vue nya nyambung yay",
      loginCondition: false,
      userRegister: false, //ini untuk status login untuk v-if conditional
      
      someoneLogin: {
        token: "",
        name: "",
        userId: ""
      },
      article : Array
    };
  },
  methods: {
    getAllArticles() {
      axios({
        method: `GET`,
        url: `http://localhost:3000/articles`
      })
        .then(response => {
          // console.log(response);
          this.article = response.data;
          // console.log(this.article, `wawawa`);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toggleLoginCondition(toggle) {
      this.loginCondition = toggle
    }
  },
  components: {
    LoginRegister,
    HeaderNavbar,
    Showcase,
    Gallery,
    Articles,
    MyArticles,
    Contact
  },
  created : function() {
    this.getAllArticles();
    if (localStorage.getItem(`token`)) {
      this.loginCondition = true
      this.someoneLogin.condition = true;
      this.someoneLogin.name = localStorage.getItem(`name`);
    }
  }
};
</script>

<style>
</style>