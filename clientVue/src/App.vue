<template>
    <div>
        <homePage 
        @switchPage="switchPage" 
        v-if="currentPage ==='landing'" 
        :currentPage="currentPage" 
        :user="user"></homePage>
        <entryPage @switchPage="switchPage" 
        v-if="currentPage === 'signUp' || currentPage === 'signIn'" 
        :currentPage="currentPage" 
        :user="user"

        ></entryPage>
        <dashboard 
        @signOut="signOut"
        @getUserArticles="getUserArticles"
        @getArticles="getArticles"
        v-if="currentPage==='dashboard'" 
        :user='user'
        :searchArticles="searchArticles"
        :article="article"></dashboard>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import homeNavbar from './components/HomeNavBar'
import myFooter from './components/Footer'
import homePage from './components/HomePage'
import entryPage from './components/EntryPage'
import dashboard from './components/Dashboard'
import axios from 'axios'
export default {
    data() {
        return {
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
        }
    },
    methods: {
        switchPage(pageName) {
            this.currentPage = pageName
            if (pageName === 'landing') {
                this.user.username = '',
                this.user.password = '',
                this.user.email = ''
            }
        },
        signOut() {
            localStorage.removeItem('access_token')
            this.currentPage = 'landing'
        },
        getUserArticles(data) {
            axios({
                method: 'GET',
                url: 'http://34.87.49.35/articles/me',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.user.articles = data.data
                })
                .catch(err => {
                    Swal.fire('Error', `Sorry, something went wrong: ${err.message}`, 'error')
                })
        },
        getArticles(data) {
            axios({
                method: 'GET',
                url: 'http://34.87.49.35/articles/me',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.searchArticles = data.data
                })
                .catch(err => {
                    Swal.fire('Error', `Sorry, something went wrong: ${err.message}`, 'error')
                })
        }
    },
    components: {
        homePage,
        entryPage,
        dashboard
    },
    created: function() {
        if (localStorage.getItem('access_token')) {
            this.currentPage = 'dashboard'            
        }
    }
}
</script>
<style scoped>
</style>