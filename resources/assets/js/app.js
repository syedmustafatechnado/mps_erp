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
import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(VueSimpleAlert);
Vue.use(BootstrapVue);
// import DatatableFactory from 'vuejs-datatable';

//Vue.prototype.$userId = document.querySelector("meta[name='user-id']").getAttribute('content');


/*[START] SET BASE URL */
axios.defaults.baseURL = process.env.MIX_APP_URL;
axios.defaults.baseApiUrl = process.env.MIX_APP_URL+'api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*[END] SET BASE URL */

import DataTable from 'laravel-vue-datatable';
Vue.use(DataTable);
Vue.use(VueAxios, axios,Vuex);

import Routes from './routes/routes.js';
import StoreData from './store.js';

const store = new Vuex.Store(StoreData);

    const router = new VueRouter({ mode: 'history',base: process.env.MIX_ROUTE_BASE, routes: Routes});

    router.beforeEach( (to,from,next)=>{
	const requireAuth =  to.matched.some(record => record.meta.requireAuth);
	const currentUser =   store.state.currentUser;
	if(requireAuth && !currentUser){

		next('/login');
	}else if(to.path == '/login' && currentUser){

		next('/');
	}else{
		next();
	}
});
const app = new Vue(
	Vue.util.extend({ router,store }, App)).$mount('#app');
