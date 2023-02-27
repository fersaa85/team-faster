<?php

namespace App\Http\Controllers\Calendar;

use App\Http\Resources\Venues\VenueGalleryResourceCollection;
use App\Models\Venue;
use Illuminate\Routing\Controller;


class GooleCalendarController extends Controller
{
    public function __invoke()
    {

        dd('aqui');
    }
}