<template>
    <div id='dashboard'>
        <nav class="navbar navbar-expand-sm navbar-light bg-light" id='dashboard-nav'>
            <a href='#' class="navbar-brand">WeBlog</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <button type="button" class="btn btn-dark" style='margin-top: 0.2rem' @click="changePage('createArticle')">Write</button>
                    </li> 
                    <li class="nav-item">
                        <a href="#" class="nav-link"><img src='./assets/images/blank-avatar.png' width=25 height=25></a>
                    </li>
                    <li class="nav-item" @click="$emit('signOut')" style='margin-top: 0.6rem'>
                        <a href="#">Sign out</a>
                    </li> 
                </ul>
            </div>
        </nav>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Welcome to Your Personal Dashboard</h1>
                <p class="lead">All your previous posts should appear here. It's all yours to manage and maintain.</p>
            </div>
        </div>
        <div class="row" id='dash-1'>
            <userPosts @getUserArticles="getUserArticles"></userPosts>
            <editor></editor>
            <searchBar @getArticles="getArticles"></searchBar>
        </div>
    </div>
</template>


<script>
import userPosts from './UserPosts'
import editor from './Editor'
import searchBar from './SearchBar'
export default {
    props: ["user", "article"],
    components: {
        userPosts,
        editor,
        searchBar
    },
    methods: {
        getUserArticles(data) {
            this.$emit('getUserArticles', data)
        },
        getArticles(data) {
            this.$emit('getArticles', data)
        }
    }
}
</script>


<style scoped>
#dashboard-nav {
    background-color: grey !important;
}

</style>