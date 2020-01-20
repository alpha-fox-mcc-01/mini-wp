<template>
     <div v-if="currentPage === 'signupform'" style="align-items: center;" class="flex bg-grey-lighter min-h-screen flex flex-col">
                        <div class="max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                              <form @submit.prevent="userRegister">

                                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                                <input 
                                    type="text"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname"
                                    placeholder="Full Name" v-model="username"/>
                                <input 
                                    type="text"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" v-model="email" />
            
                                <input 
                                    type="password"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password" v-model="password" />
                                <button @click="userRegister"
                                    type="submit"
                                    class="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>
            
                                <div class="text-center text-sm text-grey-dark mt-4">
                                    By signing up, you agree to the 
                                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                        Terms of Service
                                    </a> and 
                                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                        Privacy Policy
                                    </a>
                                </div>
                              </form>
                            </div>
            
                            <span @click="changePage('signupform')" class="text-grey-dark mt-6">
                                Already have an account? 
                                <button @click="changePage('signupform')">
                                Login
                                </button>
                            </span>
                        </div>
                    </div>
</template>



<script>
name: 'signupform'
export default {
    data () {
        return {
            email: '',
            password: '', 
            username: ''
        }
    },
    props: {
        currentPage : String,
    },
    methods: {
         changePage(page) {
            this.$emit('change-page', page)
        },
        userRegister(){
            axios.post('http://35.197.145.19/users/register', {
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then(({data}) => {
                Swal.fire('Registration success!')
                this.changePage('loginform')
            })
            .catch(err => {
                console.log(err)
                Swal.fire(err)
            })
        },

    }
}
</script>


<style>

</style>