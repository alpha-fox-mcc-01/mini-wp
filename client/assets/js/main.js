

var app = new Vue({
  el: '#app',
  data: {
    message: '',
    dashboardHeader: '',
    currentPage: 'landingPage',
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    article: {
      title: '',
      content: ''
    },
    articleView: [],
    articlePart: [],
    notification: '',
    errors: [],
    error: ''
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    registerUser() {
      axios({
        method: "POST",
        url: 'http://localhost:3000/user/register',
        data: {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(result => {
          this.notification = `Thanks ${result.data.userName}, you are registered.`;
          setTimeout(() => {
            this.notification = "";
          }, 3000)
          this.user.firstName = '';
          this.user.lastName = '';
          this.user.email = '';
          this.user.password = '';
          this.currentPage = 'login';
        })
        .catch(err => {
          if(err.response.data.message.messages) {
            this.errors = err.response.data.message.messages;
            setTimeout(() => {
              this.errors = "";
            }, 5000)
          } else {
            this.error = err.response.data.message;
            setTimeout(() => {
              this.error = "";
            }, 3000)
          }
        })
    },
    loginUser() {
      axios({
        method: "POST",
        url: 'http://localhost:3000/user/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then(result => {
          localStorage.setItem('access_token', result.data.token);
          localStorage.setItem('userName', result.data.userName);
          this.currentPage = 'dashboard';
          this.user.email = '';
          this.user.password = '';
        })
        .catch(err => {
          if(err.response.data.message) {
            this.error = err.response.data.message;
            setTimeout(() => {
              this.error = "";
            }, 3000)
          }
        })
    },
    logoutUser() {
      localStorage.clear();
      this.currentPage = 'landingPage';
    },
    addArticle() {
      axios({
        method: "POST",
        url: 'http://localhost:3000/article/addArticle',
        data: {
          title: this.article.title,
          content: this.article.content
        },
        headers: {
          token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          this.notification = `Article with title ${result.data.articleTitle} saved successfully.`;
          setTimeout(() => {
            this.notification = "";
          }, 5000)
          this.article.title = '';
          this.article.content = '';
          this.currentPage = 'dashboard';
        })
        .catch(err => {
          if(err.response.data.message.messages) {
            this.errors = err.response.data.message.messages;
            setTimeout(() => {
              this.errors = "";
            }, 5000)
          }
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
          this.articles = result.data;
          this.currentPage = 'dashboardUnpublished';
        })
        .catch(err => {

        })
    },
    viewArticle(article) {
      this.articleView = article;
      this.currentPage = 'dashboardView';
    }
  },
  created: function() {
    if(localStorage.getItem('access_token')) {
      this.currentPage = 'dashboard';
      const userName = localStorage.getItem('userName');
      this.message = `Hello, ${userName}`;
      this.dashboardHeader = `Welcome ${userName}, What are you gonna share today?`;
    }
  }
})