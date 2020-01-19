<template>
  <div class="col-10 bg-light" style="height: 95vh;" id="overflow" v-if="currentPage === 'dashboardPublished'">
            
    <h3 class="mt-4 text-coffee">Published</h3>

    <div class="alert alert-warning" role="alert" v-if='notification'>
      {{notification}}
    </div>

    <div class="row mt-4">
      <div class="col-lg-5 p-0 m-3" v-for="formatedArticle in formatedArticles" :key="formatedArticle._id">
        <ArticleCard
        :formatedArticle="formatedArticle"
        :currentPage="currentPage"
        @articleViewer="articleViewer"
        @changeArticles="changeArticles"
        @changePage="changePage">
        </ArticleCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticleCard from './ArticleCard';

export default {
  name: "UserPublished",
  props: {
    currentPage: String,
    formatedArticles: Array,
    notification: String
  },
  components: {
    ArticleCard
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    },
    articleViewer(article) {
      this.$emit('articleViewer', article);
    },
    changeArticles(articles) {
      this.$emit('changeArticles', articles);
    }
  }
}
</script>

<style>

</style>