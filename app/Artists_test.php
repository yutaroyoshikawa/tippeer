<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artists_test extends Model
{
    protected $table = 'artists_test';

    protected $guarded = array('id');

    public $timestamps = false;

    protected $fillable = [
        'artist_name', 'twitter_id'
    ];

    /**
     * パフォーマンスの取得
     */

    public function Performances_test() {
        return $this -> hasMany('App\Performances_test');
    }
}
