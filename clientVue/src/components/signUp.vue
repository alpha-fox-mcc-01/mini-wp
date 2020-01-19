<template>
    <form @submit.prevent="signUp">
        <label for="website">1. Enter your username to be bound to your personal blog</label>
        <input type="text" class="form-control" id="blogSignUp" v-model="user.username" placeholder="johndoe" data-toggle='tooltip' title="The name will be used for your blog's title">
        <div class="row">
            <div class='col-md-6'>
                <p style='margin-top: 2rem;'>2. Register</p>
                <div class="form-group">
                    <label for="signup-email">Email address</label>
                    <input type="email" class="form-control" id="signup-email" v-model="user.email" placeholder="johndoe@mail.com" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br>
                <div class='form-group'>
                    <label for="sign-up-password">Password</label>
                    <input type="password" class="form-control" v-model="user.password" id="signup-password">
                </div>
                <button type="button" class="btn btn-dark">Start a Blog Web</button>
            </div>
            <div class='col-md-6'>
                <div class='container' style='margin-top: 6.5rem; margin-left: 2rem; border-left: solid black; height:14.1rem;'>
                    <div class="g-signin2" data-onsuccess="onSignIn" style='margin-left: 2rem'></div>
                </div>
            </div>
        </div>
        <div style='margin-top: 2rem;'>
            <p>By registering and creating your website you agree to our Terms and conditions and the Privacy Policy.</p>
        </div>
    </form>
</template>

<script>
export default {
    props: ["currentPage", "user"],
    methods: {
        changePage(pageName) {
            this.$emit(
                "changePage",
                pageName
            )
        }
    }
}
</script>

<style scoped>

</style>