<?php

namespace App\Http\Controllers\Sponsors;

use App\Models\Sponsors;
use App\Models\WorkoutUser;
use Illuminate\Routing\Controller;
use App\Http\Resources\Sponsors\SponsorsResource;


class SponsorsController extends Controller
{
    public function __invoke()
    {
        return SponsorsResource::collection(Sponsors::get(['id', 'name', 'image']));
    }
}