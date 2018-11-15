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
//        $details = \DB::$table('performances_test')->get();
    }
}
