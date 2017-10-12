/**
 * Created by shiwuhao on 2017/9/10.
 */

import VueRouter from 'vue-router';

let routes = [
    {
        path : '/',
        component : require('./components/pages/Home')
    },
    {
        path : '/about',
        component : require('./components/pages/About')
    },
    {
        path : '/posts/:id',
        name : 'posts',
        component : require('./components/posts/Post')
    },
    {
        path : '/login',
        name : 'login',
        component : require('./components/login/Login.vue')
    },
    {
        path : '/register',
        name : 'register',
        component : require('./components/register/Register')
    },
    {
        path : '/confirm',
        name : 'confirm',
        component : require('./components/confirm/Email')
    }
];


export  default new VueRouter({
    mode:'history',
    routes
});

