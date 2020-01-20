<template>
    <div id='sign-up-container'>
        <entryBox 
        @changePage="changePage" 
        :user="user" 
        :currentPage="currentPage"></entryBox>
    </div>
</template>

<script>
import entryBox from './EntryBox'
export default {
    components: {
        entryBox
    },
    props: ["user", "currentPage"],
    methods: {
        changePage(pageName) {
            this.$emit(
                "switchPage",
                pageName
            )
        },
        signIn(email, password) {
            this.$emit(
                "signIn",
                email,
                password
            )
        },
        signUp(username, email, password) {
            this.$emit(
                "signUp",
                username,
                email,
                password
            )
        }
    }
}
</script>

<style scoped>
#sign-up-container {
    background-image: url("./assets/images/mountainsBG.jpg");
    min-height: 100vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>