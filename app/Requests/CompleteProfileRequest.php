<?php

namespace App\Http\Requests;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Exceptions\HttpResponseException;

class CompleteProfileRequest extends FormRequest
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
            'password' => 'required',
            'psuedo_name' => 'required',
            'contact' => 'required'
        ];
    }


    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->all();
        $json = [
            'status' => 0,
            'message' => $errors
        ];
        throw new HttpResponseException(response()->json($json, 422));
    }
}
