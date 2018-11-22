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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

<<<<<<< HEAD
//Route::get( '/foo', function () {
//
//    $pitchers = collect([
//        [
//            'id'  => '1',
//            'name' => 'first',
//            'email'  => 'hoge@sample.com',
//        ],
//        [
//            'id'  => '2',
//            'name' => 'second',
//            'email'  => 'fuga@sample.com',
//        ],
//        [
//            'id'  => '3',
//            'name' => 'third',
//            'email'  => 'piyo@sample.com',
//        ],
//    ]);
//
//    return response()->json( $pitchers );
//} );

Route::group(['middleware' => ['api']], function(){
    Route::resource('Search', 'SearchController', ['except' => ['create', 'edit']]);
=======

Route::group(['middleware' => ['api']], function(){
    Route::get('search', 'SearchController@show');
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
});