<template>
  <div class="row">
    <div class="col-md-8">
      <mainSection :loggedOnId="loggedOnId"></mainSection>
    </div>

    <div class="col-md-4">
      <sidebarSection v-on:verify="verify" :loggedOnId="loggedOnId" :isLoggedOn="isLoggedOn"></sidebarSection>
    </div>

    <br />&nbsp;
    <br />&nbsp;
    <br />&nbsp;
  </div>
</template>

<script>
import navigationBar from "../components/NavigationBar";

import mainSection from "../components/MainSection";
import sidebarSection from "../components/SidebarSection";
export default {
  props: {
    loggedOnId: String,
    isLoggedOn: Boolean,
    loggedOnName: String
  },
  components: {
    navigationBar,
    mainSection,
    sidebarSection
  },
  methods: {
    pageChange(value) {
      this.$emit("pageChange", value);
    },
    verify(token) {
      this.$emit("verify", token);
    }
  }
};
</script>

<style>
</style>