<?php

namespace App\Http\Controllers\Venues;

use App\Http\Resources\Venues\CoacheResourceCollection;
use App\Models\Venue;
use Illuminate\Routing\Controller;


class VenuesController extends Controller
{
  public function __invoke()
  {
      return new CoacheResourceCollection(Venue::get());
  }
}