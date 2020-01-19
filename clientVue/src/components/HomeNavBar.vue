<template>
    <div class='container'>
        <nav class="navbar navbar-expand-sm navbar-light bg-transparent">
            <div class='container'>
                <a href='#' class="navbar-brand">WeBlog</a>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav ml-auto"> <!-- mr-auto/ml-auto -->
                        <li class="nav-item">
                            <a href="#" class="nav-link disabled">Efficient  | Reliable</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto"> <!-- mr-auto/ml-auto -->
                        <li class="nav-item" @click="$emit('changePage', 'signIn')">
                            <a href="#" class="nav-link" style='color: white'>Sign In</a>
                        </li> 
                        &nbsp;
                        <li class="nav-item">
                            <button type="button" class="btn btn-dark" @click="$emit('changePage', 'signUp')">Create a Blog Web</button>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli|Noto+Sans|Ubuntu&display=swap');
.b-navbar-brand {
    font-family: 'Muli', sans-serif; 
}
</style>