<?php

namespace App\Http\Resources\Workouts;

use App\Http\Resources\Coaches\CoacheResource;
use App\Http\Resources\Venues\VenueGalleryResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\WorkoutUser;
use App\Models\WorkoutLimit;


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
        $limit = WorkoutLimit::first();
        return [
            'id' => $this->id,
            'venue' => new VenueGalleryResource($this->venue),
            'coatch' => new CoacheResource($this->coatch),
            'date_start' => $this->date_start,
            'description' => isset($this->description) ? $this->description : '',
            'timeline' => $this->timeline,
            'couches' => $this->couches,
            'limit' => WorkoutUser::where('workout_id', $this->id)->whereYear('created_at', date('Y'))->count() >= $limit->limit_user,
            'active'=> $this->active,
        ];
    }
}
