<template>
  <div class="container" v-if="page === 'update'" style="width: 40rem; margin-top: 10rem;">

          <form @submit.prevent="updatePost(updatedPost.id)">
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" v-model="updatedPost.title" >
                 <label for="exampleInputEmail1">Desc</label>
                <input type="text" class="form-control" v-model="updatedPost.desc" >
                 <div class="form-group">
                  <label for="exampleInputPassword1">Text</label>
                   <tinymce id="d1" v-model="updatedPost.paragraf"></tinymce>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Publish article?</label>
                    <select name="publish" v-model="updatedPost.publish">
                        <option value="true">Publish</option>
                        <option value="false">Later</option>
                      </select>
                  </div>
              </div>
              
              <button type="submit" class="btn btn-primary">update</button>
            </form>
            {{updatedPost}}
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
                url: `http://34.87.116.76/article/update/${id}`,
                data: {
                    title: this.updatedPost.title,
                    desc: this.updatedPost.desc,
                    paragraf: this.updatedPost.paragraf,
                    publish: this.updatedPost.publish,
                    img: this.updatedPost.img
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