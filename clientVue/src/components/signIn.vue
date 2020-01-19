<template>
    <form @submit.prevent="signIn">
        <div class="row">
            <div class='col-md-6'>
                <div class="form-group">
                    <label for="signin-email">Email address</label>
                    <input type="email" class="form-control" v-model="user.email" id="signin-email" aria-describedby="emailHelp">
                </div>
                <br>
                <div class='form-group'>
                    <label for="signin-password">Password</label>
                    <input type="password" class="form-control" v-model="user.password" id="signin-password">
                </div>
                <button type="button" class="btn btn-dark" >Enter Your Dashboard</button>
            </div>
            <div class='col-md-6'>
                <div class='container' style='margin-top: 2.5rem; margin-left: 2rem; border-left: solid black; height:14.1rem;'>
                    <!-- <div class="g-signin2" data-onsuccess="onSignIn" style='margin-left: 2rem;'></div> -->
                </div>
            </div>
        </div>
        <div style='margin-top: 6rem;'>
            <p>By logging in you agree to our Terms and conditions and the Privacy Policy.</p>
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