<?php

namespace App\Http\Controllers\Workout;

use App\Http\Resources\Workouts\WorkoutResource;
use App\Models\Workout;
use App\Models\WorkoutUser;
use Illuminate\Routing\Controller;


class WorkoutController extends Controller
{
    public function __invoke(int $workoutId)
    {

        return new WorkoutResource( Workout::where('id', $workoutId)->first() );
    }
}