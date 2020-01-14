const app = new Vue({
    el: '#app',
    data: {
        user : {
            username: '',
            email: '',
            password: ''
        },
        currentPage: 'landing',
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
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        signOut() {
            localStorage.removeItem('access_token')
            this.currentPage = 'landing'
        }
    },
    created() {
        // this.getArticles()
        if(localStorage.getItem('access_token')) {
            this.currentPage = 'dashboard';
        }
    }
})