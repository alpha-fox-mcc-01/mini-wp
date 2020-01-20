<template> 
   <nav class="bg-white">
                <div class="container flex mb-4">
                  <div class="w-1/3 h-12">
                    <div class="flex logo">
                      <img src="https://media.istockphoto.com/vectors/minimal-cat-logo-vector-id662195090" alt="logo">
                      <a>Mini-WP</a>
                    </div>
                  </div>
                  <div class="w-1/3 h-12">
                    <ul class="flex">
                      <li @click="changePage('landingpage')" class="mr-6">
                        <a class="text-black-500 hover:text-white" href="#">Home</a>
                      </li>
                    </ul>
                  </div>
                  <div v-if="currentPage === 'landingpage'" class="w-1/3 h-12">
                    <ul class="flex">
                        <li class="mr-6">
                          <button @click="changePage('loginform')" class="bg-white hover:bg-text-black font-bold py-2 px-2 rounded-full">
                          Login
                          </button>
                        </li>
                        <li class="mr-6">
                          <button @click="changePage('signupform')" class="bg-black hover:bg-black text-white font-bold py-1 px-2 rounded-full">
                          Sign Up
                          </button>
                        </li>
                        <li class="mr-6">
                          <div class="g-signin2" data-width="75" data-height="30" data-longtitle="true">
                        </li>
                    </ul>
                  </div>
                   
                  <div v-if="currentPage === 'dashboard'" class="w-1/3 h-12">
                    <ul class="flex">
                      <li class="mr-6">
                        <button @click="userLogout" class="bg-black hover:bg-black text-white font-bold py-1 px-2 rounded-full">
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div> 
                </div>
                          
    </nav>

</template>




<script>
name: 'navbar'
export default {
  data() {
    return {
      
    };
  },
  props: {
    currentPage : String,
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        },       
        userLogout() {
          console.log('masuk user logout')
            // this.changePage('landingpage')
            this.$emit('change-page', 'landingpage') 
            localStorage.removeItem('access_token')
            localStorage.removeItem('username')
        },
        onSignIn(googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
          axios.post('http://35.197.145.19/users/google-sign-in', {
                  google_token: id_token
          }) 
                .then(({data}) => {
                  let access_token = data.access_token
                  localStorage.setItem('access_token', access_token)
                  console.log(access_token, 'dr google sign in')
                  this.$emit('change-page', 'dashboard') 
                })
                .catch(err => {
                  console.log(err)
                })
        },
        signOut() {
          console.log('google signout kepanggil')
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
            console.log('User signed out.');
          });
        }

  }
};
</script>


<style>

</style>