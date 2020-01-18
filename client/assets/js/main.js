new Vue({
    el: '#app',
    data: {
        message: 'Hello Vues!',
        page: 'login',
        name: '',
        email: '',
        password: '',
        posts: [],
        title: '',
        img:'',
        desc: '',
        publish:'',
        author: '',
        updatedPost: {
        }
    },
    methods: {
        changePage(pg) {
            this.page = pg
            console.log(this.page)
        },
        setPost(page, id, title) {
            this.page = page
            this.updatedPost.id = id
            this.updatedPost.title = title
            console.log(page, id, title)

        },
        addUser() {
            console.log(this.email, this.password);
            this.email = ''
            this.password = ''

        },
        myarticle() {
            // console.log(localStorage.getItem('access_token'));
            
            axios({
                method: 'get',
                url: 'http://localhost:3000/article/myarticle',
                headers: { 'access_token': localStorage.getItem('access_token')}
            })
                .then(({data}) => {
                    this.posts = data
                    console.log(data)

                })
                .catch(err => {
                    console.log(err.data)
                })
        },
        addPost() {
            const obj = {
                title: this.title,
                desc: this.desc,
                img: this.img,
                publish: this.publish,
            }

            let userid =  localStorage.getItem('access_token')

            console.log(obj, '<<>>')
            console.log(this.publish)
            axios({
                method: 'post',
                url: 'http://localhost:3000/article/add',
                headers: { 'access_token': userid },
                data: obj
            })
                .then(({ data }) => {
                    this.title = ''
                    this.desc = ''
                    this.img = ''
                    this.publish = ''
                    // this.getPosts()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deletePost(id) {
            axios({
                method: 'delete',
                url: `http://localhost:3000/posts/${id}`,
                data: {
                    title: this.title,
                    author: this.author
                }
            })
                .then(({ data }) => {
                    this.getPosts()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updatePost(id) {
            console.log(id)
            console.log(this.title);

            console.log('bisa update')
            axios({
                method: 'put',
                url: `http://localhost:3000/posts/${id}`,
                data: {
                    title: this.updatedPost.title
                }
            })
                .then(({ data }) => {
                    this.title = ''
                    this.author = ''
                    this.getPosts()
                })
                .catch(err => {
                    console.log(err)

                })
        },
        onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            this.page = 'home'
        },
        signOut() {
            this.page='login'
            localStorage.removeItem('access_token');
            console.lof(terhapus)
            // var auth2 = gapi.auth2.getAuthInstance();
            // auth2.signOut().then(function () {
            //     console.log('User signed out.');
            // });
        },
        register(){
            axios({
                method: 'post',
                url: 'http://localhost:3000/user/regis',
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            })
                .then(({ data }) => {
                    this.name = ''
                    this.email = ''
                    this.password = ''
                    this.page = 'home'
                })
                .catch(err => {
                    console.log(err)
                })
        },
        login(){
            axios({
                method: 'post',
                url: 'http://localhost:3000/user/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(({ data }) => {
                    if(data.token){
                        localStorage.setItem('access_token', data.token);
                        console.log(data);
                        this.email = ''
                        this.password = ''
                        this.page = 'home'
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getPosts(){
            console.log('ini feeeedd post~~~')
        }

    },
    created() {

        console.log(localStorage.getItem('access_token'), '============');
        // harusnya di cek lg tokenya
        if(localStorage.getItem('access_token')){
            // console.log('masuk')
            this.page='home'
            this.getPosts()
        }

    },
})

// <!-- catatan -->
//   <!-- v-if signout button muncul kl udah login 
//   di created if(localstorage.getite,(acces_toke)){
//     page = home
// }

// di button sign out
//     page = login
//     localStorage.removeItem
