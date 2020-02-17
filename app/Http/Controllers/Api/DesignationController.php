<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\DesignationAddRequest;
use App\Department;
use App\Division;
use App\Designation;


class DesignationController extends Controller
{
    public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;

    public function getList()
    {
        $designation = Designation::with(['department'=>function($q){
            return $q->with('division')->get();
        }])->where('status', 1)->get();
        if ($designation->count() == 0) {

            $this->response = array(
                'api_status' => 0,
                'message' => 'No record Found',

            );
        } else {
            $this->response = array(
                'api_status' => 1,
                'message' => 'Your Designation Results !',
                'data' => $designation,
            );
        }
        return response()->json($this->response, $this->successStatus);
    }

    public function addDesignation(DesignationAddRequest $request)
    {

        $inputs = $request->all();

        if ($request->action == 'edit') {

            $obj = Designation::find($request->id);
            $obj->name = $request->name;
            $obj->division_id = $request->division_id;
            $obj->department_id = $request->department_id;
            $obj->save();
            $this->response = array(
                'api_status' => 1,
                'message' => 'Designation Updated Successfully !',
                'data' => $obj
            );
        } else {


            $designation = Designation::create($inputs);
           $design =  Designation::with(['department'=>function($q){
                return $q->with('division')->get();
            }])->find($designation->id);
            $this->response = array(
                'api_status' => 1,
                'message' => 'Designation Added Successfully !',
                'data' => $design
            );
        }



        return response()->json($this->response, $this->successStatus);
    }


    public function deleteDesignation(Request $request, $id)
    {

        $designation = Designation::find($id);
        $del = $designation->delete();

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
