<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Gallery extends Model
{
    public $table = 'galery';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
    ];




    public function setNameAttribute($pictures)
    {
        if (is_array($pictures)) {
            $this->attributes['name'] = json_encode($pictures);
        }
    }


    public function getNameAttribute($pictures)
    {
        return json_decode($pictures, true);
    }
}