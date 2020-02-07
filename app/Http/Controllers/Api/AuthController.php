<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\CreateLoginRequest;
use App\Http\Requests\CreateSignupRequest;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
class AuthController extends Controller
{
	public $successStatus = 200;
    public $response = array();

    public function login(Request $request){
    	$auth = Auth::attempt($request->all());
        if ($auth) {
            $user = Auth::user();
            //Remove Previous tokens
            if ($user->accessTokens != null) {
                $user->accessTokens()->delete();
            }
            //Create new token
            $token = $user->createToken('Laravel')->accessToken;
            $this->response = array(
                'status' => true,
                'message' => 'Successfully Login !',
                'token' => $token,
                'data' => $user
            );
        }else{
            $this->response = array(
                'status' => false,
                'message' => 'User Email or Password is Incorrect !'
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

    public function signUp(CreateSignupRequest $request){

        $user = User::create($request->all());
        if($user->id){
            $this->response = array(
                'status' => true,
                'message' => 'SignUp Successfully'
            );
        }else{
            $this->response = array(
                'status' => false,
                'message' => 'Failed to SignUp!'
            );
        }
        return response()->json($this->response, $this->successStatus);
    }
}
