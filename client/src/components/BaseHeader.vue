<template>
  <div v-if="currentPage !== 'login' && currentPage !== 'register'">
    <nav class="">
      <div class="container text-black">
        <div class="row justify-content-between">
          <div class="col-xs-2 pt-3">
            <p>Gaming Blog Here</p>
          </div>
          <div class="col-xs-2 navigation">
            <p @click="changePage('blog-feed')">Home</p>
          </div>
          <div class="col-xs-2 navigation">
            <p @click="changePage('blog-feed')">Blog Feed</p>
          </div>
          <div class="col-xs-2 navigation">
            <p @click="changePage('dashboard')">Dashboard</p>
          </div>
          <div class="col-xs-2 navigation">
            <p @click="changePage('login')">Logout</p>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name  : 'BaseHeader',
  props : {
    currentPage : String
  },
  methods : {
    changePage(page){
      if(page === 'login'){
        localStorage.removeItem('token')
        this.$emit('navbar', page)
      }else {
        this.$emit('navbar', page)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    border-bottom: solid 1px grey;
  }
 
 p {
   cursor: pointer;
 }
 p::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

 p:hover::after {
  width: 100%;
}
</style>>