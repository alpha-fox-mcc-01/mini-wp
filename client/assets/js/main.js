const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'landing',
        username: '',
        email: '',
        password: ''
    },
    methods: {
        changePage(pageName) {
            this.currentPage = pageName
        },
        signUp() {
            axios.post('http://localhost:3000/users', {
                username: this.username,
                email: this.email,
                password: this.password
            })
                .then(response => {
                    this.username = '',
                    this.email = '',
                    this.password = ''
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
})