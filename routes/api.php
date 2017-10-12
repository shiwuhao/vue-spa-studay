<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/posts', 'PostController@index');
Route::get('/posts/{post}', 'PostController@show');

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');

Route::get('test', function () {
    $url= '/';
    $http = new \GuzzleHttp\Client(['base_uri' => 'http://vue-spa.dev:8000']);
    $res = $http->request('GET', $url);
    echo($res->getBody());
});