<template>
<div v-if="currentPage === 'landingpage'"> 
 <div id="headline" class="container flex mb-4">
        <div id="tagline" class="w-full h-12 text-center text-black pb-20">
            <h1 class="font-sans text-lg font-regular">Find a little pause.</h1>
            <h2 class="font-thin text-lg tracking-wide mt-2 mb-4">Discover your inner writer. Join +50,000 bloggers in our platform</h2>
        </div>
</div>

<div id="overview" class="container flex mb-4">
            <div class="col-1 w-1/4 h-12">
              <h1  class="font-sans text-lg font-regular">Blog Highlights</h1></div>
            <div class="col-2 w-3/4 h-12">
              <input class="w-full h-12 px-3 rounded mb-4 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Search...">
            </div>
</div>

<div class="flex mb-4">
            <div class="w-1/4 h-12">
              <ul>
                <li><a href="#">Self-Improvement</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Health & Mindfulness</a></li>
              </ul></div>

              <div class="w-3/4 h-12 flex flex-wrap">
                <div v-for="article in articles" :key="article._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="article.image" alt="blogimage">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{{article.category}}</div>
                      <p class="text-gray-700 text-base">
                        {{article.title}}
                      </p>
                    </div>
                </div>
              </div>
     </div>

</div>
    
</template>



<script>
name: 'landingpage'
export default {
     data() {
    return {
      articles: []
    };
  },
  props: {
    currentPage : String
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        },
        getArticles() {
            console.log('getArticles kepanggil')
            axios.get('http://35.197.145.19/articles', {
                headers: {
                  access_token : localStorage.getItem('access_token')
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
  },
  created: function() {
     this.getArticles()
  },
  updated : function() {
    this.getArticles()
  }
}
</script>


<style>
#headline {
  background-image: url('https://cdn.pixabay.com/photo/2016/08/05/09/31/banner-1571858__340.jpg');
  height: 15em;
}

#tagline {
  padding-top: 5em;
}


</style>