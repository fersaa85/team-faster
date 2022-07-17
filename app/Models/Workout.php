<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Workout extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
    ];

    /**
     * Get the user that owns the phone.
     */
    public function venue()
    {
        return $this->belongsTo(Venue::class, 'venue_id', 'id');
    }


    /**
     * Get the user that owns the phone.
     */
    public function coache()
    {
        return $this->belongsTo(Coache::class, 'coache_id', 'id');
    }
}