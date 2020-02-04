<template>
    <div ref="signinBtn" class="btn-sign-in">Sign In</div>
</template>

<script>
export default {
    props:[],
    methods: {
        onSignIn(googleUser) {
            let google_token = googleUser.getAuthResponse().id_token
            axios.post('https://34.87.49.35/users/google-sign-in', {
                google_token
            })
                .then(data => {
                    localStorage.setItem('access_token', data.access_token)
                }
        }
    }
}
        
</script>

<style scoped>

</style>