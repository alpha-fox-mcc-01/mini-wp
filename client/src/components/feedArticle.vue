<template>
   <div class="container mt-5" v-if="page == 'home'">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="post-preview" v-for="post in articles" :key="post.id">
          <a href="#" @click.prevent="read(post._id)">
            <h2 class="post-title">
              {{post.title}}
            </h2>
            <h5 class="post-subtitle">
              {{post.desc}}
            </h5>
          </a>
          <p class="post-meta">Posted by
            <a href="#">{{post.author.name}}</a>
            on {{post.createdAt}}</p>
            <hr>
        </div>
        </div>
        </div>  
        
        </div>
</template>
name: 'feedArticle'
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        articles: {},
        page: String
    },
    methods:{
        read(id){
            // console.log(id, 'dari feed')
            this.$emit('read-Page', 'readarticle', id)
        }
    }
}
</script>

<style>


  a:focus,
  a:hover {
    color: #0085A1;
  }
</style>