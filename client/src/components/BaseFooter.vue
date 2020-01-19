<template>
  <div class="bg-dark text-white" v-if="currentPage !== 'login' && currentPage !== 'register'">
    <div class="container">
          <div class="row pt-3">
            <div class="col text-center">
              <p>Copyleft Ganda Sipayung &copy; 2020</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name : 'BaseFooter',
  props : {
    currentPage : String
  }
}
</script>

<style>

</style>