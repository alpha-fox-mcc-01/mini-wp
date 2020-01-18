<template>
<div>

  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="page !== 'login' && page !== 'register' ">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#" @click.prevent="changePageNav('home')">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                  <a class="nav-link" href="#" @click.prevent="changePageNav('addPost')" >ADD post <span class="sr-only"></span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#" @click.prevent="changePageNav('myarticle')" >My Article <span class="sr-only"></span></a>
                  </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              <a href="#">user</a>
              <a href="#" @click.prevent="signOut" >SignOut</a>
            </form>
          </div>
        </nav>
            
        <header class="masthead" style="background-image: url('https://spacewallpapers.org/wp-content/uploads/2014/11/new-day-of-the-mars.jpg')">
  </header>
</div>
</template>

<script>
name: 'navbarHome'
export default {
    data(){
        return{

        }
    },
    props:{
        page: String,
    },
    methods:{
         changePageNav(laman){
             console.log('dari navbarr',laman);
             this.$emit('change-Page', laman)
        },
        signOut() {
            localStorage.removeItem('access_token');
            console.log('terhapus')
            this.$emit('change-Page', 'login')
        }
    }
}
</script>

<style>

</style>