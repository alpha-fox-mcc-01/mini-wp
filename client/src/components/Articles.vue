<template>
   <section id="blog" class="py-5" v-if="loginCondition == true">
            <div class="blog-heading text-center mb-5">
               <h1>article</h1>
               <h3>&lowast;</h3>
            </div>
            <div class="container">
               <div class="row">
                  <div class="col-5">
                     <!-- bawah adalah get article -->
                     <div id="all-article">
                        <div class="border" style='border-radius: 4px; overflow: auto; max-height: 80vh;'>
                           <!-- lempar content ke sini -->
                           <div class="no-article text-center"
                              v-if="article.length == 0">
                              <p class="my-5">there's no public article to read</p>
                           </div>
                           <div class="public-article" v-if="article.length > 0">

                              <!-- disini loop public article -->
                              <div v-for="item in article" :key="item._id">
                                 <div v-if="item.publish === true">
                                    <div class="p-3 border-bottom">
                                       <h5 class="article-title text-center mb-4 mt-2"><strong>~
                                          </strong>{{item.title}}<strong> ~</strong></h5>

                                       <div class="row">
                                          <div class="col text-center"><span @click="readDetailArticle(item._id)"
                                                style="cursor: pointer;">Read article <i
                                                   class="fas fa-play ml-2"></i></span></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>


                           <!-- sampai sini -->

                        </div>
                     </div>
                  </div>
                  <div class="col-7">
                     <div id="detail-article">
                        <!-- bawah adalah get details article -->
                        <div class="no-article-selected" v-if="readArticle.content.length < 1">
                           <div class="border" style="border-radius: 4x; overflow: auto; max-height: 80vh;">
                              <p class="text-center py-4 mb-0"><i>Select article to read</i></p>
                           </div>
                        </div>

                        <div class="detail-article" v-if="readArticle.content.length > 0">
                           <div class="border" style="border-radius: 4px; overflow: auto; max-height: 80vh;">
                              <div class="mx-4 my-3">
                                 <i><h4 class="mt-4" style="font-family: 'Gelasio', serif">{{readArticle.title}}</h4></i> <br>
                                 <p style="font-family: 'Gelasio', serif">Author : {{readArticle.author}}</p>
                                 <p class="mt-4" style="font-family: 'Gelasio', serif;" v-html="readArticle.content"></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
</template>

<script>
import axios from "axios"

export default {
   name : `Article`,
   props : {
      loginCondition : Boolean,
      article : Array
   },
   data () {
      return {
         readArticle: {
            _id: '',
            name: '',
            title: '',
            content: '',
            author: '',
            userId: '',
            image: ''
         }
      }
   },
   methods : {
      readDetailArticle(articleId) {
         axios({
            method: `GET`,
            url: `http://localhost:3000/articles/${articleId}`,
            headers: {
               token: localStorage.getItem(`token`)
            }
         })
            .then(({data}) => {
               // console.log(data);
               console.log(data);

               this.readArticle._id = data.data._id
               this.readArticle.title = data.data.title
               this.readArticle.content = data.data.content
               this.readArticle.author = data.data.userId[0].name
               this.readArticle.userId = data.data.userId[0]._id
               this.readArticle.image = data.data.image
            })
            .catch(err => {
               console.log(err);
            })
      },
   }

}
</script>

<style>

</style>