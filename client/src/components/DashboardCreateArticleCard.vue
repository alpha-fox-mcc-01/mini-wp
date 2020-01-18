<template>
  <div class="card card-body" v-if="createArticleCardShowed">
    <h4>Create new Article</h4>
    <hr class="my-2" />
    <br />
    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Article Title</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Categories</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" />
          <small id class="form-text text-muted">please separate each categories with comma ", "</small>
        </div>
      </div>
      <label class="col-form-label">Post</label>
      <!-- WYSIWYG -->
      <textarea class="form-control" rows="10"></textarea>
    </form>
    <br />
    <div class="d-flex justify-content-between">
      <div class="postbuttonlist">
        <button class="btn btn-outline-info mr-1">
          <i class="fas fa-save"></i> save to draft
        </button>
        <button class="btn btn-info mr-1">
          <i class="fas fa-upload"></i> publish
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WYSIWYGTextarea from "./WYSIWYGTextarea";

export default {
  props: {
    createArticleCardShowed: Boolean
  },
  data() {
    return {};
  },
  components: {
    wysiwyg,
    WYSIWYGTextarea
  }
};
</script>

<style>
</style>