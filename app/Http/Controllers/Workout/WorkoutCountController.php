<?php

namespace App\Http\Controllers\Workout;

use App\Models\Workout;
use App\Models\WorkoutUser;
use Illuminate\Routing\Controller;


class WorkoutCountController extends Controller
{
    public function __invoke()
    {
        $workout = Workout::where('active', 1)->first();

        return response()->json([
            'workout_id' => $workout->id,
            'count' => WorkoutUser::where('workout_id', $workout->id)->count()
        ]);
    }
}