<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\DepartmentAddRequest;
use App\Department;
use App\Division;

class DepartmentController extends Controller
{
    public $successStatus = 200;
    public $response = array();
    public $failedStatus = 500;

    public function getList()
    {
        $departments = Department::with('division')->where('status', 1)->get();
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

    public function addDepartment(DepartmentAddRequest $request)
    {

        $inputs = $request->all();
        //dd($inputs);
        if($request->action=='edit')
        {

            $obj = Department::find($request->id);
            $obj->name = $request->name;
            $obj->division_id = $request->division_id;
            $obj->save();
            $this->response = array(
                'api_status' => 1,
                'message' => 'Department Updated Successfully !',
                'data' => $obj


            );

        }
        else{

            // $divisions = Division::where('status', 1)->get();
            $departments = Department::create($inputs);
            $this->response = array(
                'api_status' => 1,
                'message' => 'Department Added Successfully !',
                'data' => $departments


            );
        }



        return response()->json($this->response, $this->successStatus);
    }


    public function deleteDepartment(Request $request, $id)
    {

        $department = Department::find($id);
        $del = $department->delete();

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
