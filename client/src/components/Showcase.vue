<template>
  <section class="showcase py-5" v-if="loginCondition == true">
            <div class="container">
               <div class="showcase-content">
                  <div class="showcase-description">
                     <div class="logo">
                        <h3 class="logo-sub">care for a little space in your mind?</h3>
                     </div>
                     <p class="m-0"><i>Tubuh yang berpatah hati.
                           Bergantung pada gaji,
                           berlomba jadi asri
                           mengais validasi.
                           Dan aku pun terhadir
                           seakan paling mahir
                           menenangkan dirimu
                           yang merasa terpinggirkan dunia.
                           Tak pernah adil,
                           kita semua gagal.
                           Angkat minumanmu
                           bersedih bersama-sama!</i></p>
                  </div>
                  <div class="showcase-image">
                     <img src="../assets/img/header.jpg" alt="">
                  </div>
               </div>
            </div>
         </section>
</template>

<script>
export default {
   name : `Showcase`,
   data () {
      return {

      }
   },
   props : {
      loginCondition: Boolean
   }
}
</script>

<style>

</style>