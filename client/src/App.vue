<template>
  <div>
    <LandingPage
    :currentPage="currentPage"
    :notification="notification"
    @changePage="changePage"
    @notificationRegister="notificationRegister">
    </LandingPage>

    <Dashboard
    :currentPage="currentPage"
    :notification="notification"
    @changePage="changePage">
    </Dashboard>
  </div>
</template>

<script>
import LandingPage from './components/landingPage';
import Dashboard from './components/dashboard';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'landingPage',
      notification: ''
    };
  },
  components: {
    LandingPage,
    Dashboard
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    notificationRegister(notification) {
      this.notification = notification;
      setTimeout(() => {
        this.notification = "";
      }, 3000)
    }
  },
  created: function() {
    if(localStorage.getItem('access_token')) {
      this.currentPage = 'dashboard';
    }
  }
};
</script>

<style>
  body {
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  .pointer {
    cursor: pointer;
  }

  .text-coffee {
    color: rgb(105, 17, 17);
  }

  #overflow {
    overflow: scroll;
    height: 40rem;
  }

  .article-post {
    padding-left: 10rem;
    padding-right: 10rem;
  }
  @media only screen and (max-width: 992px) {
    .article-post {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .span-hover {
    border-bottom: 1px solid white;
  }

  .span-hover:hover {
    color: rgb(85, 85, 85) !important;
    border-bottom: 1px solid black;
  }

  .card {
    max-width: 100%;
    max-height: 100%;
  }
</style>