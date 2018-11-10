<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PerformanceCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performance_comments', function (Blueprint $table) {
            $table -> increments('id') -> comment('主キー');
            $table -> unsignedInteger('user_id') -> comment('ユーザID');
            $table -> string('content') -> comment('コメント内容');
            $table -> timestamps() -> comment('投稿日');

            $table -> foreign('user_id')
                -> references('id')
                -> on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('performance_comments');
    }
}
