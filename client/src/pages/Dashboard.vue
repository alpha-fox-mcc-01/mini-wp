<template>
  <div class>
    <button
      v-on:click.prevent="toggleCreateArticleCard"
      class="btn btn-lg btn-outline-info my-2 my-sm-0"
    >Add new Post</button>
    <br />
    <br />
    <createArticleCard :createArticleCardShowed="createArticleCardShowed"></createArticleCard>
  </div>
</template>

<script>
import createArticleCard from "../components/DashboardCreateArticleCard";
export default {
  data() {
    return {
      createArticleCardShowed: true,
      currentSection: "Draft"
    };
  },
  methods: {
    toggleCreateArticleCard() {
      console.log("toggle");
      this.createArticleCardShowed = !this.createArticleCardShowed;
    }
  },
  components: {
    createArticleCard
  }
};
</script>

<style>
</style>