<template>
    <form @submit.prevent="signIn">
        <div class="row">
            <div class='col-md-6'>
                <div class="form-group">
                    <label for="signin-email">Email address</label>
                    <input type="email" class="form-control" v-model="user.email" id="signin-email" aria-describedby="emailHelp">
                </div>
                <br>
                <div class='form-group'>
                    <label for="signin-password">Password</label>
                    <input type="password" class="form-control" v-model="user.password" id="signin-password">
                </div>
                <button type="submit" class="btn btn-dark" >Enter Your Dashboard</button>
            </div>
            <div class='col-md-6'>
                <div class='container' style='margin-top: 2.5rem; margin-left: 2rem; border-left: solid black; height:14.1rem;'>
                    <!-- <div class="g-signin2" data-onsuccess="onSignIn" style='margin-left: 2rem;'></div> -->
                </div>
            </div>
        </div>
        <div style='margin-top: 6rem;'>
            <p>By logging in you agree to our Terms and conditions and the Privacy Policy.</p>
        </div>
    </form>  
</template>

<script>
import axios from 'axios'
export default {
    props: ["currentPage", "user"],
    methods: {
        changePage(pageName) {
            this.$emit(
                "changePage",
                pageName
            )
        },
        signIn(email, password) {
            axios.post('http://34.87.49.35/users/signin', {
                email: this.user.email,
                password: this.user.password
            })
                .then(response => {
                    localStorage.setItem('access_token', response.data.access_token)
                    this.user.email = '',
                    this.user.password = ''
                    this.getArticles()
                    this.$emit('changePage', 'dashboard')
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        getArticles() {
            axios.get('http://34.87.49.35/articles')
                .then(({data}) => {
                    this.$emit('getArticles', data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style scoped>

</style>