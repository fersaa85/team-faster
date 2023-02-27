<?php

namespace App\Http\Controllers\Galeries;

use App\Http\Resources\Galeries\VenueGalleryResourceCollection;
use App\Models\Venue;
use Illuminate\Routing\Controller;


class VenuesGalleryController extends Controller
{
    public function __invoke()
    {
        return new VenueGalleryResourceCollection(Venue::join('workouts', 'venues.id', '=', 'workouts.venue_id')->orderBy('date_start')->get(['venues.*', 'workouts.id as workout_id']));
    }
}