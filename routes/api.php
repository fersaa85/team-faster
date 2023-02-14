<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Venues\VenuesController;
use App\Http\Controllers\Galeries\GalleryController;


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

Route::group([
    'prefix' => 'auth'
], function () {
    //Route::post('login', [AuthController::class, 'login']);
    Route::post('signup/{venueId}',  [AuthController::class, 'signUp']);

    Route::group([
        'middleware' => 'auth:api'
    ], function() {
      //  Route::get('logout', [AuthController::class, 'logout']);
      //  Route::get('user', [AuthController::class, 'user']);
    });
});

Route::group([
    'prefix' => 'venues',
    //'middleware' => 'auth:api'
], function() {
    Route::get('/', VenuesController::class);
});

Route::group([
    'prefix' => 'galeries',
    //'middleware' => 'auth:api'
], function() {
    Route::get('/', GalleryController::class);
});

Route::group([
    'prefix' => 'workout',
], function() {
    Route::get('/', \App\Http\Controllers\Workout\WorkoutController::class);
    Route::get('/count', \App\Http\Controllers\Workout\WorkoutCountController::class);
    Route::get('/{slug}', \App\Http\Controllers\Workout\WorkoutController::class);
});

Route::group([
    'prefix' => 'coaches',
], function() {
    Route::get('/', \App\Http\Controllers\Coaches\CoachesController::class);
});

Route::group([
    'prefix' => 'blog',
], function() {
    Route::get('/', \App\Http\Controllers\Blog\BlogListsController::class);
    Route::get('/{slug}', \App\Http\Controllers\Blog\PostController::class);
});

Route::group([
    'prefix' => 'sponsors',
], function() {
    Route::get('/', \App\Http\Controllers\Sponsors\SponsorsController::class);
});