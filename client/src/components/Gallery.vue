<template>
   <section id="gallery" class='py-5' v-if="loginCondition == true">
            <!-- jangan lupa tambah padding -->
            <div class="container">
               <div class="gallery-heading text-center mb-5">
                  <h1>gallery</h1>
                  <h3>&hearts;</h3>
               </div>

               <div class="row no-gutters" @click.prevent="">
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/1.jpg" data-lightbox='art' >
                        <img src="../assets/img/1.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/2.jpg" data-lightbox='art'>
                        <img src="../assets/img/2.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/3.jpg" data-lightbox='art'>
                        <img src="../assets/img/3.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/4.jpg" data-lightbox='art'>
                        <img src="../assets/img/4.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/5.jpg" data-lightbox='art'>
                        <img src="../assets/img/5.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/6.jpg" data-lightbox='art'>
                        <img src="../assets/img/6.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/7.jpg" data-lightbox='art'>
                        <img src="../assets/img/7.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/8.jpg" data-lightbox='art'>
                        <img src="../assets/img/8.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
                  <div class="lightbox-content col-4">
                     <a href="../assets/img/9.jpg" data-lightbox='art'>
                        <img src="../assets/img/9.jpg" class="img-fluid" alt="">
                     </a>
                  </div>
               </div>
            </div>
         </section>
</template>

<script>
export default {
   name : `Gallery`,
   props : {
      loginCondition : Boolean
   }
}
</script>

<style>

</style>