<?php

namespace App\Http\Requests\Api;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;



use App\User;
use Illuminate\Validation\Rule;


class DesignationAddRequest extends FormRequest
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

        $rules = [
            'name' => 'required',
            'division_id' => 'required',
            'department_id' => 'required'
        ];

        return $rules;
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->all()[0];
        $json = [
            'api_status' => 0,
            'message' => $errors
        ];
        throw new HttpResponseException(response()->json($json, 200));
    }
}
