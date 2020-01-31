<template>
  <div class="col-10 bg-light article-post pt-5" style="height: 95vh;" id="overflow" v-if="currentPage === 'dashboardAdd'">
    <h2 class="mb-3">New Article</h2>
    <div v-if='errors'>
      <div class="alert alert-danger" role="alert" v-for="(error, i) in errors" :key="i">
        {{error}}
      </div>
    </div>
    
    <form @submit.prevent="addArticle">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Fantastic Beast" v-model="article.title">
      </div>
      <div class="form-group">
        <label for="article">Article</label>
        <tinymce id="d1" v-model="article.content"></tinymce>
      </div>
      <button type="submit" class="btn btn-dark mb-5">Save Article</button>
    </form>
  </div>
</template>

<script>
import axios from '../../api/axiosInstance.js';

export default {
  name: "AddArticle",
  data() {
    return {
      article: {
        title: '',
        content: ''
      },
      errors: []
    }
  },
  props: {
    currentPage: String
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    addArticle() {
      axios({
        method: "POST",
        url: 'article/addArticle',
        data: {
          title: this.article.title,
          content: this.article.content
        },
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.$emit('notificationAdd', `Article with title ${result.data.articleTitle} saved successfully.`);
          setTimeout(() => {
            this.$emit('notificationAdd', "");
          }, 5000)
          this.article.title = '';
          this.article.content = '';
          this.changePage('dashboard')
        })
        .catch(err => {
          if(err.response.data.message.messages) {
            this.errors = err.response.data.message.messages;
            setTimeout(() => {
              this.errors = "";
            }, 5000)
          }
        })
    }
  }
}
</script>

<style>

</style>