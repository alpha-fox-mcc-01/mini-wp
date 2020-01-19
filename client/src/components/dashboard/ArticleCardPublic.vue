<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-coffee">{{formatedArticle.title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{formatedArticle.userId.firstName}} {{formatedArticle.userId.lastName}}</h6>
      <p class="card-text" v-html="formatedArticle.content"></p>
      <button class="btn-sm btn-dark mx-1" @click='viewArticle(formatedArticle._id)'>View</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    formatedArticle: Object
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
          this.$emit('articleView', article.data);
          this.changePage('dashboardViewPublic');
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