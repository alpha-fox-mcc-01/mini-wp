<template>
  <div class="row" style="margin-top: 25px;">
    <div class="col-12 col-md-6">
      <!-- AT A GLANCE -->
      <div class="card text-center">
        <div class="card-header">At a Glance</div>
        <div class="card-body">
          <button class="btn btn-primary" @click="redirector('addPost')">Post</button>
          <button class="btn btn-primary">Page</button>
          <button class="btn btn-primary">Comment</button>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
      <!-- END OF AT A GLANCE -->

      <!-- ACTIVITY -->
      <div class="card text-center">
        <div class="card-header">Activity</div>
        <div class="card-body">Rencently Published</div>
        <div class="card-text recentlyPublished">
          <!-- ISINYA DISINI -->
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
    <!-- END OF ACTIVITY -->

    <!-- QUICK DRAFT -->
    <div class="col-12 col-md-6">
      <div class="card text-center">
        <div class="card-header">Quick Draft</div>
        <div class="card-body">
          <div class="cardcontent nopadding">
            <form method="post" v-on:submit.prevent="addArticle">
              <div class="row">
                <div class="col">
                  <label for="draftTitle">Title</label>
                  <input
                    type="text"
                    v-model="title"
                    name="draftTitle"
                    id="draftTitle"
                    style="width: 100%;"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="draftContent" class="formLabel">Content</label>
                  <textarea
                    v-model="content"
                    name="draftContent"
                    id="draftContent"
                    style="width: 100%; height: 30vh;"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-success roundedButton" type="submit">Save Draft</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
    </div>
    <!-- END OF QUICK DRAFT -->
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