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
}