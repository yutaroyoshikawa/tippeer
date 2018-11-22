<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Places_test extends Model
{
    protected $table = 'places_test';

    protected $guarded = array('id');

    public $timestamps = false;

    protected $fillable = [
        'place_name', 'address'
    ];

    /**
     * パフォーマンスの取得
     */

    public function Performances_test() {
        return $this -> hasMany('App\Performances_test');
    }
}
<<<<<<< HEAD
=======

>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
