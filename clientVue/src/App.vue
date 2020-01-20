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
import homeNavbar from './components/HomeNavBar'
import myFooter from './components/Footer'
import homePage from './components/HomePage'
import entryPage from './components/EntryPage'
import dashboard from './components/Dashboard'
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
            console.log(pageName)
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
            this.user.articles = data.data
        },
        getArticles(data) {
            this.searchArticles = data.data
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