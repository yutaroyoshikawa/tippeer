<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $thumbnailUrl = '';
        Schema::create('performances', function (Blueprint $table) use($thumbnailUrl) {
            $table -> increments('id')                                              -> comment('主キー');
            $table -> UnsignedInteger('user_id')->nullable(false)                   -> comment('ユーザID');
            $table -> UnsignedInteger('location_id')->nullable(false)               -> comment('ロケーションID');
            $table -> dateTimeTz('start')->nullable(false)                          -> comment('パフォーマンス開始時間');
            $table -> dateTimeTz('finish')->nullable(false)                         -> comment('パフォーマンス終了時間');
            $table -> string('thumbnail')->nullable(false)->default($thumbnailUrl)  -> comment('いいね！');
            $table -> string('description')->nullable(false)                        -> comment('パフォーマンス概要');
            $table -> UnsignedInteger('state_id')->nullable(false)                  -> comment('パフォーマンス申請状態');

            $table -> index('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('performances');
    }
}
