<template>
  <div v-if="loaded" class="articlesList">
    <div v-if="articles.length == 0" class="alert alert-secondary text-center">no articles</div>
    <div class="article" v-for="article in articles" v-bind:key="article._id">
      <h4 class="articles-header">{{article.title}}</h4>
      <p>{{article.article}}</p>
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
        <small>at: 02-02-2020</small>
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
import axios from "axios";
export default {
  data() {
    return {
      loaded: true,
      articles: []
    };
  },
  props: {
    loggedOnId: String
  },
  created() {
    this.articles = [
      {
        imgs: [],
        categories: ["Cat", "Pet", "Lipsum"],
        is_published: true,
        likes: [],
        _id: "5e1ef321025b036eeeab92c9",
        title: "ini article dari user lain",
        article:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti, reiciendis laborum quis illo veritatis voluptatum, neque, ipsa nesciunt suscipit quas omnis in quidem sunt fugiat et consequuntur unde autem?\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus ducimus, soluta exercitationem velit repudiandae ad laudantium officia dolor ipsa. Alias vero ullam aut voluptatem voluptas libero illo rem excepturi!",
        author: {
          _id: "5e1ef03a75d76e6b2bc45b1f",
          name: "anto antonio"
        },
        created_at: "2020-01-15T11:10:25.230Z",
        comments: [],
        likes_idOnly: []
      },
      {
        imgs: [],
        categories: ["Cat", "Pet", "Dogs"],
        is_published: true,
        likes: [
          {
            _id: "5e1ebeebeecd4855a7cdc15e",
            name: "budi budianto"
          }
        ],
        _id: "5e1ef324025b036eeeab92ca",
        title: "Ini Artikel Yang disiapin buat di like dan di unlike",
        article:
          "iciendis laborum quis illo veritatis voluptatum, neque, ipsa nesciunt suscipit quas omnis in quidem sunt fugiat et consequuntur unde autem?\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus ducimus, soluta exercitationem velit repudiandae ad laudantium officia dolor ipsa. Alias vero ullam aut voluptatem voluptas libero illo rem excepturi!",
        author: {
          _id: "5e1ef03a75d76e6b2bc45b1f",
          name: "anto antonio"
        },
        created_at: "2020-01-15T11:10:28.174Z",
        comments: [],
        likes_idOnly: ["5e1ebeebeecd4855a7cdc15e"]
      },
      {
        imgs: [],
        categories: ["Cat", "Pet", "Lipsum"],
        is_published: true,
        likes: [],
        _id: "5e1ef389025b036eeeab92cc",
        title: "Article Title",
        article:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deleniti, reiciendis laborum quis illo veritatis voluptatum, neque, ipsa nesciunt suscipit quas omnis in quidem sunt fugiat et consequuntur unde autem?\n\nLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus ducimus, soluta exercitationem velit repudiandae ad laudantium officia dolor ipsa. Alias vero ullam aut voluptatem voluptas libero illo rem excepturi!",
        author: {
          _id: "5e1ebefeeecd4855a7cdc15f",
          name: "rudi rudianto"
        },
        created_at: "2020-01-15T11:12:09.089Z",
        comments: [],
        likes_idOnly: []
      }
    ];
  }
};
</script>

<style>
</style>