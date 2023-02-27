<?php

namespace App\Http\Controllers\Galeries;

use App\Http\Resources\Galeries\GalleryResource;
use App\Models\Gallery;
use Illuminate\Routing\Controller;


class GalleryController extends Controller
{
    public function __invoke($woroutId)
    {
        return GalleryResource::collection(Gallery::where('workout_id',$woroutId)->get());
    }
}