<?php

namespace App\Http\Controllers\Galeries;

use App\Http\Resources\Galeries\GalleryResource;
use App\Models\Gallery;
use Illuminate\Routing\Controller;


class GalleryController extends Controller
{
    public function __invoke()
    {
        return (GalleryResource::collection(Gallery::get()));
    }
}