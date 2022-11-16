<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Workout;
use App\Models\User;
use App\Models\WorkoutUser;
use App\Models\WorkoutLimit;


class UserRecordsController extends Controller
{
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    public function index(Request $request)
    {
        $venue_id = $request->get('venue_id');
        $workout = Workout::where('venue_id', $venue_id)->first();
        if($workout) {

            $users = User::whereIn('id', WorkoutUser::where('workout_id', $workout->id)->pluck('user_id'))->get();

            $fileName = "reporte-venue-$venue_id.csv";
            $headers = array(
                "Content-type" => "text/csv",
                "Content-Disposition" => "attachment; filename={$fileName}",
                "Pragma" => "no-cache",
                "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
                "Expires" => "0"
            );

            $columns = array(
                'Nombre',
                'Apellido',
                'Email',
                'Telefono',
                'Edad',
                'Talla',
            );

            $callback = function () use ($users, $columns) {
                $file = fopen('php://output', 'w');
                fputcsv($file, $columns);

                dd($users);
                foreach ($users as $user) {

                    fputcsv($file, [
                        isset($user->name) ? $user->name : '-' ,
                        isset($user->last_name) ? $user->last_name : '-' ,
                        isset($user->email) ? $user->email : '' ,
                        isset($user->phone) ? $user->phone : '' ,
                        isset($user->age) ? $user->age : '' ,
                        isset($user->size) ? $user->size : '' ,
                    ]);

                    fclose($file);
                }
            };

            return response()->stream($callback, 200, $headers);

        }

    }

    public function limit(Request $request){

        $workoutLimit = WorkoutLimit::where('id', 1)->first();
        $workoutLimit->limit_user = $request->get('limit_user', 100);
        $workoutLimit->save();

        return back();
    }

}