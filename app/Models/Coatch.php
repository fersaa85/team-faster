<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Coatch extends Model
{
    public $table = 'coatchs';
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