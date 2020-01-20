<template>
    <div class="col-md-3" v-if="searchArticles.length > 0">
        <hr>
        <h1 style="font-family: 'Muli', sans-serif;"><center>Discover</center></h1>
        <hr>
        <form class="form-inline my-2 my-lg-0" @submit.prevent="$emit('getArticles', searchArticles)">
            <input class="form-control mr-sm-2" v-model="user.search" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div id='search-posts'>
            <div class="card card-dash"  v-for="article in searchArticles" :key="article.id">
                <div class="card-body articles">
                    <h6 class="card-subtitle mb-2" style='color:rgb(104, 6, 173)'>UNCATEGORIZED</h6>
                    <h1 class="card-title">{{ article.title }}</h1>
                    <h6 class="card-subtitle mb-2">{{ article.createdAt }} | by {{ article.authorId.username }}</h6>
                    <h6 class="card-subtitle mb-2 text-muted">Last edited: {{ article.updatedAt }}</h6>
                    <br>
                    <p class="card-text">{{ article.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["searchArticles", "user"],
}
</script>

<style scoped>

#search-posts {
    height:66vh;
    overflow-y: auto;
    margin-top:2rem;
}

</style>