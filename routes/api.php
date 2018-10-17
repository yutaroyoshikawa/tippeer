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