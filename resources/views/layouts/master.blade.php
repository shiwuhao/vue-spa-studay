<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel Vue SPA</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app">
            <nav class="navbar navbar-default navbar-static-top" role="navigation">
                <router-link to="/" class="navbar-brand" >VUE SPA</router-link>
                <ul class="nav navbar-nav">
                        <router-link to="/about" tag="li">
                            <a>About</a>
                        </router-link>
                </ul>
            </nav>
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
