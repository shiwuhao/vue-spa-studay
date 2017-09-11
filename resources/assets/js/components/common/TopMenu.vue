<template>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
        <router-link to="/" class="navbar-brand" >VUE SPA</router-link>
        <ul class="nav navbar-nav">
            <router-link to="/about" tag="li">
                <a>About</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
