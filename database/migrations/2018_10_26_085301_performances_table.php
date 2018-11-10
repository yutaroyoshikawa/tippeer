<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PerformancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performances', function (Blueprint $table) {
            $table -> increments('id') -> comment('主キー');
            $table -> UnsignedInteger('user_id') -> comment('ユーザID');
            $table -> UnsignedInteger('location_id') -> comment('ロケーションID');
            $table -> timestamps('start') -> comment('パフォーマンス開始時間');
            $table -> timestamps() -> comment('パフォーマンス終了時間');
            $table -> string('thumbnail') -> comment('いいね！');
            $table -> string('description') -> comment('パフォーマンス概要');
            $table -> UnsignedInteger('state_id') -> comment('パフォーマンス申請状態');

            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

//            $table -> foreign('location_id')
//                -> references('id')
//                -> on('locations');

            $table -> foreign('state_id')
                -> references('id')
                -> on('performance_states');
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
