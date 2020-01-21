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
                    <div class="custom-file" >
          <input type="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
          <label class="custom-file-label" for="customFile" >{{imgName}}</label>
        </div>
              
              <button type="submit" class="btn btn-primary mt-5">update</button>
            </form>
           
    </div>
</template>

<script>
name: 'updateArticle'
import axios from '../api/axiosInstance'
export default {
    data(){
        return{

        }
    },
    props:{
        updatedPost:{},
        page:'',
        imgName:''
    },
    methods:{
         fileChange (event) {
            console.log(event.target.files[0], '<<>>')
            this.imgName = event.target.files[0].name
            this.image = event.target.files[0]
        },
         updatePost(id) {
            console.log(id)
            console.log('bisa update')
            axios({
                method: 'put',
                url: `/article/update/${id}`,
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