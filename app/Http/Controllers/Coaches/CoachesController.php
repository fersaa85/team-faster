<?php

namespace App\Http\Controllers\Coaches;

use App\Http\Resources\Coaches\CoacheResourceCollection;
use App\Models\Coatch;
use Illuminate\Routing\Controller;


class CoachesController extends Controller
{
    public function __invoke()
    {
        return new CoacheResourceCollection(Coatch::get());
    }
}