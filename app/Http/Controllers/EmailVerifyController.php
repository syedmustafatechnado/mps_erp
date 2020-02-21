<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\UserVerification;
use App\User;
use Illuminate\Support\Facades\Hash;
use Auth;
use App\Http\Requests\CompleteProfileRequest;

class EmailVerifyController extends Controller
{
    //


    public function index($user_id, $code)
    {
        $where = array(
            'user_id' => $user_id,
            'code' => $code,
            'is_expired' => '0'
        );
        $verification =  UserVerification::where($where)->first();
        if ($verification != null) {
            $verification->is_verified = '1';
            $verification->is_expired = '1';
            $verify = $verification->save();
            //Update User Table
            $user = User::whereId($user_id)->get()->first();
            $user->is_profile_complete = '1';
            $upd = $user->save();
            if ($upd && $verify) {

                return view('profile', ['user_id' => $user_id]);
            } else {
                echo "Something went wrong !";
            }
        } else {
            echo "<b>No Record Found OR Link would be expired</b>";
        }
    }

    public function reset($user_id, $code)
    {
        $where = array(
            'user_id' => $user_id,
            'code' => $code,
            'is_expired' => '0'
        );
        $verification =  UserVerification::where($where)->first();
        if ($verification != null) {
            $verification->is_verified = '1';
            $verification->is_expired = '1';
            $verify = $verification->save();
            if ($verify) {

                return view('changepassword', ['user_id' => $user_id]);
            } else {
                echo "Something went wrong !";
            }
        } else {
            echo "<b>No Record Found OR Link would be expired</b>";
        }
    }

    public function changePassword(Request $request){
        $content = User::find($request->user_id);
        $content->password = Hash::make($request->password);

        $upd = $content->save();
        return view('passwordchanged');
    }

    public function verify(CompleteProfileRequest $request)
    {
        $content = User::find($request->user_id);
        $content->psuedo_name = $request->psuedo_name;
        $content->contact = $request->contact;
        $content->password = Hash::make($request->password);

        $upd = $content->save();
        return view('profilecomplete');

    }
}
