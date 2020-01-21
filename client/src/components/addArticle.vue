<template>
     <div class="container mt-5" v-if="page === 'addPost'" style="width: 40rem;">

            <form >
                <div class="form-group">
                  <label for="exampleInputEmail1">Title</label>
                  <input type="text" class="form-control" v-model="title">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Description</label>
                  <input type="text" class="form-control" v-model="desc">
                </div>
                <div class="form-group" height="10rem">
                  <label for="exampleInputPassword1">Text</label>
                   <tinymce id="d1" v-model="paragraf"></tinymce>
                   <!-- {{paragraf}} -->
                   <!-- <wysiwyg v-model="myHTML" /> -->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Publish article?</label>
                    <select name="publish" v-model="publish">
                        <option value="true">Publish</option>
                        <option value="false">Later</option>
                      </select>
                      <small class="form-text text-muted">if didnt choose any or later, your article will be private</small>
                  </div>
                   <div class="custom-file" >
          <input type="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
          <label class="custom-file-label" for="customFile" >{{imgName}}</label>
        </div>
        <div class="alert alert-danger" role="alert" v-if="this.alert == true">
  please select image
</div>
        <div class="form-group mt-5">
                  <button  @click.prevent="addPost" type="submit" class="btn btn-primary" >ADD</button>
                </div>

                
                
              </form>
              <!-- {{page}} -->
      </div>
</template>
<script>
name: 'addArticle'
import axios from '../api/axiosInstance'


export default {
    data(){
        return{
            title: '',
            img:'',
            desc: '',
            publish:'',
            paragraf:'',
            alert:'',
            imgName:'Choose file'
            // myHTML:''
        }
    },
    props:{
        page: String
    },
    components:{
        
    },
    methods:{
        fileChange (event) {
            console.log(event.target.files[0], '<<>>')
            this.imgName = event.target.files[0].name
            this.image = event.target.files[0]
        },
        addPost(){

            // this.$emit('pageplus')
            let formData = new FormData();
            formData.append("image", this.image);
            formData.append("title", this.title);
            formData.append("desc", this.desc);
            formData.append("paragraf", this.paragraf);
            formData.append("publish", this.publish);
            console.log(">> formData >> ", formData);
            
            const obj = {
                title: this.title,
                desc: this.desc,
                img: this.img,
                publish: this.publish,
                paragraf: this.paragraf
            }
            let userid =  localStorage.getItem('access_token')

            console.log(this.paragraf)
            axios({
                method: 'post',
                url: '/article/add',
                headers: { 
                    'access_token': userid,
                    "Content-Type": "multipart/form-data"
                     },
                data: formData
            })
                .then(({ data }) => {
                    this.title = ''
                    this.desc = ''
                    this.img = ''
                    this.publish = ''
                    this.paragraf=''
                    this.imgName='Choose file'
                    console.log(data);
                    
                    this.$emit("change-Page", 'home');
                    //  this.$emit('article-Image', data.data._id)
                })
                .catch(err => {
                    this.alert = true
                    console.log(err)

                })
        }
    }
}
</script>

<style lang="scss">

</style>