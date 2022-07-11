<?php

namespace App\Http\Resources\Workouts;

use App\Http\Resources\Coaches\CoacheResource;
use App\Http\Resources\Venues\VenueResource;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkoutResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return [
            'id' => $this->id,
            'venue' => new VenueResource($this->venue),
            'coache' => new CoacheResource($this->coache),
            'date_start' => $this->date_start,
            'description' => $this->description,
            'timeline' => $this->timeline,
        ];
    }
}
