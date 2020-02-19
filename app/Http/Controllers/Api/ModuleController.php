<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Module;


class AuthController extends Controller
{
    public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;



    public function getList()
    {
        $modules = Module::all();
        if ($modules->count() == 0) {

            $this->response = array(
                'api_status' => 0,
                'message' => 'No record Found',

            );
        } else {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Your Users Results !',
                'data' => $modules,
            );
        }
        return response()->json($this->response, $this->successStatus);
    }
}
