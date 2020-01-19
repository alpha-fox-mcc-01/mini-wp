<template>
<!-- <div v-if="page == 'articleImage'">
    <h1>teeesssstt</h1> 
</div> -->
    <div class="container" v-if="page == 'articleImage'" style="width: 40rem; margin-top: 10rem;">
      <h4 class="mb-4 ">add picture to your article</h4>
      <form action="/profile" method="post" enctype="multipart/form-data" @submit.prevent="submitFile">
        <div class="custom-file" >
          <input type="file" class="custom-file-input" id="customFile"  @change="fileChange"/>
          <label class="custom-file-label" for="customFile" >Choose file</label>
        </div>
        <div class="form-group mt-3">
          <input type="submit"  class="form-control btn btn-warning">
        </div>
      </form>
    </div>
</template>

<script>
name: 'articleImage'
import axios from 'axios'
export default {
    data(){
        return{
            image:''
        }
    },
    props:{
        page: String,
        currentArticle: String
    },
    methods:{
         fileChange (event) {
      console.log(event.target.files[0], '<<>>')
      this.image = event.target.files[0]
    },
    submitFile() {
      this.$emit('pageplus')
      let formData = new FormData();
      formData.append("image", this.image);
      console.log(">> formData >> ", formData);
      // You should have a server side REST API
      axios
        .post(`http://34.87.116.76/article/upload/${this.currentArticle}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(({data})=> {
          this.resultimg = data
          console.log(data)
          console.log("SUCCESS!!");

          this.$emit('change-Page', 'home')
        })
        .catch((err) =>{
       console.log("FAILURE!!");
        });
    },
    }
}
</script>

<style>

</style>