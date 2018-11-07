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

Route::get( '/foo', function () {

    $pitchers = collect([
        [
            'id'  => '1',
            'name' => 'first',
            'email'  => 'hoge@sample.com',
        ],
        [
            'id'  => '2',
            'name' => 'second',
            'email'  => 'fuga@sample.com',
        ],
        [
            'id'  => '3',
            'name' => 'third',
            'email'  => 'piyo@sample.com',
        ],
    ]);

    return response()->json( $pitchers );
} );


Route::get( '/students', function () {

    $students = collect([
        [
            'id'  => '1',
            'name' => 'yutaro',
            'email'  => 'yutaro@sample.com',
        ],
        [
            'id'  => '2',
            'name' => 'yusuke',
            'email'  => 'yusuke@sample.com',
        ],
        [
            'id'  => '3',
            'name' => 'ryuya',
            'email'  => 'ryuya@sample.com',
        ],
        [
            'id'  => '4',
            'name' => 'reiji',
            'email'  => 'reiji@sample.com',
        ],
        [
            'id'  => '5',
            'name' => 'ryo',
            'email'  => 'ryo@sample.com',
        ],
        [
            'id'  => '6',
            'name' => 'naoki',
            'email'  => 'naoki@sample.com',
        ],
    ]);

    return response()->json( $students );
} );
