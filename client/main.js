
var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue!',
        currentPage: 'landingpage',
        articles: [],
        email: '',
        password: '',
        onDashboard: 'createArticle',
        title: '',
        content: '', 
        category: '',
        drafts: []
          
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        getArticles() {
            axios.get('http://localhost:3000/articles', {
                headers: localStorage.getItem('access_token')
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data.result
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
        userLogin() {
            axios.post('http://localhost:3000/users/login', {
                email: this.email,
                password: this.password
            })
                 .then(({data}) => {
                     this.email = ''
                     this.password = ''
                     console.log(data)
                     localStorage.setItem('access_token', data.access_token) 
                     this.currentPage = 'dashboard'
                 })
                 .catch(err => {
                     toastr.warning('Login failed. Please check your email/username')
                     console.log(err)
                 })  
        },
        userLogout() {
            this.currentPage = 'landingpage'
            localStorage.removeItem('access_token')
        },
        userRegister(){
            axios.post('http://localhost:3000/users/register', {
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then(({data}) => {
                this.currentPage = 'loginform'
            })
            .catch(err => {
                console.log(err)
            })
        },
        postArticle(){
            let access_token = localStorage.getItem('access_token')
            console.log('masuk post article')
            axios.post('http://localhost:3000/articles', {
                title: this.title,
                category: this.category,
                content: this.content,
            },{
                headers: { 
                    access_token: access_token
                }
            })
            .then(result => {
                this.title = ''
                this.content = ''
                this.currentPage = 'landingpage'
            })
            .catch(err => {
                console.log(err)
            })
            
        },
        getDrafts() {
            axios.get('http://localhost:3000/articles/drafts', {
                headers: localStorage.getItem('access_token')
            })
            .then(({ data }) => {
                console.log(data)
                this.drafts = data.result
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    },
    created() {
        let access_token = localStorage.getItem('access_token')
        if (access_token) {
            this.currentPage = 'dashboard'
            if (this.currentPage === 'dashboard' && this.onDashboard === 'viewPublished') {
                this.getArticles()
            } else if (this.currentPage === 'dashboard' && this.onDashboard === 'viewDrafts') {
                this.getDrafts()
            }
        } else {
            this.currentPage = 'landingpage'
            this.getArticles()
        }
        this.getDrafts()
        this.getArticles()
    }
})