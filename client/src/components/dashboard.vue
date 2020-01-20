<template>
    <div v-if="currentPage === 'dashboard'" id="dashelement" class="flex mb-4">
                <div class="w-1/4 w-15">
                    <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                        <img src="https://image.freepik.com/free-photo/gray-texture-background_24972-673.jpg" class="w-full" />
                        <div class="flex justify-center -mt-8">	
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class="text-black text-sm bold font-sans">Hello, {{username}}!</h3>
                        <p class="mt-2 font-sans font-light text-grey-dark">What's your focus today?</p>
                        </div>
                    <div>
                        <ul class="list">
                          <li @click="onDashboard = 'createArticle'">
                            <a class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Create Article</a>
                          </li>
                          <li @click="onDashboard = 'viewDrafts'">
                            <a class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">My Drafts</a>
                          </li>
                          <li @click="onDashboard = 'viewPublished'">
                            <a href="#" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">My Published Articles</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div id='welcome' v-if="onDashboard === 'welcome'">
              <img src="https://images-na.ssl-images-amazon.com/images/I/31WDC1Hi2AL._SX425_.jpg" alt="welcomecat">
            </div>

            <div id='viewDrafts' v-if="onDashboard === 'viewDrafts'" class="w-1/2 flex flex-wrap p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div v-for="draft in drafts" :key="draft._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" :src="draft.image" alt="Trump">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{draft.category}}</div>
                  <p class="text-gray-700 text-base">
                    {{draft.title}}
                  </p>
                  <p class="text-gray-700 text-base"> by {{draft.userId.username}}</p>
                  <button @click="publishDraft(draft._id)" class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Publish</button>
                  <button class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" >Edit</button>
                  <button @click="deleteItem(draft._id)" class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Delete</button> 
                </div>
            </div>
            </div>

            <div id='viewPublished' v-if="onDashboard === 'viewPublished'" class="w-1/2 flex flex-wrap p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div v-for="article in articles" :key="article._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" :src="article.image" alt="Trump" style="max-height: 200px; max-width: 200px;">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{article.category}}</div>
                  <p class="text-gray-700 text-base">
                    {{article.title}}
                  </p>
                  <p class="text-gray-700 text-base"> by {{article.userId.username}}</p>
                  <p class="text-gray-700 text-base"> created at: {{article.created_at}}</p>
                  <button @click="readArticle(article._id)" class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" >Read More</button>
                  <button class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" >Edit</button>
                  <button @click="deleteItem(article._id)" class="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Delete</button> 
                </div>
              </div>
            </div>

            <div id='createArticle' v-if="onDashboard === 'createArticle'" class="w-1/2 flex p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div class="w-full">
                  <form @submit.prevent="postArticle">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold bg:grey mb-3 md:mb-0 pr-4" for="my-textfield">
                                Title
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="title" class="form-input block w-full focus:bg-gray-200" id="title" type="text" value="" placeholder="Your title goes here.........">
                            <p class="py-2 text-sm text-gray-600">Title</p>
                        </div>
              

                    <div class="w-full flex mb-6">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Category
                            </label>
                        </div>
                        <div class="w-1/3">
                            <select v-model="category" name="category" class="form-select block w-full focus:bg-white" id="my-select">
                                <option value="food">Food</option>
                                <option value="health">Health</option>
                                <option value="beauty">Beauty</option>
                                <option value="others">Others</option>
                            </select>
                            

                            <p class="py-2 text-sm text-gray-600">Pick your article category</p>
                        </div>
                    </div>

                    <div class="w-3/4 flex mb-6">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Content
                            </label>
                        </div>
                        <div class="w-2/3">
                            <!-- <textarea v-model="content" class="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="30"></textarea> -->
                            <tinymce id="d1" v-model="content"></tinymce>
                            <p class="py-2 text-sm text-gray-600">add your article here</p>
                        </div>
                    </div>

                    <div class="md:flex">
                        <div class="md:w-1/3">
                        </div>
                        <br>
                        <div class="md:w-2/3">
                            <input type="submit" class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                          </input>
                        </div>
                      </div>
                  </form>
            </div>
          </div>
                  <div v-if="onDashboard === 'uploadImage'" id="uploadImage" class="w-1/2 flex flex-wrap p-8 mt-6 lg:mt-0 rounded shadow bg-white"> 
                     <form method="post" enctype="multipart/form-data" @submit.prevent="submitFile">
                     <h3>Upload a featured image for your article</h3>
                      <div class="custom-file" >
                        <input type="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
                        <label class="custom-file-label" for="customFile" >Choose file</label>
                      </div>
                      <div class="form-group mt-3">
                        <input type="submit"  class="form-control btn btn-warning">
                      </div>
                    </form>
                  </div>
                <div v-if="onDashboard === 'readArticle'" class="w-full"> 
                    <div style="padding-left: 25px;" class="flex-col bg-white shadow">
                    <a style="color: red; padding-top: 2em;">{{readOne.category}}</a>
                    <h1 style=" font-size: xx-large;">{{readOne.title}}</h1>
                    <a>By {{readOne.userId.username}}</a><br>
                    <a>{{readOne.created_at}}</a>
                  </div>
                  <div id="blogcontent" class="flex mb-4">
                    <div style="padding-top: 2em;" class="w-1/2 h-12">
                      <img :src="readOne.image" style="max-width: 500px">
                      <p v-html="readOne.content">{{readOne.content}}</p>
                    </div>
                   </div>
                </div>

    </div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'
