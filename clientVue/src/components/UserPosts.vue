<template>
    <div class='col-md-3' id='user-posts'>
        <hr>
        <h1 style="font-family: 'Muli', sans-serif;"><center>Your Previous Posts</center></h1>
        <hr>
        <div class="card card-dash"  v-for="article in user.articles" :key="article._id">
            <div class="card-body articles">
                <h6 class="card-subtitle mb-2" style='color:rgb(104, 6, 173)'>UNCATEGORIZED</h6>
                <h1 class="card-title">{{ article.title }}</h1>
                <h6 class="card-subtitle mb-2">{{ article.createdAt }} | by {{ article.authorId.username }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Last edited: {{ article.updatedAt }}</h6>
                <br>
                <p class="card-text">{{ article.content }}</p>
                <button type="button" class="btn btn-link p-0 m-0 d-inline align-baseline" @click="publish(article._id)">Edit</button>
                <button type="button" class="btn btn-link p-0 m-0 d-inline align-baseline" @click="publish(article._id)">Delete</button>
                <a class="card-link" v-if="article.published" style='color: rgba(128, 128, 128, 0.548)'>Published</a>
                <button type="button" class="btn btn-link p-0 m-0 d-inline align-baseline" v-else-if="!article.published" @click="publish(article._id)">Publish</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["user"],
    methods: {
        getUserArticles() {
            axios.get('http://34.87.49.35/articles/me', {
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                    .then(( {data} ) => {
                        this.$emit('getUserArticles', data)
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
        }
    }
}
</script>

<style scoped>
#user-posts {
    height:85vh;
    overflow-y: auto;
}
</style>