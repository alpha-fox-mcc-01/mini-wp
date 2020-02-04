<template>
    <div>
        <homeNavbar :currentPage="currentPage" @changePage="changePage"></homeNavbar>
        <div id='banner'>
            <h1>MODERN. CLEAN. ELEGANT.</h1>
            <p>Easy to Use, No Code or Design Skills Required.</p>
            <center><button type="button" class="btn btn-dark" id="btn-about"><h6>LEARN MORE</h6></button></center>
            <!-- <center><b-button id="btn-about" size="sm" class="my-2 my-sm-0" type="submit"><h6>LEARN MORE</h6></b-button></center> -->
        </div>
    </div>
</template>

<script>
import homeNavbar from './HomeNavBar'
export default {
    props: ["currentPage"],
    components: {
        homeNavbar
    },
    methods: {
        changePage(pageName) {
            console.log(pageName, " dari banner")
            this.$emit('changePage', pageName)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli|Noto+Sans|Ubuntu&display=swap');
#banner h1 {
    text-align: center;
    font-size: 6rem;
    margin-top: 9rem;   
}

#banner p {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1rem;
}
#btn-about {
    /* font-family: Raleway-SemiBold; */
    margin-top: 20px;
    font-size: 13px;
    /* color: rgba(108, 88, 179, 0.75); */
    height: 50px;
    width: 170px;
    letter-spacing: 1px;
    line-height: 15px;
    /* border: 2px solid rgba(108, 89, 179, 0.75); */
    border-radius: 40px;
    /* background: transparent; */
    transition: all 0.3s ease 0s;
}
</style>