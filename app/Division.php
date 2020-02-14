<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    protected $fillable = [
      'name'
    ];

    public function departments(){

        return $this->hasMany('App\Department');
    }
    public function designations(){
        return $this->hasMany('App\Designation');
    }

}
