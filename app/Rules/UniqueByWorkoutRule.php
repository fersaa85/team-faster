<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UniqueByWorkoutRule implements Rule
{

    protected $table;

    protected $column;

    protected $workoutId;

    protected $message;
    /**
     * @param int $table
     * @return $this
     */
    public function table(string $table)
    {
        $this->table = $table;

        return $this;
    }

    /**
     * @param int $column
     * @return $this
     */
    public function column(string $column)
    {
        $this->column = $column;

        return $this;
    }

    /**
     * @param int $companyId
     * @return $this
     */
    public function workoutId(int $workoutId)
    {
        $this->workoutId = $workoutId;

        return $this;
    }


    /**
     * @param int $companyId
     * @return $this
     */
    public function trans(string $trans)
    {
        $this->trans = $trans;

        return $this;
    }


    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $user = User::where("$attribute", $value)->first();
        if($user){
           if(DB::table($this->table)->where('workout_id', $this->workoutId)->where('user_id', $user->id)->first()){
               $this->trans = 'Ya te has regitrado para este workout';
               return false;
           }
        }


        if(DB::table($this->table)->where('workout_id', $this->workoutId)->count()  > 70){

            $this->trans = 'Cupo agotado';
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return $this->trans??"Poblema con el workout";
    }
}
