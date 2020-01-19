<template>
  <div class="list-group-item">
    <div class="d-flex justify-content-between">
      <h5>{{draft.title}}</h5>
      <small>last edited: {{draft.created_at}}</small>
    </div>
    <div class="d-flex justify-content-between">
      <small>
        <b>Preview</b>
        : {{draft.article.substring(0,30)}}
      </small>
      <div class="postbuttonlist d-flex flex-no-wrap">
        <button class="btn btn-danger btn-sm mr-1">
          <i class="fas fa-trash"></i> delete
        </button>
        <button class="btn btn-outline-info btn-sm mr-1">edit</button>
        <button class="btn btn-outline-info btn-sm mr-1">publish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    draft: Object
  }
};
</script>

<style>
</style>