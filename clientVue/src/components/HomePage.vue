<template>
    <div>
        <div id='header'>
            <banner :currentPage="currentPage" @changePage="changePage">
        </div>
        <div class='container' id='what-we-offer'>
            <h1>SERVICES WE OFFER</h1>
            <p id='headline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam tempore ut facere vero repellat, qui dolore delectus esse dolor et</p>
        </div>
        <div id ='key-features'>
            <div class='row features'>
                <div class='col-md-6' style='float: left'>
                    <div class='row'>
                        <div class='col-md-2'>
                            <img src="assets/images/paintbrush.png" height=95 width=95 style='margin-top: 10px;'>
                        </div>
                        <div class="col-md-10">
                            <h3>Modern Design</h3>    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam! Impedit nihil facilis inventore. Fuga illo et molestias voluptas, perspiciatis aut distinctio ipsam, non esse eos ea iste. Laudantium, placeat!</p>
                        </div>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='row'>
                        <div class='col-md-2'>
                            <img src="assets/images/doublesquare.png" height=95 width=95 style='margin-top: 10px;'>
                        </div>
                        <div class='col-md-10'>
                            <h3>Live Customizer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam! Impedit nihil facilis inventore. Fuga illo et molestias voluptas, perspiciatis aut distinctio ipsam, non esse eos ea iste. Laudantium, placeat!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row features' style='margin-bottom: 5rem;'>
                <div class='col-md-6'>
                    <div class='row'>
                        <div class='col-md-2'>
                            <img src="assets/images/clock.png" height=95 width=95>
                        </div>
                        <div class='col-md-10'>
                            <h3>Quick Setup</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam! Impedit nihil facilis inventore. Fuga illo et molestias voluptas, perspiciatis aut distinctio ipsam, non esse eos ea iste. Laudantium, placeat!</p>
                        </div>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='row'>
                        <div class='col-md-2'>
                            <img src="assets/images/trolley.png" height=95 width=95>
                        </div>
                        <div class='col-md-10'>
                            <h3>Suitable for E-commerce</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsam! Impedit nihil facilis inventore. Fuga illo et molestias voluptas, perspiciatis aut distinctio ipsam, non esse eos ea iste. Laudantium, placeat!</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr style='margin-bottom: 5rem;'>
            <div class="card" style="width: 90rem; margin: 0 auto;">
                <div class="card-body">
                    <div class='row'>
                        <div class='col-md-6'>
                            <div align="center" class="embed-responsive embed-responsive-16by9">
                                <video autoplay muted loop class="embed-responsive-item">
                                    <source src='./assets/videos/web-constructor.mp4' type=video/mp4>
                                </video>
                            </div>
                        </div>
                        <div class='col-md-6'>
                            <h5 class="card-title" style='margin-top: 80px; color:rgb(104, 6, 173);'>USER-FRIENDLY BLOG BUILDER</h5>
                            <h1 class="card-subtitle mb-2 text-muted">The easiest way to build your own blog website</h1>
                            <p class="card-text">Making your site is like playing with building blocks. Add all types of content in just a few clicks, move it around or change it up anytime. Have fun with it.</p>
                            <a href="#" class="card-link">Templates</a>
                            <a href="#" class="card-link">Premium</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr style='margin-top: 5rem;'>
            <div align='center' class='container' id='create-website'>
                <h3>So what are you waiting for...</h3>
                <h1>Create your own blog for free!</h1>
                <p>You can create an <strong>amazing blog</strong> with WeBlog in just minutes</p>
                <p>Join fellow bloggers and <strong>build one yourself</strong>.</p>
                <button type="button" class="btn btn-dark" id='build-yourself' @click="changePage('signUp')">Create a Blog</button>
            </div>
            <div class='row' align='center' style='margin-top: 5rem'>
                <div class='col-md-4'>
                    <div class="card border-0" style="width: 18rem;">
                        <img src="./assets/images/promote.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">Think you're alone? Why don't you meet up with the growing amount of junior developers/bloggers around you?</p>
                        </div>
                    </div>
                </div>
                <div class='col-md-4'>
                    <div class="card border-0" style="width: 18rem;">
                        <img src="./assets/images/teamwork.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">Witness your career jump, as you work on top-notch digital content to satisfy the public</p>
                        </div>
                    </div>
                </div>
                <div class='col-md-4'>
                    <div class="card border-0" style="width: 18rem;">
                        <img src="./assets/images/populationUse.png" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text">Even with minimum IT background, you can still become a pioneer of digitalization</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <myFooter>
    </div>
</template>

<script>
import banner from './Banner'
import homeNavbar from './HomeNavBar'
import myFooter from './Footer'
export default {
    components: {
        banner,
        homeNavbar,
        myFooter
    },
    props: ["user", "currentPage"],
    methods: {
        changePage(pageName) {
            this.$emit('switchPage', pageName)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli|Noto+Sans|Ubuntu&display=swap');
#header {
    background-image: url("./assets/images/mountainsBG.jpg");
    min-height: 680px;
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}
#what-we-offer {
    margin-top: 6rem;
    width: 1500px;
    margin-bottom: 3rem;
}

#what-we-offer #headline {
    margin-top: 1.5rem;
    text-align: center;
}

#what-we-offer h1 {
    font-family: 'Muli', sans-serif; 
    font-size: 50px;
    text-align: center;
}

.features {
    margin-bottom: 3rem;
}

#key-features {
    max-width: 95rem;
    margin: 0 auto;
}

#key-features h3 {
    color: rgb(104, 6, 173)
}

#create-website {
    margin-top: 7rem;
    font-family: 'Ubuntu', sans-serif;  
}

#build-yourself {
    margin-top: 2rem;
    height: 50px;
    width: 200px;
    background-color: rgb(104, 6, 173);
}
</style>