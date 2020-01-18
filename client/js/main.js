
const app = new Vue({
	el: '#app',
	data: {
		// data kepentingan credential
		loggedOnId: '',
		loggedOnName: '',
		isLoggedOn: false,

		// data ttg pages
		currentPage: 'landing',
		// landing pages
		signinEmail: '',
		signinPassword: '',

		// dashboard
		addNewPostVisible: false,
		articles: [],
		message: '',
	},
	methods: {
		getPublishedArticles() {
			const axiosInstance = axios.create({
				baseURL: 'http://localhost:3000',
				timeout: (60 * 1000), // accept integers in milisecond = 1min
			})
			axiosInstance.get('/articles')
				.then(({ data }) => {
					console.log(data);

					this.articles = data
				})
				.catch(err => {
					console.log(err)
				})
		},
		signUp() {
			axios({
				method: 'POST',
				url: 'http://localhost:3000/users/signin',
				data: {
					email: '',
					password: ''
				}
			})
				.then(response => {
					console.log(response)
				})
				.catch(err => {
					throw (err)
				})
		}
	},
	created() {

		this.getPublishedArticles()
	}
})