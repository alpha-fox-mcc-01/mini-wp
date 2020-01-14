let app = new Vue({
   el: '#app',
   data: {
      message: 'INI VUE WOY',
      addArticle: false, //untuk conditional add article
      article: [],
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
      someoneLogin : { //indikator ada yang login
         condition : false,
         token : ''
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
               method : `POST`,
               url : `http://localhost:3000/users/login`,
               data : {
                  email : this.userLogin.email,
                  password : this.userLogin.password
               }
            })
               .then (response => {
                  console.log(response);
                  this.userLogin.email = '',
                  this.userLogin.password = ''
                  localStorage.setItem(`token`, response.data.token)
                  
                  this.someoneLogin.condition = true
                  this.someoneLogin.token = response.data.token
               })
               .catch (err => {
                  console.log(err.message);
               })
               
         }
      },
      logout () {
         this.someoneLogin.condition = false,
         this.someoneLogin.token = ''
      }
   },
   created() {
      this.getAllArticles()
   }
})