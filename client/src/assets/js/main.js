// notification belum

let app = new Vue({
   el: '#app',
   data: {
      message: 'INI VUE WOY',
      addArticle: {
         condition: false,
         image: '',
         title: '',
         content: '',
         publish: false
      },
      article: [],
      readArticle: {
         _id: '',
         name: '',
         title: '',
         content: '',
         author: '',
         userId: '',
         image: ''
      },
      userLogin: {
         email: '',
         password: ''
      },
      userRegister: false, //ini untuk status login untuk v-if conditional
      userRegisterData: {
         name: '',
         email: '',
         password: ''
      },
      someoneLogin: { //indikator ada yang login
         condition: false,
         token: '',
         name: '',
         userId: ''
      },
      myArticle: [],
      editingArticle: {
         condition: false,
         image: '',
         title: '',
         content: '',
         publish: false,
         _id: ''
      }
   },
   methods: {

      getAllArticles() {
         axios({
            method: `GET`,
            url: `http://localhost:3000/articles`
         })
            .then(response => {
               // console.log(response);
               this.article = response.data
               // console.log(this.article, `wawawa`);
            })
            .catch(err => {
               console.log(err);
            })
      },

      toggleAddArticle(toggle) { // pakai nanti saat toggle button show wysiwyg
         this.addArticle = toggle
         this.editingArticle.condition = false
      },
      toggleLoginRegister(toggle) {
         this.userRegister = toggle
      },
      registerUser() {
         if (this.userRegisterData.name.length < 1 || this.userRegisterData.email.length < 1 || this.userRegisterData.password.length < 1) {
            console.log(`tidak boleh kosong bos`);
         }
         else {
            axios({
               method: `POST`,
               url: `http://localhost:3000/users/register`,
               data: {
                  name: this.userRegisterData.name,
                  email: this.userRegisterData.email,
                  password: this.userRegisterData.password
               }
            })
               .then(response => {
                  console.log(response);
                  this.toggleLoginRegister(false)

                  this.userRegisterData.name = ''
                  this.userRegisterData.email = ''
                  this.userRegisterData.password = ''
               })
               .catch(err => {
                  console.log(err);
               })
         }
      },
      logout() {
         localStorage.removeItem(`token`)
         this.someoneLogin.condition = false
         this.someoneLogin.token = ''
         this.someoneLogin.name = ''
      },

      readDetailArticle(articleId) {
         axios({
            method: `GET`,
            url: `http://localhost:3000/articles/${articleId}`,
            headers: {
               token: localStorage.getItem(`token`)
            }
         })
            .then((data) => {
               // console.log(data);
               console.log(data);

               this.readArticle._id = data.data.data._id
               this.readArticle.title = data.data.data.title
               this.readArticle.content = data.data.data.content
               this.readArticle.author = data.data.data.userId[0].name
               this.readArticle.userId = data.data.data.userId[0]._id
               this.readArticle.image = data.data.data.image
            })
            .catch(err => {
               console.log(err);
            })
      },
      getMyArticle() {
         console.log(`method getMyArticle jalan nih bos`);

         const userId = localStorage.getItem(`userId`)
         console.log(userId, `ini userId nya bos`);
         const temp = []

         for (let i = 0; i <= this.article.length - 1; i++) {
            // console.log(this.article[i].userId[0], `loop userId`);
            if (this.article[i].userId[0] == userId) {
               temp.push(this.article[i])
            }
         }
         this.myArticle = temp
      },
      createArticle() {
         if (this.addArticle.title.length < 1 || this.addArticle.content.length < 1) {
            console.log(`kurang lengkap value nya bos!`);
         }
         else {
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
                  this.toggleAddArticle(false)
                  this.getAllArticles()
               })
               .catch(err => {
                  console.log(err);
               })
         }
      },
      login() {
         if (this.userLogin.email.length < 1 || this.userLogin.password.length < 1) {
            console.log(`tidak boleh kosong bos`);
         }
         else {
            axios({
               method: `POST`,
               url: `http://localhost:3000/users/login`,
               data: {
                  email: this.userLogin.email,
                  password: this.userLogin.password
               }
            })
               .then(response => {
                  console.log(response);

                  if (response.data.token) {
                     this.userLogin.email = ''
                     this.userLogin.password = ''
                     localStorage.setItem(`token`, response.data.token)
                     localStorage.setItem(`name`, response.data.name)
                     localStorage.setItem(`userId`, response.data.userId)

                     this.getAllArticles()
                     this.getMyArticle()

                     this.someoneLogin.condition = true
                     this.someoneLogin.token = response.data.token
                     this.someoneLogin.name = response.data.name
                     this.someoneLogin.userId = response.data.userId
                  }
                  else {
                     console.log(`wrong email / password`);
                  }
               })
               .catch(err => {
                  console.log(err.message);
               })

         }
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
               this.getAllArticles()
               this.getMyArticle()
            })
            .catch(err => {
               console.log(err.message);
            })
      },
      getMyArticleToUpdate(articleId) {
         this.addArticle.condition = false
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

               this.editingArticle.condition = true
               this.editingArticle.title = data.data.title
               this.editingArticle.content = data.data.content
               this.editingArticle.publish = data.data.publish
               this.editingArticle._id = data.data._id
            })
            .catch(err => {
               console.log(err.message);
            })

      },
      updateMyArticle() {
         const articleId = this.editingArticle._id
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
               publish: this.editingArticle.publish,
            }
         })
            .then( response => {
               console.log(response);
               this.editingArticle.condition = false
               this.editingArticle.title = ''
               this.editingArticle.content = ''
               this.editingArticle.publish = false
               this.editingArticle._id = ''
               
               this.getAllArticles()
               this.readArticle.content = ''
            })
            .catch (err => {
               console.log(err.message);
               
            })
      }
   },
   created() {
      if (localStorage.getItem(`token`)) {
         this.getAllArticles()
         this.getMyArticle()
         this.someoneLogin.condition = true
         this.someoneLogin.name = localStorage.getItem(`name`)
      }
   }
})