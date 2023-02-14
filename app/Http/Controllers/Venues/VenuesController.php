<?php

namespace App\Http\Controllers\Venues;

use App\Http\Resources\Venues\VenueResourceCollection;
use App\Models\Venue;
use Illuminate\Routing\Controller;


class VenuesController extends Controller
{
  public function __invoke()
  {
      return new VenueResourceCollection(Venue::join('workouts', 'venues.id', '=', 'workouts.venue_id')->orderBy('date_start')->get(['venues.*']));
  }
}