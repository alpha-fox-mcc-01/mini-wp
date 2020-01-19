<template>
  <section id="myblog" class="py-5" v-if="loginCondition == true">
    <div class="blog-heading text-center mb-3">
      <h2>{{someoneLogin.name}}'s article</h2>
      <h3>&#10019;</h3>
    </div>

    <div class="container">
      <nav class="navbar navbar-expand-md p-0">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#trigger">
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse d-md-flex justify-content-center" id="trigger">
          <ul class="navbar-nav">
            <li class="navbar-item">
              <span class="nav-link" style="cursor: pointer;" @click="getMyArticle">My Articles</span>
            </li>
            <li class="navbar-item">
              <span
                class="nav-link"
                style="cursor: pointer;"
                @click="addArticle.condition = true; editingArticle.condition = false"
              >
                Create
                Article
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- batas navbar -->
    <div class="container">
      <div class="row">
        <div class="col-5">
          <!-- bawah adalah get my article -->
          <div id="all-my-article">
            <!-- lempar content ke sini -->
            <div class="my-article" v-if="myArticle.length > 0">
              <!-- disini loop my article -->
              <div class="border" style="border-radius: 4px; overflow: auto; max-height: 80vh;">
                <div v-for="item in myArticle" :key="item._id">
                  <div class="p-3 border-bottom">
                    <h5 class="article-title text-center mb-4 mt-2">
                      <strong>~</strong>
                      {{item.title}}
                      <strong>~</strong>
                    </h5>

                    <div class="row">
                      <div class="col text-center">
                        <span @click="getMyArticleToUpdate(item._id)" style="cursor: pointer;">
                          Edit article
                          <i class="fas fa-edit"></i>
                        </span>
                      </div>
                      <div class="col text-center">
                        <span
                          @click="deleteMyArticle(item._id); getMyArticle"
                          style="cursor: pointer;"
                        >
                          Delete article
                          <i class="fas fa-trash"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- sampai sini -->
          </div>
        </div>
        <div class="col-7">
          <div id="detail-article">
            <!-- bawah adalah get add article -->
            <div class="detail-article" v-if="addArticle.condition === true">
              <div class="border" style="border-radius: 4px; overflow: auto; max-height: 80vh;">
                <h3
                  class="mx-4 my-3 text-center"
                  style="font-family: 'Gelasio', serif"
                >Create Article</h3>
                <div class="mx-4 my-3">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter title"
                    v-model="addArticle.title"
                  />
                  <label>Content</label>
                  <tinymce id="d1" v-model="addArticle.content"></tinymce>
                  
                  <label for="exampleFormControlFile1">upload with image</label>
                  <input type="file" class="form-control-file" />
                  <div class="form-check">
                    <div class="mt-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                        v-model="addArticle.publish"
                      />
                      <label class="form-check-label" for="exampleCheck1">Publish</label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary mt-3" @click="createArticle">Submit</button>
                </div>
              </div>
            </div>
            <!-- add article sampai sini -->
            <!-- bawah ini adalah edit article -->
            <div class="detail-article" v-if="editingArticle.condition === true">
              <div class="border" style="border-radius: 4px; overflow: auto; max-height: 80vh;">
                <h3 class="mx-4 my-3 text-center" style="font-family: 'Gelasio', serif">Edit Article</h3>

                <div class="mx-4 my-3">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter title"
                    v-model="editingArticle.title"
                  />
                  <label>Content</label>
                  <tinymce id="d1" v-model="editingArticle.content"> <p v-html="editingArticle.content"></p></tinymce>
                  <label for="exampleFormControlFile1">upload with image</label>
                  <input type="file" class="form-control-file" />
                  <div class="form-check">
                    <div class="mt-3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                        v-model="editingArticle.publish"
                      />
                      <label class="form-check-label" for="exampleCheck1">Publish</label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary mt-3" @click="updateMyArticle">Submit</button>
                </div>
              </div>
            </div>

            <!-- sampai sini -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: `MyArticle`,
  props: {
    loginCondition: Boolean,
    article: Array
  },
  data() {
    return {
      myArticle: [],
      editingArticle: {
        condition: false,
        image: "",
        title: "",
        content: "",
        publish: false,
        _id: ""
      },
      someoneLogin: {
        name: localStorage.getItem(`name`)
      },
      addArticle: {
        condition: false,
        image: "",
        title: "",
        content: "",
        publish: false
      }
    };
  },
  methods: {
    getMyArticleToUpdate(articleId) {
      this.addArticle.condition = false;
      axios({
        method: `GET`,
        url: `http://localhost:3000/articles/${articleId}`,
        headers: {
          token: localStorage.getItem(`token`)
        }
      })
        .then(({ data }) => {
          console.log(data.data);
          // console.log(this.editingArticle.condition, `ini state`);
          // console.log(data.data.publish, `ini data`);

          this.editingArticle.condition = true;
          this.editingArticle.title = data.data.title;
          this.editingArticle.content = data.data.content;
          this.editingArticle.publish = data.data.publish;
          this.editingArticle._id = data.data._id;
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    updateMyArticle() {
      const articleId = this.editingArticle._id;
      console.log(articleId);
      axios({
        method: `PUT`,
        url: `http://localhost:3000/articles/${articleId}`,
        headers: {
          token: localStorage.getItem(`token`)
        },
        data: {
          image: this.editingArticle.image,
          title: this.editingArticle.title,
          content: this.editingArticle.content,
          publish: this.editingArticle.publish
        }
      })
        .then(response => {
          console.log(response);
          this.editingArticle.condition = false;
          this.editingArticle.title = "";
          this.editingArticle.content = "";
          this.editingArticle.publish = false;
          this.editingArticle._id = "";

          this.getAllArticles();
          this.readArticle.content = "";
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    deleteMyArticle(id) {
      axios({
        method: `DELETE`,
        url: `http://localhost:3000/articles/${id}`,
        headers: {
          token: localStorage.getItem(`token`)
        }
      })
        .then(response => {
          console.log(response);
          //  this.getAllArticles();
          this.getMyArticle();
          this.$emit("after-delete");
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    getMyArticle() {
      console.log(`method getMyArticle jalan nih bos`);

      const userId = localStorage.getItem(`userId`);
      console.log(userId, `ini userId nya bos`);
      const temp = [];

      for (let i = 0; i <= this.article.length - 1; i++) {
        // console.log(this.article[i].userId[0], `loop userId`);
        if (this.article[i].userId[0] == userId) {
          temp.push(this.article[i]);
        }
      }
      this.myArticle = temp;
    },
    createArticle() {
      if (
        this.addArticle.title.length < 1 ||
        this.addArticle.content.length < 1
      ) {
        console.log(`kurang lengkap value nya bos!`);
      } else {
        axios({
          method: `POST`,
          url: `http://localhost:3000/articles`,
          headers: {
            token: localStorage.getItem(`token`)
          },
          data: {
            image: this.addArticle.image,
            title: this.addArticle.title,
            content: this.addArticle.content,
            publish: this.addArticle.publish
          }
        })
          .then(({ response }) => {
            console.log(response);
            this.toggleAddArticle(false);
            this.getAllArticles();
            this.getMyArticle()
            this.$emit("after-create");
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    toggleAddArticle(toggle) {
      // pakai nanti saat toggle button show wysiwyg
      this.addArticle.condition = toggle;
      this.editingArticle.condition = false;
    },
    getAllArticles() {
      axios({
        method: `GET`,
        url: `http://localhost:3000/articles`
      })
        .then(response => {
          // console.log(response);
          //  this.article = response.data;
          // console.log(this.article, `wawawa`);
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