<template>
  <div class="d-flex mr-auto">
    <div class="d-flex flex-wrap-">
      <a v-for="category in categories" :key="category" class="nav-link" href="#">{{category}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedOn: Boolean
  },
  data() {
    return {
      categories: [
        "Sport",
        "Gaming",
        "Digital",
        "Permainan",
        "Bisnis",
        "internasional"
      ]
    };
  },
  methods: {
    getActiveCategory() {
      console.log("top 5 categories: ");
    }
  },
  created() {
    this.getActiveCategory();
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
  font-style: oblique;
  text-transform: capitalize;
}
</style>