<template>
     <div class="container" v-if="page === 'addPost'" style="width: 40rem; margin-top: 10rem;">

            <form >
                <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="text" class="form-control" v-model="title">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Description</label>
                  <input type="text" class="form-control" v-model="desc">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Text</label>
                   <tinymce id="d1" v-model="paragraf"></tinymce>
                   {{paragraf}}
                   <!-- <wysiwyg v-model="myHTML" /> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Publish article?</label>
                    <select name="publish" v-model="publish">
                        <option value="true">Publish</option>
                        <option value="false">Later</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="exampleInputPassword1">Image</label>
                      <input type="text" class="form-control" v-model="img">
                    </div>

                <button type="submit" class="btn btn-primary" @click.prevent="addPost">ADD</button>
                
              </form>
              <!-- {{page}} -->
      </div>
</template>
<script>
name: 'addArticle'
import axios from 'axios'


export default {
    data(){
        return{
            title: '',
            img:'',
            desc: '',
            publish:'',
            paragraf:'',
            // myHTML:''
        }
    },
    props:{
        page: String
    },
    components:{
        
    },
    methods:{
        addPost(){
            const obj = {
                title: this.title,
                desc: this.desc,
                img: this.img,
                publish: this.publish,
            }
            let userid =  localStorage.getItem('access_token')

            console.log(this.paragraf)
            axios({
                method: 'post',
                url: 'http://localhost:3000/article/add',
                headers: { 'access_token': userid },
                data: obj
            })
                .then(({ data }) => {
                    this.title = ''
                    this.desc = ''
                    this.img = ''
                    this.publish = ''
                    console.log(data);
                    
                     this.$emit('change-Page', 'home')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss">

</style>