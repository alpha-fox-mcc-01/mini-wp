import Vue from 'vue';
import App from './App.vue';

import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce)

import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {}); // config is optional. more below

new Vue({
  render: h => h(App),
}).$mount('#app');