<template>
     <div class="container" v-if="page == 'myarticle'">
         <button @click.prevent="status = true">published</button>
         <button @click.prevent="status = false">private</button>
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="post in publishStatus" :key="post.id">
          <a href="#">
            <h2 class="post-title">
              {{post.title}}
            </h2>
            <h5 class="post-subtitle">
              {{post.desc}}
            </h5>
          </a>
          <p class="post-meta">Posted by
            <a href="#">author</a>
            on September 24, 2019</p>
            <a type=""  @click.prevent="deletePost(post._id)">Delete</a>
            <a type="" @click.prevent="updatePost(post._id, post.title, post.desc, post.paragraf, post.publish, post.img)">update</a>
            <hr>
        </div>
        </div>
        </div>  
        </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            status: true,
            articles:{}
        }
    },
    props:{
        page: String,
    },
    methods:{
        getArticle(){
            let userid =  localStorage.getItem('access_token')
            console.log(userid)

            axios({
                method:'GET',
                url:'http://34.87.116.76/article/myarticle',
                headers: { 'access_token': userid }
            })
            .then(({data})=> {
                // handle success
                this.articles = data
                console.log(data, 'fetch my article');
            })
            .catch((error)=> {
                // handle error
                console.log(error);
            })

    },
        deletePost(id){
            let userid =  localStorage.getItem('access_token')
            console.log(id);
            
            axios({
                method: 'delete',
                url: `http://localhost:3000/article/delete/${id}`,
                headers: { 'access_token': userid }
                 })
                .then(({ data }) => {
                    this.$emit('change-Page', 'myarticle')
                    this.getArticle()
                    
                })
                .catch(err => {
                    console.log(err)
                })
        },
        updatePost(id, title, desc, paragraf, publish){
            let obj = {
                id: id,
                title: title,
                desc: desc,
                paragraf: paragraf,
                publish: publish
            }

            this.$emit('update-Article', obj)

            console.log('ini update');
            
        },
    },
    computed:{
            publishStatus(){
                // this.getArticle()
            //     if (this.page == 'home'){
            //     console.log('================');
            // }
                console.log('kerja nih sebelum', this.articles);
                const result = this.articles.filter(word => word.publish == this.status);
                return result
            }
        },
        created: function(){
                this.getArticle()           
        }
}
</script>

<style>

</style>