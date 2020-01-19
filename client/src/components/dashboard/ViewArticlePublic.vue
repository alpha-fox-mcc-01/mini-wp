<template>
  <div class="col-10 bg-light article-post pt-5" style="height: 95vh;" id="overflow" v-if="currentPage === 'dashboardViewPublic'">
            
    <div class="container">
      <div class="row">
        <div class="col-md-6 flex-column pl-0">
          <h2>{{articleView.title}}</h2>
          <h6 class="text-secondary mr-auto mb-0">{{articleView.userId.firstName}} {{articleView.userId.lastName}}</h6>
        </div>
        <div class="col-md-6 flex-row d-flex pl-0 justify-content-start justify-content-md-end mt-3">
        </div>
      </div>
    </div>
    <hr>
    <p v-html="articleView.content"></p>
  </div>
</template>

<script>
export default {
  name: "ViewArticle",
  props: {
    currentPage: String,
    articleView: Object
  }
}
</script>

<style>

</style>