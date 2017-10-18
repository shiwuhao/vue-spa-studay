/**
 * Created by shiwuhao on 2017/9/10.
 */

import VueRouter from 'vue-router';
import Store from './store/index';
import JWTToken from './helper/jwt';

let routes = [
    {
        path : '/',
        name : 'home',
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
        meta : { requiresGuest: true }
    },
    {
        path : '/register',
        name : 'register',
        component : require('./components/register/Register'),
        meta : { requiresGuest: true }
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
        console.log(Store.state.authenticated);
        console.log(JWTToken.getToken());
        if (Store.state.authenticated || JWTToken.getToken()) {
            return next();
        } else {
            return next({ name : 'confirm' });
        }
    }

    if (to.meta.requiresGuest) {
        if (Store.state.authenticated || JWTToken.getToken()) {
            return next({ name : 'home' });
        } else {
            return next();
        }
    }
    next();
});

export default router;

