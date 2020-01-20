<template>
  <div class>
    <button
      v-on:click.prevent="toggleCreateArticleCard"
      class="btn btn-block btn-lg btn-outline-info my-2 my-sm-0"
    >Add new Post</button>
    <br />
    <createArticleCard
      :createArticleCardShowed="createArticleCardShowed"
      v-on:refetch="fetchMyArticles"
      v-on:closeCreateCard="toggleCreateArticleCard"
    ></createArticleCard>
    <drafts v-on:refetch="fetchMyArticles" :myDrafts="myDrafts"></drafts>
    <publishedarticleList v-on:refetch="fetchMyArticles" :myPublishedArticles="myPublishedArticles"></publishedarticleList>
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
          this.myDrafts = data.filter(row => {
            return !row.is_published;
          });
          this.myDrafts.reverse();

          this.myPublishedArticles = data.filter(row => {
            return row.is_published;
          });
          this.myPublishedArticles.reverse();
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