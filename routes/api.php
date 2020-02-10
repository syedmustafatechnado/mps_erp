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
Route::post('/login', 'Api\AuthController@login');
Route::post('/signup', 'Api\AuthController@signUp');
Route::group(['middleware' => ['auth:api'],'namespace'=>'Api'], function(){


// Division Routes

Route::get('/division/list','DivisionController@getList');
Route::post('/division/create','DivisionController@addDivision');
Route::delete('/division/delete/{id}','DivisionController@deleteDivision');

});

Route::post('/post/create', 'PostController@store');
Route::get('/post/edit/{id}', 'PostController@edit');
Route::post('/post/update/{id}', 'PostController@update');
Route::delete('/post/delete/{id}', 'PostController@delete');
Route::get('/posts', 'PostController@index');
Route::get('/users', 'Api\UserController@index');

