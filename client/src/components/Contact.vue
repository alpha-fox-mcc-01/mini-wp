<template>
   <section id="contact" v-if="loginCondition == true">
            <footer>
               <p class="my-2">change for the better &copy; 2020</p>
            </footer>
         </section>
</template>

<script>

export default {
   name : 'Contact',
   props : {
      loginCondition : Boolean
   }
}
</script>

<style>

</style>