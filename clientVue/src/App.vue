<template>
    <div>
        <homePage @switchPage="switchPage" v-if="currentPage ==='landing'" :currentPage="currentPage" :user="user"></homePage>
        <entryPage @switchPage="switchPage" v-if="currentPage === 'signUp' || currentPage === 'signIn'" :currentPage="currentPage" :user="user"></entryPage>
    </div>
</template>

<script>
import homeNavbar from './components/HomeNavBar'
import myFooter from './components/Footer'
import homePage from './components/HomePage'
import entryPage from './components/EntryPage'
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
    },
    components: {
        homePage,
        entryPage
    }
}
</script>
<style scoped>
</style>