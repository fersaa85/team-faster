<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string',
            'last_name' => 'required|string',
            'phone' => 'required|string|regex:/[0-9]{10}/|unique:users',
            'birthday' => ['required', 'before:' . Carbon::now()->subYears(18)->format('Y-m-d') ],
            'acceptTerms' => 'required|integer|accepted',
        ];
    }
}
