let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    currentButton : '',
    currentPage : '',
    name : '',
    email : '',
    password : '',
    title : '',
    content : '',
    articles : '',
    dashboard : '',
    articleId : ''
  },
  methods : {
    changeButton(button){
      if(this.currentButton === button){
        this.currentButton = ''
      }else {
        this.currentButton  = button
      }
    },
    logOut(){
      localStorage.removeItem('token')
    },
    changePage(page){
      this.currentPage = page
    },
    changeDash(dash){
      this.dashboard = dash
    },
    logIn(){
      axios({
        method : 'POST',
        url : 'http://localhost:3000/users/login',
        data : {
          email : this.email,
          password : this.password
        }
      })
        .then(token => {
          // console.log(response);
          localStorage.setItem('token', token.data)
          this.currentPage = 'blog-feed'
          this.email = ''
          this.password = ''
        })
        .catch(err => {
          console.log(err);
        })
    },
    registerUser(){
        axios({
          method : 'POST',
          url : 'http://localhost:3000/users/register',
          data : {
            name : this.name,
            email : this.email,
            password : this.password
          }
        })
          .then(token => {
            localStorage.setItem('token', token.data)
            this.currentPage = 'blog-feed'
            this.name = ''
            this.email = ''
            this.password = ''
          })
          .catch(err => {
            console.log(err);
          })
    },
    postArticle(){
      let token = localStorage.getItem('token')
      axios({
        method : 'POST',
        url : 'http://localhost:3000/articles',
        data : {
          title : this.title,
          content : this.content,
          token
        }
      })
        .then( article => {
          console.log(article);
          this.getArticles()
          this.title = ''
          this.content = ''
        })
        .catch(err => {
          console.log(err);
          
        })
    },
    getArticles(){
      axios({
        method : 'GET',
        url : 'http://localhost:3000/articles'
      })
        .then(response => {
          console.log(response);
          this.articles = response.data
        })
        .catch(err => {
          console.log(err);
        })
    },
    deletePost(id){
      axios({
        method : 'DELETE',
        url : 'http://localhost:3000/articles/' + id
      })
        .then(response => {
          console.log(response);
          this.getArticles()
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created(){
    let loggedIn = localStorage.getItem('token')
    console.log(loggedIn);
    if(loggedIn){
      this.changePage('blog-feed')
      this.getArticles()
    } else {
      this.currentPage = 'not-loggedin'
    }
  }
})