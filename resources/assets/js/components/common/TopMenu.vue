<template>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
        <router-link to="/" class="navbar-brand" >VUE SPA</router-link>
        <ul class="nav navbar-nav pull-right">
            <router-link v-if="!user.authenticated" to="/register" tag="li">
                <a>register</a>
            </router-link>
            <router-link v-if="!user.authenticated" to="/login" tag="li">
                <a>login</a>
            </router-link>
            <router-link v-if="user.authenticated" to="/profile" tag="li">
                <a>profile</a>
            </router-link>
            <li v-if="user.authenticated">
                <a href="#" v-on:click.prevent="logout">退出</a>
            </li>
        </ul>

    </nav>
</template>

<script>
    import {mapState} from 'vuex';
    import jwtToken from './../../helper/jwt';

    export default {
        computed:{
            ...mapState({
                user:state => state.AuthUser
            })
        },
        methods : {
            logout() {
                this.$store.dispatch('logoutRequest',null).then(response => {
                    this.$router.push({ name:'home' });
                });
            }
        }
    }
</script>
