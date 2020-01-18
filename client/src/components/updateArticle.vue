<template>
  <div class="container" v-if="page === 'update'" style="width: 20rem; margin-top: 10rem;">

          <form @submit.prevent="updatePost(updatedPost.id)">
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" v-model="updatedPost.title" >
                 <label for="exampleInputEmail1">Desc</label>
                <input type="text" class="form-control" v-model="updatedPost.desc" >
              </div>
              
              <button type="submit" class="btn btn-primary">update</button>
            </form>
          
    </div>
</template>

<script>
name: 'updateArticle'
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    props:{
        updatedPost:{},
        page:''
    },
    methods:{
         updatePost(id) {
            console.log(id)
            console.log('bisa update')
            axios({
                method: 'put',
                url: `http://localhost:3000/article/update/${id}`,
                data: {
                    title: this.updatedPost.title,
                    desc: this.updatedPost.desc
                }
            })
                .then(({ data }) => {
                    this.$emit('change-Page', 'myarticle')
                })
                .catch(err => {
                    console.log(err)

                })
        }
    }
}
</script>

<style>

</style>