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
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>
        <br />
        <br />
        <!-- WYSIWYG -->
        <label class="col-form-label">Post</label>
        <!-- <input class="ckeditor" type="text" /> -->
        <tinymce-editor
          v-model="newArticlePost"
          :init="{plugins: 'wordcount'}"
          class="form-control"
        ></tinymce-editor>
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
      newArticlePost: ""
    };
  },
  methods: {
    saveNewArticle() {
      axios({
        method: "POST",
        url: "/articles",
        data: {
          is_published: false,
          title: this.newArticleTitle,
          article: this.newArticlePost,
          categories: this.newArticleCategories
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          this.newArticleCategories = "";
          this.newArticleTitle = "";
          this.newArticlePost = "";
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

          this.$emit("closeCreateCard");
        })
        .catch(err => {
          console.log(err);
        });
    },

    publishNewArticle() {
      axios({
        method: "POST",
        url: "/articles",
        data: {
          is_published: true,
          title: this.newArticleTitle,
          article: this.newArticlePost,
          categories: this.newArticleCategories
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
</style>