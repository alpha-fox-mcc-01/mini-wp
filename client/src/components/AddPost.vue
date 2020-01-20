<template>
  <div class="row newpost">
    <div class="col">
      <h1>Add New Post</h1>
    </div>
    <div class="col-12">
      <div class="card text-center">
        <div class="card-header">Add New Post</div>
        <div class="card-body">
          <div class="cardcontent nopadding">
            <form method="post" v-on:submit.prevent="addArticle">
              <div class="row">
                <div class="col">
                  <input
                    v-model="title"
                    type="text"
                    style="width: 100%;"
                    placeholder="Enter the title here"
                  />
                </div>
              </div>
              <!-- <div class="row" style="margin: 10px 0;">
                        <div class="col">
                          tombol bold italic dll disini
                        </div>
              </div>-->
              <div class="row">
                <div class="col">
                  <textarea
                    v-model="content"
                    style="width: 100%; height: 30vh;"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input type="checkbox" v-model="published" value="true" /> I wanna publish this article.
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-success roundedButton" type="submit">Submit</button>
                  <button class="btn btn-info roundedButton" @click="redirector('dashboard')">BACK</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: this.title,
      content: this.content,
      created_at: new Date().toDateString(),
      published: this.published
    };
  },
  methods: {
    addArticle() {
      const token = localStorage.getItem("user_token");
      axios({
        method: "post",
        url:
          "http://ec2-3-1-81-193.ap-southeast-1.compute.amazonaws.com:3000/articles",
        data: {
          title: this.title,
          content: this.content,
          created_at: new Date().toDateString(),
          published: this.published
        },
        headers: { user_token: token }
      })
        .then(() => {
          this.title = "";
          this.content = "";
          this.published = false;
          this.$emit("change-page", "blogPost");
        })
        .catch(err => {
          console.log(err);
          this.$emit("error-message", "You're not authorized");
        });
    }
  }
};
</script>

<style>
</style>