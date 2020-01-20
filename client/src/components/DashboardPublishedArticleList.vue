<template>
  <div class>
    <h4>Your Published Articles:</h4>
    <div>
      <articleCard
        v-on:refetch="refetch"
        v-for="article in myPublishedArticles"
        :key="article._id"
        :article="article"
      ></articleCard>
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
  methods: {
    refetch() {
      this.$emit("refetch");
    }
  },
  components: {
    articleCard
  },
  created() {}
};
</script>

<style>
</style>