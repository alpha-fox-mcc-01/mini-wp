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
         publish: ''
      },
      article: [],
      readArticle: {
         _id : '',
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
         name: ''
      }
   },
   methods: {

      getAllArticles() { //ini belum di server nya + url nya masih belum
         axios({
            method: `GET`,
            url: `http://localhost:3000/articles`
         })
            .then(response => {
               // console.log(this.article, `sebelum`);
               this.article = response.data
               // console.log(this.article, `wawawa`);
            })
            .catch(err => {
               console.log(err);
            })
      },

      toggleAddArticle(toggle) { // pakai nanti saat toggle button show wysiwyg
         this.addArticle = toggle
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

                     this.getAllArticles()
                     this.someoneLogin.condition = true
                     this.someoneLogin.token = response.data.token
                     this.someoneLogin.name = response.data.name
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
            headers : {
               token : localStorage.getItem(`token`)
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
               })
               .catch(err => {
                  console.log(err);
               })
         }
      }
   },
   created() {
      if (localStorage.getItem(`token`)) {
         this.getAllArticles()
         this.someoneLogin.condition = true
         this.someoneLogin.name = localStorage.getItem(`name`)
      }
   }
})