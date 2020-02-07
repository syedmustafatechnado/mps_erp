<?php

namespace App\Http\Requests;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Exceptions\HttpResponseException;
class CreateLoginRequest extends FormRequest
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
            'email' => 'required|email',
            'password' => 'required',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $param = ['email' => $this->email, 'password' => $this->password];
        $validator->after(function ($validator)use ($param) {
            if ( !Auth::attempt($param) ) {
                //$validator->errors()->add('password', 'Your current password is incorrect.');
            }
        });
        return;
    }

    public function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->all();
        $json = [
            'status' => false,
            'message' => $errors
        ];
        throw new HttpResponseException(response()->json($json, 422));
    }
}
