<template>
  <div class>
    <h4>Your Published Articles:</h4>
    <div>
      <articleCard v-for="article in myPublishedArticles" :key="article._id" :article="article"></articleCard>
    </div>
  </div>
</template>

<script>
import articleCard from "../components/DashboardArticleCard";
export default {
  props: {
    myPublishedArticles: Array
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    articleCard
  },
  created() {}
};
</script>

<style>
</style>