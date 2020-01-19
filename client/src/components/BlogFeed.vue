<template>
  <div
    class="container"
    v-if="currentPage === 'blog-feed' && currentPage !== 'login' && currentPage !== 'register'"
  >
    <div v-if="currentView === 'blog-feed'">
      <h2 class="text-center">Blog Feed</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="article in shownArticle" :key="article._id">
          <div class="card" style="width: 100%;">
            <img src class="card-img-top" alt />
            <div class="card-body">
              <h3>{{article.title}}</h3>
              <p class="card-text"></p>
              <p>{{article.content}}</p>
              <small>Posted By : {{article.authorId.name}}</small>
              <br />
              <small>Posted At : {{article.createdAt}}</small>
              <br />
              <button class="btn-primary" @click="getArticleById(article._id), changeView('view-article')">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentView === 'view-article'">
      <h2 class="text-center"> Title : {{article.title}}</h2>
      <div class="row mx-2 my-3">
        <div class="col-auto px-0 py-0">
          <img
            src="https://res.cloudinary.com/teepublic/image/private/s--0GfzFgZU--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-163,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-274,y_-215/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1512053883/production/designs/2122665_1.jpg"
            class="img-fluid"
            alt="image"
          />
        </div>
        <div class="col">
          <div class="card-block px-2">
            <p class="card-text">{{article.content}}</p>
          </div>
        </div>
        <div class="card-footer w-100 text-muted">
          <small>Posted By : {{article.authorId.name}}</small>
          <br />
          <small>Posted At : {{article.createdAt}}</small>
          <br />
          <button class="btn-primary">Favorite</button>
          <button class="btn-primary" @click="changeView('blog-feed')">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogFeed",
  data() {
    return {
      currentView : 'blog-feed',
      articles: [],
      article: {}
    };
  },
  props: {
    currentPage: String
  },
  computed: {
    shownArticle: function() {
      this.articles.forEach(article => {
        let content = "";
        if (article.content.length > 150) {
          for (let i = 0; i < 120; i++) {
            content += article.content[i];
          }
          article.content = content + "...";
        }
      });
      return this.articles;
    }
  },
  methods: {
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
    },
    getArticleById(articleId) {
      axios({
        method: "GET",
        url: `http://localhost:3000/articles/` + articleId,
        headers: {
          access_token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          // console.log(data.authorId);
          this.article = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeView(view){
      this.currentView = view
    }
  },
  created() {
    this.getAllArticle();
  }
};
</script>

<style>
h2 {
  border-bottom: 1px solid grey;
}
</style>