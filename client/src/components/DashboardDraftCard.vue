<template>
  <div class="list-group-item">
    <div class="d-flex justify-content-between">
      <h5>{{draft.title}}</h5>
      <small>last edited: {{draft.created_at}}</small>
    </div>
    <div class="d-flex justify-content-between">
      <small>
        <b>Preview</b>
        : {{draft.article.substr(0,300)}}
      </small>
      <div class="ml-4 postbuttonlist d-flex flex-no-wrap align-items-start">
        <button
          v-on:click.prevent="deleteDraft"
          class="btn btn-danger btn-sm mr-1 d-flex flex-no-wrap align-items-center"
        >
          <i class="fas fa-trash mr-1"></i> delete
        </button>
        <button class="btn btn-outline-info btn-sm mr-1">edit</button>
        <button v-on:click="publishDraft" class="btn btn-outline-info btn-sm mr-1">publish</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "../axios";
export default {
  props: {
    draft: Object
  },
  data() {
    return {};
  },
  methods: {
    publishDraft() {
      axios({
        method: "PATCH",
        url: "/articles",
        data: {
          articleId: this.draft._id
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
    updateDraft() {},
    deleteDraft() {
      axios({
        method: "DELETE",
        url: "/articles",
        data: {
          articleId: this.draft._id
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
    }
  }
};
</script>

<style>
</style>