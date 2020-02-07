// app.js

require('./bootstrap');
// require('./bootstrap-vue-datatable');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';
import Vuex from 'vuex';
import App from './App.vue';
// import DatatableFactory from 'vuejs-datatable';

/*[START] SET BASE URL */
axios.defaults.baseURL = 'http://localhost/projects/mps/';
axios.defaults.baseApiUrl = 'http://localhost/projects/mps/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*[END] SET BASE URL */

import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);
Vue.use(VueAxios, axios,Vuex);

import Routes from './routes/routes.js';
import StoreData from './store.js';

const store = new Vuex.Store(StoreData);
// console.log(process.env);
const router = new VueRouter({ mode: 'history', routes: Routes});

router.beforeEach((to,from,next)=>{
	const requireAuth = to.matched.some(record => record.meta.requireAuth);
	const currentUser = store.state.currentUser;
	if(requireAuth && !currentUser){
		next('/projects/mps/login');
	}else if(to.path == '/projects/mps/login' && currentUser){
		next('/projects/mps');
	}else{
		next();
	}
});
const app = new Vue(
	Vue.util.extend({ router,store }, App)).$mount('#app');
