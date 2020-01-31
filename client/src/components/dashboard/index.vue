<template>
  <div v-if="currentPage !== 'landingPage' && currentPage !== 'login' && currentPage !== 'register'">

    <DashboardNavbar
    :message="message"
    @changePage="changePage">
    </DashboardNavbar>

    <div class="container-fluid">
      <div class="row">

        <DashboardSidebar
        @changePage="changePage"
        @changeArticles="changeArticles">
        </DashboardSidebar>

        <PublicContent
        :currentPage="currentPage"
        @articleView="articleView"
        @changePage="changePage">
        </PublicContent>

        <AddArticle
        :currentPage="currentPage"
        @changePage="changePage">
        </AddArticle>

        <ViewArticlePublic
        :currentPage="currentPage"
        @changePage="changePage"
        :articleView="articleView">
        </ViewArticlePublic>

        <ViewArticle
        :currentPage="currentPage"
        @changePage="changePage"
        :articleView="articleView">
        </ViewArticle>

        <UserPublished
          :currentPage="currentPage"
          :notification="notification"
          :formatedArticles="formatedArticles"
          @changeArticles="changeArticles"
          @articleViewer="articleViewer"
          @changePage="changePage">
        </UserPublished>

        <UserUnpublished
        :currentPage="currentPage"
        :notification="notification"
        :formatedArticles="formatedArticles"
        @changeArticles="changeArticles"
        @articleViewer="articleViewer"
        @changePage="changePage">
        </UserUnpublished>

      </div>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from './Navbar';
import DashboardSidebar from './Sidebar';
import PublicContent from './PublicContent';
import AddArticle from './AddArticle';
import ViewArticlePublic from './ViewArticlePublic';
import ViewArticle from './ViewArticle';
import UserPublished from './UserPublished';
import UserUnpublished from './UserUnpublished'

export default {
  name: "Dashboard",
  data() {
    return {
      articles: [],
      notification: "",
      message: "",
      articleView: {}
    }
  },
  components: {
    DashboardNavbar,
    DashboardSidebar,
    PublicContent,
    AddArticle,
    UserPublished,
    UserUnpublished,
    ViewArticle,
    ViewArticlePublic
  },
  props: {
    currentPage: String
  },
  computed: {
    formatedArticles: function() {
      const arrayNorak = []
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
      this.$emit('changePage', page)
    },
    articleViewer(article) {
      this.articleView = article;
    },
    changeArticles(articles) {
      console.log(articles, "ini dari dahsboard")
      this.articles = articles;
    },
    notificationAdd(notification) {
      this.notification = notification;
    }
  },
  created: function() {
    const userName = localStorage.getItem('userName');
    this.message = `Hello, ${userName}`;
  }
}
</script>

<style>

</style>