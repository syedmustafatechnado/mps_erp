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
// Login Routes
Route::post('/login', 'Api\AuthController@login');
Route::post('/signup', 'Api\AuthController@signUp');
Route::group(['middleware' => ['auth:api'],'namespace'=>'Api'], function(){


// Division Routes

Route::get('/division/list','DivisionController@getList');
Route::post('/division/create','DivisionController@addDivision');
Route::delete('/division/delete/{id}','DivisionController@deleteDivision');

// Department Routes
Route::get('/department/list','DepartmentController@getList');
Route::post('/department/create','DepartmentController@addDepartment');
Route::delete('/department/delete/{id}','DepartmentController@deleteDepartment');

// Designation Routes
Route::post('/designation/create','DesignationController@addDesignation');
Route::get('designation/list','DesignationController@getList');
Route::delete('/designation/delete/{id}','DesignationController@deleteDesignation');

// Users Routes
Route::get('user/list','AuthController@getList');
Route::delete('user/delete/{id}','AuthController@deleteUser');
Route::post('user/create','AuthController@addUser');
Route::post('user/change/password','AuthController@changePassword');

});

// Route::post('/post/create', 'PostController@store');
// Route::get('/post/edit/{id}', 'PostController@edit');
// Route::post('/post/update/{id}', 'PostController@update');
// Route::delete('/post/delete/{id}', 'PostController@delete');
// Route::get('/posts', 'PostController@index');
// Route::get('/users', 'Api\UserController@index');

