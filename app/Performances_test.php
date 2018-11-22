<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Performances_test extends Model
{
    protected $table = 'performances_test';

    protected $guarded = array('id');

    public $timestamps = false;

    protected $fillable = [
        'performance_name', 'artist_id', 'place_id', 'tag'
    ];

    /**
     * パフォーマンスをするアーティストの取得
     */

    public function Artists_test() {
        return $this -> belongsTo('App\Artists_test');
    }

    /**
     * パフォーマンスをする場所の取得
     */

    public function Places_test() {
        return $this -> belongsTo('App\Places_test');
    }

    public function performance_details() {
<<<<<<< HEAD
        $details = \DB::$table('performances_test')->get();
=======
//        $details = \DB::$table('performances_test')->get();
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
    }
}
