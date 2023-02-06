<?php

namespace App\Http\Resources\Venues;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Workout;

class VenueResource extends JsonResource
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
            'name' => $this->name,
            'address' => $this->address,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'image' => '/'.$this->image,
            'image_map' => $this->image_map,
            'thumbnail' => $this->thumbnail,
            'google_maps' => $this->google_maps,
            'workout' => Workout::where('venue_id', $this->id)->first(),
            'slug' => $this->slug,
        ];
    }
}
