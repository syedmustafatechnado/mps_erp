<?php

namespace App\Http\Requests\Api;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Http\Requests\Api\ChangePasswordRequest;


use App\User;
use Illuminate\Validation\Rule;


class ChangePasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return auth()->check();

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

            'new_password' => 'required',
            'old_password' => 'required'

        ];
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->all()[0];
        $json = [
            'api_status' => 0,
            'message' => $errors
        ];
        throw new HttpResponseException(response()->json($json, 422));
    }
}
