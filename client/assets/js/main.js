const app = new Vue({
    el: '#app',
    data: {
        user : {
            username: '',
            email: '',
            password: '',
            articles: [],
            isSearching: false,
            search: '',
        },
        currentPage: 'landing',
        searchArticles: []
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
            if (this.search.length === 0) {
                axios.get('http://localhost:3000/articles')
                    .then(( {data} )  => {
                        this.articles = data
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
                        this.user.isSearching = true
                        this.searchArticles = data
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
        }
    },
    created() {
        this.getArticles()
    },
    created() {
        if(localStorage.getItem('access_token')) {
            this.currentPage = 'dashboard';
        }
    }
})