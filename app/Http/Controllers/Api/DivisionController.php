<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\DivisionAddRequest;
use App\Http\Requests\Api\DivisionDeleteRequest;
use Auth;
use Validator;
use App\User;
use App\Division;



class DivisionController extends Controller
{

    public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;

    public function getList()
    {
       $divisions= Division::where('status', 1)->get();
        if ($divisions->count() == 0) {

            $this->response = array(
                'api_status' => 0,
                'message' => 'No record Found',

            );
        } else {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Your Divisions Results !',
                'data' => $divisions,
            );
        }
        return response()->json($this->response, $this->successStatus);

    }

    public function addDivision(Request $request)
    {

        $inputs = $request->all();

      //  dd($inputs);
        $divisions= Division::create($inputs);


        $this->response = array(
            'api_status' => 1,
            'message' => 'Division Added Successfully !',
            'data' => $divisions


        );

        return response()->json($this->response, $this->successStatus);
    }

    public function deleteDivision(Request $request,$id)
    {

        $inputs = $request->all();
        $division = Division::find($id);
        $del = $division->delete();

        if ($del) {
            $this->response = array(
                'api_status' => '1',
                'message' => "Successfully Deleted",
            );
        } else {
            $this->response = array(
                'api_status' => '0',
                'message' => "Failed to Remove",
            );
        }

        return response()->json($this->response, $this->successStatus);
    }

}
