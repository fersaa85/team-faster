<?php

namespace App\Http\Requests;

use App\Models\Workout;
use App\Rules\UniqueByWorkoutRule;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //$workout = Workout::where('date_start', '>', date('Y-m-d H:i:s'))->first();
        $workout = Workout::where('venue_id',  app('request')->get('venue_id'))->first();
        $uniqueByWorkoutRule = (new UniqueByWorkoutRule())->table('workout_users')->workoutId($workout->id);

        return [
            'name' => 'required|string',
            'email' => ['required', 'string', 'email', $uniqueByWorkoutRule],
            //'password' => 'required|string',
            'last_name' => 'required|string',
            'phone' => 'string|regex:/[0-9]{10}/',
            'age' => 'required|integer',
            'size' => 'required|string',
            //'birthday' => ['required', 'before:' . Carbon::now()->subYears(18)->format('Y-m-d') ],
        ];
    }
}
