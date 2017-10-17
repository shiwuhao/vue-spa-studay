
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from  'vue-router';
import router from './routes';
import store from './store/index';
import App from './components/App.vue';

import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

Validator.addLocale(zh_CN);

Vue.use(VueRouter);
Vue.use(VeeValidate, {
    locale:'zh_CN'
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', App);

const app = new Vue({
    el: '#app',
    router,
    store
});
