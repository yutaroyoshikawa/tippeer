<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artists_test extends Model
{
    protected $table = 'artists_test';

    protected $guarded = array('id');

    public $timestamps = false;

    protected $fillable = [
<<<<<<< HEAD
        'artist_name', 'twitter_id'
=======
        'artist_name','twitter_id'
>>>>>>> 4db33aa87bde0dd77e535a690ea2b96919e2bb97
    ];

    /**
     * パフォーマンスの取得
     */

    public function Performances_test() {
        return $this -> hasMany('App\Performances_test');
    }
}
