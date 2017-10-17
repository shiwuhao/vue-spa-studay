/**
 * Created by shiwuhao on 2017/9/10.
 */

import VueRouter from 'vue-router';
import Store from './store/index';
import JWTToken from './helper/jwt';

let routes = [
    {
        path : '/',
        component : require('./components/pages/Home'),
        meta : {}
    },
    {
        path : '/about',
        component : require('./components/pages/About'),
        meta : {}
    },
    {
        path : '/posts/:id',
        name : 'posts',
        component : require('./components/posts/Post'),
        meta : {}
    },
    {
        path : '/login',
        name : 'login',
        component : require('./components/login/Login'),
        meta : {}
    },
    {
        path : '/register',
        name : 'register',
        component : require('./components/register/Register'),
        meta : {}
    },
    {
        path : '/confirm',
        name : 'confirm',
        component : require('./components/confirm/Email'),
        meta : {}
    },
    {
        path : '/profile',
        name : 'profile',
        component : require('./components/user/Profile'),
        meta : { requiresAuth: true }
    }
];


const router = new VueRouter({
    mode:'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (Store.state.authenticated || JWTToken.getToken()) {
            return next();
        } else {
            return next({ name : 'login' });
        }
    }
    next();
});

export default router;

