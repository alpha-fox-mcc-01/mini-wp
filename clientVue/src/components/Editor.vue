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
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="1" v-model="newArticle.title"></textarea>
                            <label for="exampleFormControlTextarea1">Content</label>
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="15" v-model="newArticle.content"></textarea>
                            <label>Image
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                            </label>
                                <button v-on:click="submitFile()">Submit</button>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-dark">Post</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    props: ["user", "article"],
    data () {
        return {
            newArticle: {
                title: '',
                content: '',
                file: ''
            }
        }
    },
    methods: {
        writeArticle(title, content) {
            let formData = new FormData()
            formData.append('file', this.newArticle.file)
            formData.append('title', this.newArticle.title)
            formData.append('content', this.newArticle.content)
            axios.post('http://34.87.49.35/articles', formData, {
                headers: {
                    access_token: localStorage.getItem('access_token'),
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(({ data }) => {
                    this.newArticle.title = ''
                    this.newArticle.content = ''
                    this.newArticle
                    Swal.fire('Success', 'Article saved as draft!', 'success')
                    this.$emit('getArticles')
                    this.$emit('getUserArticles')
                    console.log(data)
                })
                .catch(err => {
                    console.log(err.message)
                })
        },
        handleFileUpload () {
            this.newArticle.file = event.target.files[0];
        },
        submitFile () {
            axios({
                method: 'POST',
                url: 'http://34.87.49.35/articles',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        }
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