<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\CreateLoginRequest;
use App\Http\Requests\CreateSignupRequest;
use App\Http\Requests\Api\UserAddRequest;
use App\Http\Controllers\Controller;
use Auth;
use App\User;
use Mail;
use App\UserVerification;
use App\Http\Requests\Api\ChangePasswordRequest;

class AuthController extends Controller
{
	public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;

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

    public function getList(){
        $users = User::all();
        if ($users->count() == 0) {

            $this->response = array(
                'api_status' => 0,
                'message' => 'No record Found',

            );
        } else {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Your Users Results !',
                'data' => $users,
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

    public function deleteUser(Request $request, $id)
    {

        $user = User::find($id);
        $del = $user->delete();

        if ($del) {
            $this->response = array(
                'api_status' => 1,
                'message' => "Successfully Deleted",
            );
        } else {
            $this->response = array(
                'api_status' => 0,
                'message' => "Failed to Remove",
            );
        }

        return response()->json($this->response, $this->successStatus);
    }

    public function addUser(UserAddRequest $request)
    {

        $inputs = $request->all();
        //dd($inputs);
        if($request->action=='edit')
        {

            $obj = User::find($request->id);
            $obj->name = $request->name;
            $obj->division_id = $request->division_id;
            $obj->save();
            $this->response = array(
                'api_status' => 1,
                'message' => 'User Updated Successfully !',
                'data' => $obj


            );

        }
        else{

            $users = User::create($inputs);
            $this->send_code($users->id);
            $this->response = array(
                'api_status' => 1,
                'message' => 'User Added Successfully !',
                'data' => $users


            );
        }



        return response()->json($this->response, $this->successStatus);
    }

    public function complete_profile(Request $request){
        $rules = [
            'email' => 'required|email'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $this->response = array(
                'api_status' => 0,
                'message' => $validator->errors()->all()[0]
            );
            return response()->json($this->response, $this->successStatus);
        }
        $user = User::where('email', $request->input('email'));
        $count = $user->count();
        if ($count == 0) {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Email does not exist!'
            );
        }else{
            /**** SEND MAIL ****/
            $this->to_email = $request->input('email');
//            $encoded_email = urlencode(base64_encode($this->to_email));
            $new_pwd = uniqid();
            $data = array('new_password' => $new_pwd);
            $user_id = $user->get()->toArray()[0]['id'];
            $user = User::find($user_id);
            $user->password = bcrypt($new_pwd);
            $user->is_otp = '1';
            $user->is_email_verify = '1';
            Mail::send('forget', $data, function ($message) {
                $message->to($this->to_email, 'User')
                    ->subject('Forget Password');
                $message->from('test@haulers.com', 'Support');
            });
            $user->save();
            $this->response = array(
                'api_status' => '1',
                'message' => "Kindly Check Your Email!",
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

    public function send_code($user_id){
        //Add user Verification
        $code = substr(rand(),0,5);
        $verification = array(
            'user_id' => $user_id,
            'code' => $code
        );
        UserVerification::create($verification);
        $user = User::whereId($user_id)->get()->first();
        /**** SEND MAIL ****/
        $this->to_email = $user->email;
        $data = array('verify_link' => env('APP_URL') . 'email/verification/' . $user->id . '/' . $code);
       // $data = array('verify_link' => "Your Code is ".$code);
        Mail::send('mail', $data, function ($message) {
            $message->to($this->to_email, 'User')
                ->subject('Complete Your Profile');
            $message->from('admin@mps.com', 'admin');
        });
    }


    public function changePassword(ChangePasswordRequest $request)
    {

        $user = User::find(Auth::user()->id);
        if (Hash::check($request->input('old_password'), $user->password)) {
            $user->password = bcrypt($request->input('new_password'));
            $upd = $user->save();
            if ($upd) {
                $this->response = array(
                    'api_status' => 1,
                    'message' => 'Your Password has been changed!',
                );
            } else {
                $this->response = array(
                    'api_status' => 0,
                    'message' => 'Old Password is not matched',
                );
            }
        } else {
            $this->response = array(
                'api_status' => 0,
                'message' => 'Old Password is not matched',
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

}