import Swal from 'sweetalert2'
name: 'dashboard'
export default {
    data() {
    return {
      onDashboard : 'welcome',
      articles: [],
      drafts: [],
      title: '',
      content: '', 
      category: '',
      readOne: {},
      imageId : '',
      username: ''
    };
  },
  props: {
    currentPage : String,
  },
  components: {
    tinymce
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        },
        postArticle(){
            let access_token = localStorage.getItem('access_token')
            console.log('masuk post article')
            axios.post('http://35.197.145.19/articles', {
                title: this.title,
                category: this.category,
                content: this.content,
            },{
                headers: { 
                    access_token: access_token
                }
            })
            .then(({data}) => {
                this.imageId = data.id
                this.title = ''
                this.content = ''
                this.getDrafts()
                this.getArticles()
                this.onDashboard = 'uploadImage'
                
            })
            .catch(err => {
                console.log(err)
            })
            
        },
        getDrafts() {
          console.log('masuk getDrafts')
            axios.get('http://35.197.145.19/articles/drafts', {
                headers: { 
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then(({ data }) => {
                console.log(data)
                this.drafts = data.result
            })
            .catch(err => {
                console.log(err)
            })
        },
        getArticles() {
          console.log('masuk published article')
            axios.get('http://35.197.145.19/articles',{
                headers: { 
                    access_token: localStorage.getItem('access_token')
                }
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data.result
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
        deleteItem(itemId) {
          console.log('masuk delete article')
            axios.delete(`http://35.197.145.19/articles/${itemId}`,{
                headers: { 
                    access_token: localStorage.getItem('access_token')
                }
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.getArticles()
                     this.getDrafts()
                     
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
         publishDraft(itemId) {
          console.log('masuk publish article')
          console.log(localStorage.getItem('access_token'))
          let access_token = localStorage.getItem('access_token')
            axios.patch(`http://35.197.145.19/articles/${itemId}`,  {
                published: true
            },{
              headers : {
                access_token : access_token
              }
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.onDashboard = 'viewPublished'
                     Swal.fire('Article successfully published!')
                     this.getArticles()
                     this.getDrafts()
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
        readArticle(itemId) {
            axios.get(`http://35.197.145.19/articles/${itemId}`,{
                headers: { 
                    access_token: localStorage.getItem('access_token')
                }
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.readOne = data.result
                     this.onDashboard = 'readArticle'
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
        fileChange (event) {
      console.log(event.target.files[0], '<<>>')
      this.image = event.target.files[0]
    },
    submitFile() {
      let formData = new FormData();
      formData.append("image", this.image);
      console.log(">> formData >> ", formData);
      let articleId = this.imageId
      axios.post(`http://35.197.145.19/articles/upload/${articleId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            access_token : localStorage.getItem('access_token')
          }
        })
          .then(({data})=> {
            this.resultimg = data
            this.onDashboard = 'viewDrafts'
            this.getDrafts()
            console.log(data)
            console.log("uploaded");
            Swal.fire('Article successfully created!')
          })
          .catch((err) =>{
            console.log("failed");
          });
    }      
  },
  created : function() {
    this.getArticles()
    this.getDrafts()
    this.username = localStorage.getItem('username')
  },
  updated: function() {
     this.getArticles()
    this.getDrafts()
    this.username = localStorage.getItem('username')
  }
    
}
</script>


<style>

</style>