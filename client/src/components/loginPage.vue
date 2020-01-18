<template>
    <div class="container mx-auto" style="width: 20rem; margin-top: 10rem;" v-if="page === 'login'">
        <h3>Sign In</h3>
          <form @submit.prevent="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
              </div>
              <button type="submit" class="btn btn-primary">Sign In</button>
            </form>            
            <p><a href="#" @click.prevent="changePage('register')">Register Here</a></p>
      </div>
</template>
<script>
name : 'loginPage'
import axios from 'axios'
export default {
    data (){
        return {
            email:'',
            password:''
        }
    },
    props:{
        page: String
    },
    methods:{
        login(){
             axios({
                method: 'post',
                url: 'http://localhost:3000/user/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
                .then(({ data }) => {
                    if(data.token){
                        localStorage.setItem('access_token', data.token);
                        console.log(data);
                        this.email = ''
                        this.password = ''
                        this.changePage('home')
                    }
                    
                })
                .catch(err => {
                    console.log(err)
                })
            
        },
         changePage(laman){
             console.log('dari login page',laman);
             this.$emit('change-Page', laman)
        }
    }
}
</script>

<style>

</style>