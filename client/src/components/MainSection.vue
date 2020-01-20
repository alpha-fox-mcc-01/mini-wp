<template>
  <div v-if="loaded" class="articlesList">
    <div v-if="articles.length == 0" class="alert alert-secondary text-center">no articles</div>

    <div class="article" v-for="article in articles" v-bind:key="article._id">
      <h4 class="articles-header">{{article.title}}</h4>
      <div v-if="article.imgs">
        <center>
          <img v-if="showImage" v-bind:src="article.imgs" class="img-fluid rounded" />
          <hr class="my-2" />
        </center>
      </div>

      <div class v-html="article.article"></div>
      <div class="d-flex justify-content-between mb-2">
        <div class="d-flex flex-wrap">
          <div class="tags fa-btn" v-for="(category, index) in article.categories" :key="index">
            <i>'{{category}}'</i>
          </div>
        </div>
        <div class="d-flex flex-no-wrap">
          <i class="far text-dark fa-comment-alt fa-2x fa-btn mr-3"></i>
          <i
            style="color: pink"
            class="fas fa-heart fa-2x fa-btn"
            v-if="article.likes_idOnly.includes(loggedOnId)"
          ></i>
          <i v-else class="far text-dark fa-heart fa-2x fa-btn"></i>
        </div>
      </div>
      <hr class="my-1" />
      <div class="d-flex justify-content-between">
        <small>By: {{article.author.name}}</small>
        <small>at: {{article.created_at}}</small>
      </div>
      <br />
      <br />
    </div>
  </div>

  <div v-else class>
    <div class="articlesList">failed to load articles</div>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  data() {
    return {
      loaded: true,
      showImage: true,
      articles: []
    };
  },
  methods: {
    fetchArticles() {
      axios({
        method: "GET",
        url: "/articles"
      })
        .then(({ data }) => {
          this.articles = data;
          this.articles.reverse();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  props: {
    loggedOnId: String
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
</style>