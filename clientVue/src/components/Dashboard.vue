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
            <userPosts :user="user" :searchArticles="searchArticles" @getUserArticles="getUserArticles"></userPosts>
            <editor :user="user" :article="article"></editor>
            <searchBar :user="user" :searchArticles="searchArticles" @getArticles="getArticles"></searchBar>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import userPosts from './UserPosts'
import editor from './Editor'
import searchBar from './SearchBar'
export default {
    props: ["user", "article", "searchArticles"],
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
    },
    created: function() {
        axios.get('http://34.87.49.35/articles')
            .then(({data}) => {
                this.$emit('getArticles', data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
</script>


<style scoped>
#dashboard-nav {
    background-color: grey !important;
}
.jumbotron {
    margin-bottom: 0rem !important;
}

.jumbotron-fluid {
    color: white;
    background-image: url("./assets/images/mountainsBG.jpg");
    /* background-color:rgba(0, 255, 255, 0); */
    /* background-color: rgba(211, 209, 209, 0.678); */
    /* background-color: rgb(65, 63, 63); */
    min-height: 40vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* margin-bottom: 7rem; */
}
</style>