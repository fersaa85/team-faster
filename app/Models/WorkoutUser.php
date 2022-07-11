<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class WorkoutUser extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'workout_id',
        'user_id',
    ];
}