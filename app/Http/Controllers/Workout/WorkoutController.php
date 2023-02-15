<?php

namespace App\Http\Controllers\Workout;

use App\Http\Resources\Workouts\WorkoutResource;
use App\Models\Workout;
use App\Models\WorkoutUser;
use Illuminate\Routing\Controller;


class WorkoutController extends Controller
{
    public function __invoke($slug = null)
    {
        return new WorkoutResource( $slug ?
            Workout::join('venues', 'workouts.venue_id', '=',  'venues.id')->where('venues.slug',$slug )->select('workouts.*')->first() :
            Workout::join('venues', 'workouts.venue_id', '=',  'venues.id')->where('workouts.active', 1)->first() );
    }
}