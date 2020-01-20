<template>
  <div class>
    <h4>Your Drafts:</h4>
    <div class="unpublishedPost list-group">
      <draftCard v-on:refetch="refetch" v-for="draft in myDrafts" :key="draft._id" :draft="draft"></draftCard>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import draftCard from "../components/DashboardDraftCard";
export default {
  props: {
    myDrafts: Array
  },
  components: {
    draftCard
  },
  methods: {
    refetch() {
      this.$emit("refetch");
    }
  }
};
</script>

<style>
</style>