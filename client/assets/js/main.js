const app = new Vue({
    el: '#app',
    data: {
        user : {
            username: '',
            email: '',
            password: '',
            articles: [],
            search: '',
        },
        currentPage: 'landing',
        searchArticles: [],
        article : {
            title : '',
            content: ''
        }
    },
    methods: {
        changePage(pageName) {
            this.currentPage = pageName
            if (pageName === 'landing') {
                this.user.username = '',
                this.user.password = '',
                this.user.email = ''
            }
        },
        signUp() {
            axios.post('http://localhost:3000/users', {
                username: this.user.username,
                email: this.user.email,
                password: this.user.password
            })
                .then(response => {
                    this.user.username = '',
                    this.user.currentPage = 'signIn'
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        signIn() {
            axios.post('http://localhost:3000/users/signin', {
                email: this.user.email,
                password: this.user.password
            })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    this.currentPage = 'dashboard'
                    this.user.email = '',
                    this.user.password = ''
                    this.getUserArticles()
                })
                .catch(err => {
                    this.
                    console.log(err.message)
                })
        },
        signOut() {
            localStorage.removeItem('access_token')
            this.currentPage = 'landing'
        },
        getArticles() {
            if (this.user.search.length === 0) {
                axios.get('http://localhost:3000/articles')
                    .then(( {data} )  => {
                        this.searchArticles = data.data
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            } else {
                axios.get(`http://localhost:3000/articles/?keyword=${this.user.search}`, {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                    .then(( {data} ) => {
                        this.searchArticles = data.data
                        this.user.search = ''
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            }
        },
        getUserArticles() {
            axios.get('http://localhost:3000/articles/me', {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(( {data} ) => {
                    this.user.articles = data.data
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        writeArticle() {
            axios.post('http://localhost:3000/articles', {
                title: this.article.title,
                content: this.article.content
            }, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.article.title = ''
                    this.article.content = ''
                    this.getUserArticles()
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        getOneArticle(id) {
            axios.get(`http://localhost:3000/articles/${id}`, {
                headers : {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.article.title = data.data.title
                    this.article.content = data.data.article
                })
                .catch(err => {
                    console.log(err)
                })
        },
        publishArticle(id) {
            axios.patch(`http://localhost:3000/articles/publish/?articleid=${id}`, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(( {data} ) => {
                    this.getUserArticles();
                    this.getArticles();
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        editArticle(id) {
            axios.put(`http://localhost:3000/articles/publish/?articleid=${id}`, {
                title: this.article.title,
                content: this.article.content
            },{
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    this.getArticles()
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        deleteArticle(id) {
            axios.delete(`http://localhost:3000/artices/${id}`, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.getArticles()
                })
                .catch(err => {
                    console.log(err.message)
                })
        }
    },
    created() {
        if(localStorage.getItem('access_token')) {
            this.currentPage = 'dashboard';
            this.getUserArticles()
        }
        this.getArticles()
    },
})