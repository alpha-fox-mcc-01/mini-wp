<template>
  <div class>
    <div class="card">
      <div v-if="editFormShowed" class="card-body">
        <div class="d-flex justify-content-between">
          <h4>Edit Article</h4>
          <button v-on:click.prevent="publishArticle" class="btn btn-info mr-1">
            <i class="fas fa-undo"></i> Retract Article
          </button>
        </div>
        <hr class="my-2" />
        <br />
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Article Title</label>
            <div class="col-sm-10">
              <input v-model="editTitle" type="text" class="form-control" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Categories</label>
            <div class="col-sm-10">
              <input v-model="categories" type="text" class="form-control" />
              <small id class="form-text text-muted">please separate each categories with comma ", "</small>
            </div>
          </div>

          <label class="col-form-label">Featured Images</label>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile">Choose file</label>
          </div>
          <div class="d-flex image-wrapper">
            <img class="img-thumbnail" v-bind:src="article.imgs" />
          </div>
          <br />
          <br />
          <!-- WYSIWYG -->
          <label class="col-form-label">Content</label>
          <tinymce-editor v-model="editArticle"></tinymce-editor>
        </form>
        <br />
        <div class="d-flex justify-content-between">
          <div class="postbuttonlist">
            <button v-on:click.prevent="showEditForm" class="btn btn-outline-info mr-1">
              <i class="fas fa-times"></i> Abort
            </button>
            <button v-on:click="updateArticle" class="btn btn-info mr-1">
              <i class="fas fa-upload"></i> Save
            </button>
          </div>

          <p>last published at: 02/02/2020</p>
        </div>
      </div>

      <div v-else class="card-body">
        <h4>{{article.title}}</h4>
        <div v-html="article.article"></div>
        <small>Created at: {{article.title}}</small> |
        <hr class="my-2" />
        <div class="d-flex justify-content-between">
          <div class="postinfolist">
            <small>total comment: {{article.comments.length}}</small>
            <br />
            <small>total likes: {{article.likes.length}}</small>
          </div>
          <div class="postbuttonlist">
            <button class="btn btn-danger mr-1" v-on:click.prevent="deleteArticle">
              <i class="fas fa-trash mr-2"></i>delete
            </button>
            <button class="btn btn-outline-info mr-1" v-on:click.prevent="showEditForm">edit</button>
            <button class="btn btn-outline-info mr-1" v-on:click.prevent="showCommentForm">comment</button>
          </div>
        </div>
        <br />
        <h5>Comments:</h5>
        <hr class="my-2" />
        <div>
          <!-- <div v-for="comment in article.comments" :key="comment._id"> -->
          <div class="comments text-right">
            <p class="mb-0">
              Dummy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              <i
                class="fas fa-quote-right"
              ></i>
            </p>
            <footer class="blockquote-footer">
              Someone famous in
              <i title="Source Title">Source Title</i>
            </footer>
          </div>
          <br />
        </div>
        <form v-if="commentsShowed">
          <textarea v-model="comment" class="form-control" rows="5"></textarea>
          <br />
          <button class="btn btn-info">publish comment</button>
        </form>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import axios from "../axios";
import Swal from "sweetalert2";
export default {
  props: {
    article: Object
  },
  data() {
    return {
      categories: "",
      commentsShowed: false,
      editFormShowed: false,

      editTitle: this.article.title,
      editCategories: this.article.categories,
      editArticle: this.article.article
    };
  },
  methods: {
    updateArticle() {
      Swal.fire({
        title: "Saving...",
        showConfirmButton: false,
        showClass: {
          popup: "animated fadeInDown faster"
        },
        hideClass: {
          popup: "animated fadeOutUp faster"
        }
      });
      Swal.showLoading();

      //using setTimeout to simulate ajax request
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          showClass: {
            popup: "animated fadeInDown faster"
          },
          hideClass: {
            popup: "animated fadeOutUp faster"
          }
        });
      }, 2000);
    },
    publishArticle() {
      axios({
        method: "PATCH",
        url: "/articles",
        data: {
          articleId: this.article._id
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 1000,
            showClass: {
              popup: "animated fadeInDown faster"
            },
            hideClass: {
              popup: "animated fadeOutUp faster"
            }
          });

          this.$emit("refetch");
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteArticle() {
      axios({
        method: "DELETE",
        url: "/articles",
        data: {
          articleId: this.article._id
        },
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
        .then(({ data }) => {
          this.$emit("refetch");
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCommentForm() {
      this.commentsShowed = !this.commentsShowed;
    },
    showEditForm() {
      this.editFormShowed = !this.editFormShowed;
    }
  },
  components: { "tinymce-editor": Editor },
  created() {
    this.categories = this.article.categories.join(",");
  }
};
</script>

<style>
</style>