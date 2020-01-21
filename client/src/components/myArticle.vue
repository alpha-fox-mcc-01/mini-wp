<template>
     <div class="container" v-if="page == 'myarticle'">
         <button class="btn btn-info mt-5" @click.prevent="status = true">published</button>
         <button class="btn btn-info mt-5" @click.prevent="status = false">private</button>
         <!-- {{publishStatus}} -->
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto ">
        <div class="post-preview mt-3" v-for="post in publishStatus" :key="post.id">
          <a href="#">
            <h2 class="post-title" @click.prevent="read(post._id)">
              {{post.title}}
            </h2>
            <h5 class="post-subtitle">
              {{post.desc}}
            </h5>
          </a>
          <p class="post-meta">Posted by
            <a href="#">{{post.author.name}}</a>
            {{post.createdAt}}</p>
            <button type="button" class="btn btn-danger"><a type=""  @click.prevent="deletePost(post._id)">Delete</a></button>
            <button type="button" class="btn btn-success"><a type="" @click.prevent="updatePost(post._id, post.title, post.desc, post.paragraf, post.publish, post.img)">update</a></button>
            
            <hr>
        </div>
        </div>
        </div>  
        </div>
</template>

<script>
import axios from '../api/axiosInstance'
export default {
    data(){
        return{
            status: true,
            articles:{}
        }
    },
    props:{
        page: String,
        fetch: Boolean
    },
    methods:{
           read(id){
            // console.log(id, 'dari feed')
            this.getArticle()
            this.$emit('read-Page', 'readarticle', id)
        },
        getArticle(){
            let userid =  localStorage.getItem('access_token')
            console.log(userid)

            axios({
                method:'GET',
                url:'/article/myarticle',
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
                url: `/article/delete/${id}`,
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
                // let count
                if(this.fetch == true){
                this.getArticle()
                this.$emit('fetch-off')

                }
                // console.log('kerja nih sebelum', this.articles);
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