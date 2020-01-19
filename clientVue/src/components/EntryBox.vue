<template>
    <div class="card" id='sign-up-card'>
        <div class="card-body">
            <div class="row">
                <div class='col-md-6'>
                    <h1 class="card-title" id='sign-up-title' v-if="currentPage === 'signUp'">Create Your Blog</h1>
                    <h1 class="card-title" id='log-in-title' v-if="currentPage === 'signIn'">Sign In</h1>
                </div>
                <div class='col-md-6 d-flex justify-content-end'>
                    <!-- <button type="button" class="btn btn-dark" style='height: 2.5rem;' @click="changePage('landing')"><i class="material-icons" data-toggle='tooltip' title="Go back">keyboard_arrow_left</i></button> -->
                    <button type="button" class="btn btn-dark" style='height: 2.5rem;' @click="$emit('changePage', 'landing')">Go Back</button>
                </div>
            </div>
            <signUp @changePage="changePage" v-if="currentPage === 'signUp'" :user="user"></signUp>
            <signIn @changePage="changePage" v-if="currentPage === 'signIn'" :user="user"></signIn>
        </div>
    </div>
</template>



<script>
import signUp from './signUp'
import signIn from './signIn'
export default {
    components: {
        signUp,
        signIn
    },
    props: ["currentPage", "user"],
    methods: {
            changePage(pageName) {
            this.$emit('changePage', pageName)
        }
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli|Noto+Sans|Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
#sign-up-card {
    height: 35rem;
    width: 55rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}

#sign-up-title {
    font-family: 'Ubuntu', sans-serif;
}

#log-in-title {
    font-family: 'Ubuntu', sans-serif;
    margin-bottom: 3rem;
}
</style>
