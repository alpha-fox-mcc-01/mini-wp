<template>
  <div class="container register" v-if="currentPage === 'register'">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header bg-warning">
				<h3 class="text-center">Register</h3>
			</div>
			<div class="card-body">
				<form @submit.prevent="registerUser">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="Full Name" v-model="name">
					</div>
          <div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						</div>
						<input type="email" class="form-control" placeholder="email" v-model="email">
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" v-model="password">
					</div>
					<div class="form-group">
						<input type="submit" value="Register" class="btn float-right register_btn">
					</div>
				</form>
			</div>
			<div class="card-footer bg-danger">
				<div class="d-flex justify-content-center links">
          <p>Alreday have an account ?</p><br>
          <p style="cursor: pointer;" @click.prevent="changePage('login')">Login Here</p>
				</div>
			</div>
		</div>
	</div>
</div>
    
</template>

<script>
import axios from 'axios'

export default {
  name : 'RegisterPage',
  data (){
    return {
      name : '',
      email : '',
      password : ''
    }
  },
  props : {
    currentPage : String
  },
  methods : {
    changePage(page){
      this.$emit('register', page)
    },
    registerUser(){
      axios({
        method : 'POST',
        url : 'http://localhost:3000/users/register',
        data : {
          name : this.name,
          email : this.email,
          password : this.password
        }
      })
        .then(token => {
          localStorage.setItem('token', token.data)
          this.name = ''
          this.email = ''
          this.password = ''
          this.changePage('blog-feed')
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
/* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.card-header h3{
color: black;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.register_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.register_btn:hover{
color: black;
background-color: white;
}

.links{
color: black;
}

</style>