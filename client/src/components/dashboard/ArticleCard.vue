<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-coffee">{{formatedArticle.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{formatedArticle.userId.firstName}} {{formatedArticle.userId.lastName}}</h6>
      <p class="card-text" v-html="formatedArticle.content"></p>
      <button class="btn-sm btn-dark mx-1" @click='viewArticle(formatedArticle._id)'>View</button>
      <button class="btn-sm btn-dark mx-1" @click='updateArticle(formatedArticle._id)'>Edit</button>
      <button class="btn-sm btn-dark mx-1" @click='deleteArticle(formatedArticle._id)'>Delete</button>
      <button class="btn-sm btn-dark mx-1" @click='publishArticle(formatedArticle._id)' v-if='!formatedArticle.published'>Publish</button>
      <button class="btn-sm btn-dark mx-1" @click='unpublishArticle(formatedArticle._id)' v-if='formatedArticle.published'>Unpublish</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ArticleCard",
  props: {
    formatedArticle: Object,
    currentPage: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
    viewArticle(id) {
      axios({
        method: "GET",
        url: `http://localhost:3000/article/viewArticle/${id}`,
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(article => {
          this.$emit('articleViewer', article.data);
          this.changePage('dashboardView');
        })
        .catch(err => {
          console.log(err);
        })
    },
    publishArticle(id) {
      axios({
        method: "POST",
        url: `http://localhost:3000/article/publishArticle/${id}`,
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('notificationAdd', `Article with title ${result.data.title} published successfully.`);
          setTimeout(() => {
            this.$emit('notificationAdd', "");
          }, 4000)
          this.showPublishArticle();
        })
        .catch(err => {
          console.log(err);
        })
    },
    unpublishArticle(id) {
      axios({
        method: "POST",
        url: `http://localhost:3000/article/unpublishArticle/${id}`,
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('notificationAdd', `Article with title ${result.data.title} unpublished successfully.`);
          setTimeout(() => {
            this.$emit('notificationAdd', "");
          }, 4000)
          this.showUserArticle();
        })
        .catch(err => {
          console.log(err);
        })
    },
    showUserArticle() {
      axios({
        method: "GET",
        url: 'http://localhost:3000/article/showUserArticle',
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('changeArticles', result.data);
          this.$emit('changePage', 'dashboardUnpublished');
        })
        .catch(err => {
          console.log(err);
        })
    },
    showPublishArticle() {
      axios({
        method: "GET",
        url: 'http://localhost:3000/article/showPublishArticle',
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('changeArticles', result.data);
          this.$emit('changePage', 'dashboardPublished');
        })
        .catch(err => {
          console.log(err);
        })
    },
    deleteArticle(id) {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/article/deleteArticle/${id}`,
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('changePage', 'dashboard');
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style>

</style>