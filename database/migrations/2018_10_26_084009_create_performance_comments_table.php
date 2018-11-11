<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformanceCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performance_comments', function (Blueprint $table) {
            $table -> increments('id')               -> comment('主キー');
            $table -> unsignedInteger('user_id')     -> comment('ユーザID');
            $table -> string('content')              -> comment('コメント内容');
            $table -> timestampTz('register')        -> comment('投稿日時');

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
        Schema::dropIfExists('performance_comments');
    }
}
