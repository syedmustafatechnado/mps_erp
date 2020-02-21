<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/email/verification', 'EmailVerifyController@verify');
Route::get('/email/verification/{code}/{user_id}','EmailVerifyController@index');

// Reset Password
Route::get('/user/reset/password/{code}/{user_id}','EmailVerifyController@reset');
Route::post('/user/change/password', 'EmailVerifyController@changePassword');

Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');
// Route::get('/p/search','PostController@index');
