<template>
  <div class="col-2 bg-light p-1 border-right" style="height: 95vh;">
    <ul class="nav nav-light flex-column">
      <li class="nav-item add-btn border-bottom">
        <button class="btn btn-dark" @click="changePage('dashboardAdd')">Add Blog</button>
      </li>
      <li class="nav-item mt-2 nav-link pointer dashboard-nav" @click='showUserArticle'>
        My Draft
      </li>
      <li class="nav-item nav-link pointer dashboard-nav" @click='showPublishArticle'>
        Publish Article
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '../../api/axiosInstance.js';

export default {
  name: "DashboardSidebar",
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    showUserArticle() {
      axios({
        method: "GET",
        url: 'article/showUserArticle',
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
        url: 'article/showPublishArticle',
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
    }
  }
}
</script>

<style scoped>
  .add-btn {
    padding: 0.5rem 1rem;
  }

  .dashboard-nav {
    color: rgb(126, 126, 126) !important;
  }

  .dashboard-nav:hover {
    color: rgb(85, 85, 85) !important;
  }

</style>