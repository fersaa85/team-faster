<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Venue extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
    ];

    /**
     * Get the user that owns the phone.
     */
    public function workout()
    {
        return $this->hasOne(Workout::class, 'id', 'venue_id');
    }


    public function getShowImageAttribute()
    {
        return \Storage::disk('public')->url('venues/'. $this->attributes['image']);
    }
}