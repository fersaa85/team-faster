<?php

namespace App\Http\Resources\Galeries;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Gallery;
use App\Models\Workout;


class VenueGalleryResource extends JsonResource
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
            'image' => '/'.$this->image,
            'workout_id' => $this->workout_id,
            'workout' => Workout::where('venue_id', $this->id)->first(),
            'gallery' => Gallery::where('workout_id', $this->workout_id)->count()
        ];
    }
}
