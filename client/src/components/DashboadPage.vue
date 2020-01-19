<template>
  <div v-if="currentPage === 'dashboard'">
    <div class="row">
      <div class="col-md-3 dashboard-nav">
        <ul>
          <li @click.prevent="changeDashboard('my-post')">My Post</li>
          <li @click.prevent="changeDashboard('post-article')">Post Article</li>
        </ul>
      </div>

      <div class="col-md-8">
        <div class="container content">
          <div class="my-post" v-if="dashboard === 'my-post'">
            <h2 class="text-center">My Post</h2>
            <div class="row mx-2 my-3" v-for="article in shownArticle" :key="article._id">
              <div class="col-auto px-0 py-0">
                <img
                  src="https://res.cloudinary.com/teepublic/image/private/s--0GfzFgZU--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-163,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-274,y_-215/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1512053883/production/designs/2122665_1.jpg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Title : {{article.title}}</h4>
                  <p class="card-text">Content : {{article.content}}</p>
                </div>
              </div>
              <div class="card-footer w-100 text-muted">
                <small>Posted By : {{article.authorId.name}}</small>
                <br />
                <small>Posted At : {{article.createdAt}}</small>
                <br />
                <button
                  class="btn-primary"
                  @click="changeDashboard('view-article'), findArticleById(article._id)"
                >Read More</button>
                <button
                  class="btn-primary"
                  @click="findArticleById(article._id), changeDashboard('edit-article')"
                >Edit</button>
                <button class="btn-primary" @click="deleteMyArticle(article._id)">Delete</button>
              </div>
            </div>
          </div>

          <div class="add-article my-3" v-else-if="dashboard === 'post-article'">
            <h2 class="text-center">Post Article</h2>
            <form id="post-article" @submit.prevent="postArticle(), changeDashboard('my-post')">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="title" />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea
                  class="form-control"
                  name="content"
                  id="content"
                  rows="15"
                  v-model="content"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

          <div class="edit-article my-3" v-else-if="dashboard === 'edit-article'">
            <h2 class="text-center">Edit Article</h2>
            <form
              id="edit-article"
              @submit.prevent="updateArticle(_id), changeDashboard('my-post')"
            >
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="title" />
              </div>
              <div class="form-group">
                <label for="content">Content</label>
                <textarea
                  class="form-control"
                  name="content"
                  id="content"
                  rows="15"
                  v-model="content"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>

          <div class="view-article" v-else-if="dashboard === 'view-article'">
            <h2 class="text-center">My Post</h2>
            <div class="row mx-2 my-3">
              <div class="col-auto px-0 py-0">
                <img
                  src="https://res.cloudinary.com/teepublic/image/private/s--0GfzFgZU--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-163,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-274,y_-215/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1512053883/production/designs/2122665_1.jpg"
                  class="img-fluid"
                  alt="image"
                />
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h4 class="card-title">Title : {{article.title}}</h4>
                  <p class="card-text">Content : {{article.content}}</p>
                </div>
              </div>
              <div class="card-footer w-100 text-muted">
                <small>Posted By : {{article.authorId.name}}</small>
                <br />
                <small>Posted At : {{article.createdAt}}</small>
                <br />
                <button class="btn-primary">Favorite</button>
                <button class="btn-primary" @click="changeDashboard('my-post')">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "dashboard-page",
  data() {
    return {
      dashboard: "my-post",
      articles: [],
      article: {},
      _id: "",
      title: "",
      content: ""
    };
  },
  props: {
    currentPage: String
  },
  computed: {
    shownArticle: function() {
      this.articles.forEach(article => {
        let content = "";
        if (article.content.length > 200) {
          for (let i = 0; i < 197; i++) {
            content += article.content[i];
          }
          article.content = content + "...";
        }
      });
      return this.articles;
    }
  },
  methods: {
    getMyArticle() {
      axios({
        method: "GET",
        url: "http://localhost:3000/articles/user",
        headers: {
          access_token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          this.articles = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteMyArticle(articleId) {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/articles/` + articleId,
        headers: {
          access_token: localStorage.getItem("token")
        }
      })
        .then(response => {
          // console.log(response);
          this.getMyArticle();
        })
        .catch(err => {
          console.log(err);
        });
    },
    postArticle() {
      axios({
        method: "POST",
        url: "http://localhost:3000/articles",
        data: {
          title: this.title,
          content: this.content
        },
        headers: {
          access_token: localStorage.getItem("token")
        }
      })
        .then(article => {
          // console.log(article, "ini articles");
          this.getMyArticle();
          this.title = "";
          this.content = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    findArticleById(articleId) {
      axios({
        method: "GET",
        url: `http://localhost:3000/articles/` + articleId,
        headers: {
          access_token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          // console.log(data.authorId);
          this.article = data;
          this._id = data._id;
          this.title = data.title;
          this.content = data.content;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeDashboard(nav) {
      this.dashboard = nav;
      this.getMyArticle();
      if(nav === 'post-article'){
        this.title = ''
        this.content = ''
        this._id = ''
        this.article =''
      }
    },
    updateArticle(articleId) {
      axios({
        method: "PUT",
        url: `http://localhost:3000/articles/` + articleId,
        headers: {
          access_token: localStorage.getItem("token")
        },
        data: {
          title: this.title,
          content: this.content
        }
      })
        .then(() => {
          this.getMyArticle();
          (this.title = ""), (this.content = "");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    if (this.dashboard === "my-post") {
      this.getMyArticle();
    }
  }
};
</script>

<style>
.col-md-3 {
  border-right: 1px solid grey;
}

li {
  list-style-type: none;
}

li::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #000;
  transition: width 0.3s;
}

li:hover::after {
  width: 100%;
  /* transition: width .3s; */
}

.content {
  border: 1px grey solid;
}

.dashboard-nav {
  min-height: 100vh;
}

.card {
  background-color: white !important;
}

img {
  max-width: 10rem !important;
}
.mx-2 {
  border: 1px solid grey;
}
</style>