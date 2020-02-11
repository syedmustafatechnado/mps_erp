<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Department;

class DepartmentController extends Controller
{
    public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;

    public function getList()
    {
        $departments = Department::where('status', 1)->get();
        if ($departments->count() == 0) {

            $this->response = array(
                'api_status' => 0,
                'message' => 'No record Found',

            );
        } else {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Your Departments Results !',
                'data' => $departments,
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

}
