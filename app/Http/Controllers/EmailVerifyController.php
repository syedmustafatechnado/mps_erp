<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserVerification;
use App\User;

class EmailVerifyController extends Controller
{
    //

    public function verify($user_id,$code){
        $where = array(
            'user_id' => $user_id,
            'code' => $code,
            'is_expired' => '0'
        );
        $verification =  UserVerification::where($where)->first();
        if($verification != null){
           $verification->is_verified = '1';
           $verification->is_expired = '1';
            $verify = $verification->save();
            //Update User Table
            $user = User::whereId($user_id)->get()->first();
            $user->is_profile_complete = '1';
            $upd = $user->save();
            if($upd && $verify)
                echo "Verified Successfully";
            else
                echo "Something went wrong !";

        }else{
            echo "<b>No Record Found OR Link would be expired</b>";
        }
    }
}
