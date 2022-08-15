<?php

namespace App\Http\Resources\Workouts;

use App\Http\Resources\Coaches\CoacheResource;
use App\Http\Resources\Venues\VenueResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Workout;


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
            'coatch' => new CoacheResource($this->coatch),
            'date_start' => $this->date_start,
            'description' => $this->description,
            'timeline' => $this->timeline,
            'couches' => $this->couches,
            'occupation' => Workout::where('id', $this->id)->count(),
            'active'=> $this->active,
        ];
    }
}
