<template>
  <div class="col-10 bg-light" style="height: 95vh;" id="overflow" v-if="currentPage === 'dashboard'">
              
    <h3 class="mt-4 text-coffee" v-if="currentPage === 'dashboard'">{{dashboardHeader}}</h3>

    <div class="alert alert-warning" role="alert" v-if='notification'>
      {{notification}}
    </div>

    <div class="row mt-4">
      <div class="col-lg-5 p-0 m-3" v-for="formatedArticle in formatedArticles" :key="formatedArticle._id">
        <ArticleCardPublic
        :formatedArticle="formatedArticle"
        :currentPage="currentPage"
        @currentPage="currentPage"
        @articleView="articleView">
        </ArticleCardPublic>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../../api/axiosInstance.js';
import ArticleCardPublic from './ArticleCardPublic';

export default {
  name: "PublicContent",
  data() {
    return {
      articles: [],
      message: '',
      dashboardHeader: ''
    }
  },
  props: {
    currentPage: String,
    notification: String
  },
  components: {
    ArticleCardPublic
  },
  computed: {
    formatedArticles: function() {
      this.articles.forEach(article => {
        let formatedContent = '';
        for(let i = 0; i < 197; i++) {
          formatedContent += article.content[i];
        }
        article.content = formatedContent + '...';
      })
      return this.articles;
    }
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
    articleView(article) {
      this.$emit('articleView', article);
    },
    showPublicArticle() {
      console.log('masuk')
      axios({
        method: "GET",
        url: 'article/showPublicArticle',
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.articles = result.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created: function() {
    this.showPublicArticle();
    const userName = localStorage.getItem('userName');
    this.dashboardHeader = `Welcome ${userName}, Here's some inspirations`;
  }
}
</script>

<style scoped>

</style>