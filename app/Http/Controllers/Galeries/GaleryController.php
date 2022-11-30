<?php

namespace App\Http\Controllers\Galeries;

use App\Http\Resources\Galeries\GaleryResource;
use App\Models\Galery;
use Illuminate\Routing\Controller;


class GaleryController extends Controller
{
    public function __invoke()
    {
        return (GaleryResource::collection(Galery::get()));
    }
}