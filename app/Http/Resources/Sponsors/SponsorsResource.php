<?php

namespace App\Http\Resources\Sponsors;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Workout;

class SponsorsResource extends JsonResource
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
            'image' => '/'.$this->image,
        ];
    }
}
