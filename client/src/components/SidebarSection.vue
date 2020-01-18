<template>
  <div class="sidebarSection">
    <signinCard v-on:verify="verify" :isLoggedOn="isLoggedOn"></signinCard>
    <articleHighlight></articleHighlight>
  </div>
</template>

<script>
import signinCard from "../components/SigninCard";
import articleHighlight from "../components/ArticleHighlight";

export default {
  props: {
    isLoggedOn: Boolean
  },
  components: {
    signinCard,
    articleHighlight
  },
  methods: {
    verify(token) {
      this.$emit("verify", token);
    }
  }
};
</script>

<style>
</style>