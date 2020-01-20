<template>
    <div class='col-md-6' id='new-post'>
        <div class='container' id='new-post-container'>
            <div class="card" id='new-post-card'>
                <div class="card-body">
                    <h1 style="font-family: 'Muli', Sans-serif;">Create New Article</h1>
                    <p style="font-family: 'Muli', Sans-serif;">Pour all your ideas out.</p>
                    <form @submit.prevent="writeArticle">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Title</label>
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="1" v-model="article.title"></textarea>
                            <label for="exampleFormControlTextarea1">Content</label>
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="15" v-model="article.content"></textarea>
                            <b-form-file v-model="file" class="mt-3" plain></b-form-file>
                        </div>
                        <!-- <div id="editor"></div>
                        <script>
                                ClassicEditor
                                        .create( document.querySelector( '#editor' ) )
                                        .then( editor => {
                                                console.log( editor );
                                        } )
                                        .catch( error => {
                                                console.error( error );
                                        } );
                        </script> -->
                        <br>
                        <button type="submit" class="btn btn-dark">Post</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ["user", "article"],
    methods: {
        writeArticle(title, content) {
            console.log('masuk')
            axios.post('http://34.87.49.35/articles', {
                title: this.article.title,
                content: this.article.content
            }, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    this.article.title = ''
                    this.article.content = ''
                    this.$emit('getArticles')
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
    }
}
</script>

<style scoped>
#new-post-container {
    width: 100%;
}

#new-post-container h1{
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 4rem;
}

#new-post-container p{
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 5rem;
}

#new-post-card {
    color: black;
    background-color: rgba(128, 128, 128, 0.623);
    padding: 20px;
    /* background-image: url("../images/blue-flowers.png"); */


    width: 100%;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>