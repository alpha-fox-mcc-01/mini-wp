<template>
  <div class>
    <div class="card">
      <div v-if="editFormShowed" class="card-body">
        <h4>Edit Article</h4>
        <hr class="my-2" />
        <br />
        <form>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Article Title</label>
            <div class="col-sm-10">
              <input v-model="articleEditTitle" type="text" class="form-control" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Categories</label>
            <div class="col-sm-10">
              <input v-model="articleEditCategories" type="text" class="form-control" />
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
          <label class="col-form-label">Content</label>
          <!-- <input class="ckeditor" type="text" /> -->
          <textarea v-model="articleEditArticleContent" class="form-control" rows="8"></textarea>
        </form>
        <br />
        <div class="d-flex justify-content-between">
          <div class="postbuttonlist">
            <button v-on:click.prevent="showEditForm" class="btn btn-outline-info mr-1">
              <i class="fas fa-times"></i> Abort
            </button>
            <button class="btn btn-info mr-1">
              <i class="fas fa-upload"></i> Save
            </button>
          </div>

          <p>last published at: 02/02/2020</p>
        </div>
      </div>

      <div v-else class="card-body">
        <h4>{{article.title}}</h4>
        <div v-html="article.article"></div>
        <small>Created at: 02/02/2020</small> |
        <small>Published at: 02/02/2020</small>
        <hr class="my-2" />
        <div class="d-flex justify-content-between">
          <div class="postinfolist">
            <small>total comment: {{article.comments.length}}</small>
            <br />
            <small>total likes: {{article.likes.length}}</small>
          </div>
          <div class="postbuttonlist">
            <button class="btn btn-outline-info mr-1" v-on:click.prevent="showCommentForm">comment</button>
            <button class="btn btn-outline-info mr-1" v-on:click.prevent="showEditForm">edit</button>
            <button class="btn btn-outline-info mr-1">delete</button>
          </div>
        </div>
        <br />
        <h5>Comments:</h5>
        <hr class="my-2" />
        <div v-for="comment in article.comments" :key="comment._id">
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
export default {
  props: {
    article: Object
  },
  data() {
    return {
      articleEditTitle: "",
      articleEditCategories: "",
      articleEditArticleContent: "",

      commentsShowed: false,
      editFormShowed: false
    };
  },
  methods: {
    showCommentForm() {
      this.commentsShowed = !this.commentsShowed;
    },
    showEditForm() {
      this.editFormShowed = !this.editFormShowed;
    }
  }
};
</script>

<style>
</style>