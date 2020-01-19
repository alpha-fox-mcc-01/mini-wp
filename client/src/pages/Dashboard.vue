<template>
  <div class>
    <button
      v-on:click.prevent="toggleCreateArticleCard"
      class="btn btn-block btn-lg btn-outline-info my-2 my-sm-0"
    >Add new Post</button>
    <br />
    <createArticleCard
      :createArticleCardShowed="createArticleCardShowed"
      v-on:closeCreateCard="toggleCreateArticleCard"
    ></createArticleCard>
    <drafts :myDrafts="myDrafts"></drafts>
    <publishedarticleList :myPublishedArticles="myPublishedArticles"></publishedarticleList>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "../axios";

import createArticleCard from "../components/DashboardCreateArticleCard";
import publishedarticleList from "../components/DashboardPublishedArticleList";
import drafts from "../components/DashboardDrafts";
export default {
  data() {
    return {
      createArticleCardShowed: false,
      currentSection: "Published",
      myDrafts: [],
      myPublishedArticles: []
    };
  },
  methods: {
    toggleCreateArticleCard() {
      this.createArticleCardShowed = !this.createArticleCardShowed;
    },
    fetchMyArticles() {
      axios({
        method: "GET",
        url: "/articles/mine",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          console.log("ini artikel punya yang login");
          console.log(data);

          this.myDrafts = data.filter(row => {
            return !row.is_published;
          });

          this.myPublishedArticles = data.filter(row => {
            return row.is_published;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    publishedarticleList,
    createArticleCard,
    drafts
  },
  created() {
    this.fetchMyArticles();
  }
};
</script>

<style>
</style>