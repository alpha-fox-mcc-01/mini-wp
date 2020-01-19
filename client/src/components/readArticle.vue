<template>
    <article>
            {{check}}

        <div class="container" v-if=" page == 'readarticle'">
            <img src="" alt="">
            <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1>{{articleNow.title}}</h1>
            <h3 class="subheading">{{articleNow.desc}}</h3>
            <span class="meta">Posted by
              <a href="#">{{articleNow.author.name}}</a>
              on {{articleNow.createdAt}}</span>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
                <img :src="articleNow.img" alt="">
              <!-- <p v-on:readArticle="this.page"></p> -->
                <p><span v-html="paragraf"></span> </p>
              <!-- <p>Placeholder text by
                <a href="http://spaceipsum.com">Space Ipsum</a>. Photographs by
                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p> -->
            </div>
          </div>
        </div>
      </article>
</template>

<script>
name: 'readArticle'
import axios from 'axios'
export default {
    data(){
        return {
            articleNow:{},
            paragraf: ''
        }
    },
    props:{
        page: String,
        readNow: String
    },
    methods:{
        readArticle(){
            // console.log('+++++++++++++');
            
             axios({
                method: 'get',
                url: `http://34.87.116.76/article/read/${this.readNow}`
            })
                .then(({ data }) => {
                    this.articleNow = data[0]
                    this.paragraf = this.articleNow.paragraf 
                    console.log(data);
                    
                })
                .catch(err => {
                    console.log(err)

                })
        }
    },
    computed:{
            check(){
               if(this.readNow){
            this.readArticle()        
        }
            }
        },
    created: function(){

        }
}
</script>

<style scoped>
img{
    max-height: 20rem;
}
</style>