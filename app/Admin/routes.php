<?php

use Illuminate\Routing\Router;

Admin::routes();

Route::group([
    'prefix'        => config('admin.route.prefix'),
    'namespace'     => config('admin.route.namespace'),
    'middleware'    => config('admin.route.middleware'),
    'as'            => config('admin.route.prefix') . '.',
], function (Router $router) {

    $router->get('/', 'HomeController@index')->name('home');
    $router->get('/user/records', 'UserRecordsController@index')->name('user.records');
    $router->get('/user/limit', 'UserRecordsController@limit')->name('user.limit');

    $router->resource('venue', VenueController::class);
    $router->resource('coatches', CoatchController::class);
    $router->resource('galeries', GalleryController::class);
    $router->resource('sponsors', SponsorsController::class);
    $router->resource('posts', PostController::class);
    $router->resource('workouts', WorkoutController::class);
});
