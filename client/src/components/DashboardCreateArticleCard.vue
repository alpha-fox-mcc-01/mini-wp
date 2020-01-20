<template>
  <div class>
    <div class="card card-body" v-if="createArticleCardShowed">
      <h4>Create new Article</h4>
      <hr class="my-2" />
      <br />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Article Title</label>
          <div class="col-sm-10">
            <input v-model="newArticleTitle" type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Categories</label>
          <div class="col-sm-10">
            <input v-model="newArticleCategories" type="text" class="form-control" />
            <small id class="form-text text-muted">please separate each categories with comma ", "</small>
          </div>
        </div>

        <label class="col-form-label">Featured Images</label>
        <div class="custom-file">
          <input
            v-on:change="featuredImageSelected($event)"
            type="file"
            class="custom-file-input"
            id="customFile"
          />
          <label class="custom-file-label" for="customFile">Choose file</label>
          <small v-if="newArticleFeaturedImage" id class="form-text text-muted">
            <b>Selected File:</b>
            {{newArticleFeaturedImage.name}}
            <br />
            <b>Type:</b>
            {{newArticleFeaturedImage.type}}
          </small>
        </div>
        <br />
        <br />
        <!-- WYSIWYG -->
        <label class="col-form-label">Post</label>
        <!-- <input class="ckeditor" type="text" /> -->
        <tinymce-editor v-model="newArticlePost"></tinymce-editor>
      </form>
      <br />
      <div class="d-flex justify-content-between">
        <div class="postbuttonlist">
          <button v-on:click.prevent="saveNewArticle" class="btn btn-outline-info mr-1">
            <i class="fas fa-save"></i> save to draft
          </button>
          <button v-on:click.prevent="publishNewArticle" class="btn btn-info mr-1">
            <i class="fas fa-upload"></i> publish
          </button>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "../axios";
import Swal from "sweetalert2";
import Editor from "@tinymce/tinymce-vue";

export default {
  props: {
    createArticleCardShowed: Boolean
  },
  components: {
    "tinymce-editor": Editor // <- Important part
  },
  data() {
    return {
      newArticleTitle: "",
      newArticleCategories: "",
      newArticlePost: "",
      newArticleFeaturedImage: null
    };
  },
  methods: {
    featuredImageSelected(event) {
      this.newArticleFeaturedImage = event.target.files[0];

      const validFormat = this.newArticleFeaturedImage.type.includes("image");
      console.log(validFormat);

      if (!validFormat) {
        console.log("Salah Format", this.newArticleFeaturedImage.type);
        Swal.fire({
          icon: "error",
          title: "Please only select an image file",
          showConfirmButton: true,
          showClass: {
            popup: "animated fadeInDown faster"
          },
          hideClass: {
            popup: "animated fadeOutUp faster"
          }
        });
        this.newArticleFeaturedImage = null;
      }
    },
    saveNewArticle() {
      const url = "/articles";
      var formData = new FormData();
      formData.append("image", this.newArticleFeaturedImage);
      formData.append("title", this.newArticleTitle);
      formData.append("article", this.newArticlePost);
      formData.append("categories", this.newArticleCategories);
      const config = {
        headers: {
          "content-type": `multipart/form-data;`,
          access_token: localStorage.getItem("access_token")
        }
      };

      axios
        .post(url, formData, config)
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: `Post Saved to draft`,
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: "animated fadeInDown faster"
            },
            hideClass: {
              popup: "animated fadeOutUp faster"
            }
          });
          this.newArticleCategories = "";
          this.newArticleTitle = "";
          this.newArticlePost = "";

          this.$emit("closeCreateCard");
          this.$emit("refetch");
        })
        .catch(err => {
          console.log("error disini <<<<<<<<<<<");
          console.log(err);
        });
    },
    publishNewArticle() {
      const url = "/articles";
      var formData = new FormData();
      formData.append("image", this.newArticleFeaturedImage);
      formData.append("title", this.newArticleTitle);
      formData.append("article", this.newArticlePost);
      formData.append("categories", this.newArticleCategories);
      formData.append("is_published", true);
      const config = {
        headers: {
          "content-type": `multipart/form-data;`,
          access_token: localStorage.getItem("access_token")
        }
      };

      axios
        .post(url, formData, config)
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: `Post Saved to draft`,
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: "animated fadeInDown faster"
            },
            hideClass: {
              popup: "animated fadeOutUp faster"
            }
          });
          this.newArticleCategories = "";
          this.newArticleTitle = "";
          this.newArticlePost = "";

          this.$emit("closeCreateCard");
          this.$emit("refetch");
        })
        .catch(err => {
          console.log("error disini <<<<<<<<<<<");
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>