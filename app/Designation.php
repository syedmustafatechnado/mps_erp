<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Designation extends Model
{
    protected $fillable = [
        'name','division_id','department_id'
      ];

    public function division()
    {
        return $this->belongsTo('App\Division');
    }
    public function department()
    {
        return $this->belongsTo('App\Department');
    }
}
