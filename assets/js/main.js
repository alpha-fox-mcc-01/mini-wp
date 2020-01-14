const app = new Vue({
    el: '#app',
    data: {
        currentPage: 'landing'
    },
    methods: {
        changePage(pageName) {
            this.currentPage = pageName
        }
    }
})